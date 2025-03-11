export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col min-h-screen">
        <nav className="p-4 bg-gray-800 text-white">Panel de Administración</nav>
        <main className="flex-grow p-4">{children}</main>
      </div>
    );
  }
  