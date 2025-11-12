export function Footer() {
  return (
    <footer className="bg-background border dark:border-white/20 py-6 border-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-foreground">
            &copy; {new Date().getFullYear()} Fabric Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}