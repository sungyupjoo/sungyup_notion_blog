import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sungyup's Blog",
  description: 'Things I am curious about',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
