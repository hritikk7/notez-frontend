import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning = {true}>
        <body>
          <Header />

          <div className="flex min-h-screen">
            {/* sidebar */}
            <Sidebar />

            <div className="flex-1 bg-gray-100 p-4 ">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
