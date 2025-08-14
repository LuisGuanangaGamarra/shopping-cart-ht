import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactNode } from "react";
import ServerProviders from "./components/ServerProviders";

export const metadata = {
    title: "Mi Tienda",
    description: "Tienda con Next.js y Bootstrap",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="es">
            <body>
                <ServerProviders>{children}</ServerProviders>
            </body>
        </html>
    );
}