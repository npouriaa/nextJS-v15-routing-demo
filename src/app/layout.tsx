import "./globals.css";

// Components
import Footer from "@/components/layouts/root/Footer";
import Header from "@/components/layouts/root/Header";
import { Metadata } from "next";
import { ErrorWrapper } from "./error-wrapper";

export const metadata: Metadata = {
  title: {
    default: "Public root layout",
    template: "%s | Public root layout",
    absolute: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="p-6">
        <Header />
        <main>
          <ErrorWrapper>{children}</ErrorWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
