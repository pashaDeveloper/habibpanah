export function Container({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`container mx-auto px-4 z-10 ${className}`}>
      {children}
    </div>
  );
}