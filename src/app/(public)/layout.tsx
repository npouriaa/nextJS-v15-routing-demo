import "../globals.css";

// Components
import Footer from "@/components/layouts/root/Footer";
import Header from "@/components/layouts/root/Header";

export const metadata = {
  title: "Public root layout",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
