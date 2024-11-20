import { useEffect, useState } from "react";
import axios from "axios";
import { Eye, Code } from "lucide-react";
import { HiDocument } from "react-icons/hi2";
import { endpoints } from "@/API/API";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNotifications } from "@/context/NotificationContext";
import { Button } from "@/components/ui/button";

const styles = {
  cardIcon: "h-4 w-4 text-[var(--paragraph)]",
};

interface StatCardProps {
  title: string;
  icon: React.ElementType;
  value: string | number | React.ReactNode;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  icon: Icon,
  value,
  description,
}) => (
  <Card>
    <CardHeader className="max-md:flex max-md:flex-row">
      <CardTitle>{title}</CardTitle>
      <Icon className={styles.cardIcon} />
    </CardHeader>
    <CardContent className="flex w-max flex-col items-start justify-start gap-2">
      <CardTitle className="opacity-80">{value}</CardTitle>
      <CardDescription className="text-xs opacity-80">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

export default function AdminPage() {
  const [projectsCount, setProjectsCount] = useState<string | number>("");
  const [worksCount, setWorksCount] = useState<string | number>("");
  const [greeting, setGreeting] = useState("");
  const { addNotification } = useNotifications();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, worksRes] = await Promise.all([
          axios.get(endpoints.projectsArchiveCount),
          axios.get(endpoints.worksUnArchiveCount),
        ]);
        setProjectsCount(projectsRes.data);
        setWorksCount(worksRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning 🌅");
    else if (hour < 18) setGreeting("Good afternoon ☀️");
    else setGreeting("Good evening 🌃");
  }, []);

  const handleAddNotification = () => {
    addNotification("Test Notification", "This is a test notification");
  };

  return (
    <div className="space-y-6">
      {/* <PageTitle title={PageTitlesData.adminPage} /> */}

      <h1 className="text-3xl font-bold text-[var(--headline)]">{greeting}</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCard
          title="Experience"
          icon={HiDocument}
          value={worksCount.toString()}
          description="Total work experiences"
        />
        <StatCard
          title="Portfolio Views"
          icon={Eye}
          value={"35k"}
          description="Total page views"
        />
        <StatCard
          title="Projects"
          icon={Code}
          value={projectsCount.toString()}
          description="Showcased projects"
        />
      </div>

      <Button onClick={handleAddNotification}>Add Test Notification</Button>
    </div>
  );
}
