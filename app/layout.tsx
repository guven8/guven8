import "./global.css";

export const metadata = {
  title: "guven8.xyz",
  description: "guvens blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
