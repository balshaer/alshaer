import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SaveIcon } from "lucide-react";
import { baseUrl } from "@/API/API";
import Cookies from "js-cookie";
import { isExpired, decodeToken } from "react-jwt";
import { Navigate } from "react-router";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAdminProfile = (id: string) => api.get(`/admin/${id}`);
const updateAdminProfile = (id: string, data: AdminData) =>
  api.put(`/admin/${id}`, data);

interface AdminData {
  name: string;
  email: string;
  password: string;
  otp: string;
}

export default function ProfileAdminPage() {
  const [adminData, setAdminData] = useState<AdminData>({
    name: "",
    email: "",
    password: "",
    otp: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const token = Cookies.get("Bearer");
    if (!token) return <Navigate to={"/admin/login"} replace={true} />;

    const decodedToken = decodeToken(token) as { id: string } | null;
    if (isExpired(token) || !decodedToken) {
      return <Navigate to={"/admin/login"} replace={true} />;
    }

    setId(decodedToken.id);
    fetchAdminData(decodedToken.id);
  }, []);

  const fetchAdminData = async (adminId: string) => {
    try {
      const { data } = await getAdminProfile(adminId);
      setAdminData({
        name: data.name,
        email: data.email,
        password: "",
        otp: "",
      });
    } catch {
      setError("Failed to load admin data.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setAdminData((prevData) => ({ ...prevData, [id]: value }));
  };

  const clearForm = () => {
    setAdminData({ name: "", email: "", password: "", otp: "" });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await updateAdminProfile(id, adminData);
      setSuccess("Profile updated successfully!");
      clearForm(); // Clear form after successful submission
    } catch {
      setError("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="section">
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </div>

        <Input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={adminData.name}
          onChange={handleInputChange}
        />

        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={adminData.email}
          onChange={handleInputChange}
        />

        <Input
          id="password"
          type="password"
          placeholder="Enter your new password"
          value={adminData.password}
          onChange={handleInputChange}
        />

        <Input
          id="otp"
          type="number"
          placeholder="Enter your OTP"
          value={adminData.otp}
          onChange={handleInputChange}
        />

        <Button type="submit" className="w-full" disabled={loading}>
          <SaveIcon className="mr-2 h-4 w-4" />
          {loading ? "Saving..." : "Save Changes"}
        </Button>

        {error && <div className="mt-2 text-red-500">{error}</div>}
        {success && <div className="mt-2 text-green-500">{success}</div>}
      </form>
    </div>
  );
}
