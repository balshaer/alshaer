import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginAdminPage = () => {
  return (
    <div className="gradient-background flex min-h-[100vh] w-full items-center justify-center">
      <form className="Up flex h-[300px] w-[500px] flex-col items-center justify-between rounded-md bg-[var(--card-background)] p-5">
        <header className="flex items-center justify-center text-center">
          <h1 className="font-bold text-[var(--headline)]">Login</h1>
        </header>

        <div className="flex w-full flex-col gap-3">
          <Input type="text" placeholder="username" />
          <Input type="password" placeholder="password" />
        </div>

        <footer className="w-full">
          <Button className="w-full">login</Button>
        </footer>
      </form>
    </div>
  );
};

export default LoginAdminPage;
