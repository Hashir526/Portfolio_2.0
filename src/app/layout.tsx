import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@organisms";
// import { SnackbarProvider } from "notistack";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Hashir.K portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*<SnackbarProvider
          maxSnack={1}
          autoHideDuration={3000}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Navbar />
          {children}
        </SnackbarProvider>*/}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
