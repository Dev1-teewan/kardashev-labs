export function Logo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <img
      src="/logo1-transparent.png"
      alt="TypeOne Labs"
      width={28}
      height={28}
      className={className}
    />
  );
}
