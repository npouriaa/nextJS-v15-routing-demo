import "../globals.css";

// Components
import Footer from "@/components/layouts/root/Footer";

export const metadata = {
  title: "Auth root layout",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="p-6">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
