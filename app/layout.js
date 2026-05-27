import "./globals.css";

export const metadata = {
  title: "PrimePath Realty Leads",
  description: "Find your next home with expert guidance and fast property matches.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
