import Footer from "@/components/footer";
import er from "@/components/shared/er";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <er />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}
