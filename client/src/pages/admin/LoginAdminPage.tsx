import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useCallback } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { endpoints } from "@/API/API";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface FormData {
  email: string;
  password: string;
}

const LoginAdminPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [inputEffect, setInputEffect] = useState(false);
  const { token, setToken } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [],
  );

  const handleLogin = useCallback(
    async (e: React.FormEvent): Promise<void> => {
      e.preventDefault();
      setLoading(true);
      setError(null);

      if (!formData.email || !formData.password) {
        setInputEffect(true);
        setLoading(false);
        toast.error("Please fill all fields");
        return;
      }

      try {
        const response = await axios.post(`${endpoints.loginAuth}`, formData, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        Cookies.set("Bearer", response.data.token);
        setToken(response.data.token);

        navigate("/admin");
      } catch (error) {
        console.error("Failed to login with error:", error);
        setError(
          "Failed to login. Please check your credentials and try again.",
        );
      } finally {
        setLoading(false);
      }
    },
    [formData, navigate, setToken, token],
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 100,
      }}
      transition={{
        duration: 0.5,
      }}
      className="gradient-background flex min-h-[100vh] w-full items-center justify-center"
    >
      <form
        onSubmit={handleLogin}
        className="Up flex h-auto w-[500px] flex-col items-center justify-center rounded-md bg-[var(--card-background)] p-5"
      >
        <header className="mb-4 flex items-center justify-center text-center">
          <h1 className="text-2xl font-bold text-[var(--headline)]">Login</h1>
        </header>

        <div className="flex w-full flex-col gap-3">
          <Input
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            type="email"
            placeholder="Email"
            className={cn({
              "input-error": inputEffect && !formData.email,
            })}
          />

          <Input
            name="password"
            value={formData.password}
            onChange={handleFormChange}
            type="password"
            placeholder="Password"
            className={cn({
              "input-error": inputEffect && !formData.password,
            })}
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button className="my-4 w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default LoginAdminPage;
