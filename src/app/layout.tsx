import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "./context/userContext";
import AuthSessionProvider from "./context/AuthSessionProvider";
import { ReactQueryProvider } from "./context/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { NotificationProvider } from "./context/NotificationContext";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <NotificationProvider>
          <ReactQueryProvider>
            <AuthSessionProvider session={session}>
              {/* <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            > */}
              <Toaster />
              <ContextProvider>{children}</ContextProvider>
              {/* </ThemeProvider> */}
            </AuthSessionProvider>
          </ReactQueryProvider>
        </NotificationProvider>
      </body>
    </html>
  );
}
