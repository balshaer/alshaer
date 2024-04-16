export default function Divider() {
  return (
    <span className="relative flex justify-center">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75" />
      <span className="relative z-10 bg-[var(--background)] text-[var(--paragraph)] opacity-60 px-6">
        Lorem, ipsum dolor
      </span>
    </span>
  );
}
