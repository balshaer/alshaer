import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: `
            group toast 
            group-[.toaster]:bg-var(--main) 
            group-[.toaster]:text-var(--illustration-stroke) 
            group-[.toaster]:border-border 
            group-[.toaster]:shadow-lg
          `,
          description: "group-[.toast]:text-[var(--paragraph)]",
          actionButton: `
            group-[.toast]:bg-primary 
            group-[.toast]:text-primary-foreground
          `,
          cancelButton: `
            group-[.toast]:bg-muted 
            group-[.toast]:text-[var(--paragraph)]
          `,
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
