import { useEffect, useState } from "react";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@radix-ui/react-tabs";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArchiveRestoreIcon, Trash2Icon } from "lucide-react";
import axios from "axios";
import { endpoints } from "@/API/API";

interface Project {
  _id: string;
  title: string;
  description: string;
}

interface Experience {
  _id: string;
  title: string;
  description: string;
}

const DeletedItemsAdminPage = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchArchivedData();
  }, [activeTab]);

  const fetchArchivedData = async () => {
    setLoading(true);
    try {
      const projectRequest = axios.get(endpoints.getArchivedProjects);
      const experienceRequest = axios.get(endpoints.getArchivedWorks);

      const [projectsResponse, experiencesResponse] = await Promise.all([
        projectRequest,
        experienceRequest,
      ]);

      setProjects(projectsResponse.data);
      setExperiences(experiencesResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRestore = async (id: string) => {
    const endpoint =
      activeTab === "projects"
        ? `${endpoints.unarchiveProject}${id}`
        : `${endpoints.unarchiveWork}${id}`;
    await handleApiRequest(endpoint, "post");
  };

  const handleDelete = async (id: string) => {
    const endpoint =
      activeTab === "projects"
        ? `${endpoints.deleteProject}${id}`
        : `${endpoints.deleteWork}${id}`;
    await handleApiRequest(endpoint, "delete");
  };

  const handleApiRequest = async (url: string, method: "post" | "delete") => {
    try {
      await axios({ method, url });
      fetchArchivedData();
    } catch (error) {
      console.error(
        `Error during ${method === "post" ? "restoration" : "deletion"}:`,
        error,
      );
    }
  };

  const columns = [
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }: { row: { original: Project | Experience } }) => (
        <div className="flex w-full justify-end gap-2">
          <ArchiveRestoreIcon
            className="sectionIcon cursor-pointer"
            onClick={() => handleRestore(row.original._id)}
          />
          <Trash2Icon
            className="sectionIcon cursor-pointer"
            onClick={() => handleDelete(row.original._id)}
          />
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: activeTab === "projects" ? projects : experiences,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <Tabs
        defaultValue="projects"
        onValueChange={(value) => setActiveTab(value)}
      >
        <header className="mb-4 flex w-full items-center justify-between">
          <h1 className="section-title">Deleted Items</h1>
          <TabsList>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
          </TabsList>
        </header>

        {/* Projects Tab */}
        <TabsContent value="projects">
          <div className="w-full">
            <div className="flex items-center py-4">
              <Input
                placeholder="Filter..."
                value={
                  (table.getColumn("title")?.getFilterValue() as string) ?? ""
                }
                onChange={(event) =>
                  table.getColumn("title")?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
              />
            </div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow key={row.id}>
                        {row.getVisibleCells().map((cell: any) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </div>
        </TabsContent>

        {/* Experiences Tab */}
        <TabsContent value="experiences">
          <div className="w-full">
            <div className="flex items-center py-4">
              <Input
                placeholder="Filter..."
                value={
                  (table.getColumn("title")?.getFilterValue() as string) ?? ""
                }
                onChange={(event) =>
                  table.getColumn("title")?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
              />
            </div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row: any) => (
                      <TableRow key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DeletedItemsAdminPage;
