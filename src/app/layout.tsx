import "../app/globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Examen DWEC 2025",
  description: "Aplicación web para el examen de DWEC",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}


