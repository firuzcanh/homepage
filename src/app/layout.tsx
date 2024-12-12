import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';

const fontBricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Firuzcan Haciyev',
  description: "I'm a software engineer with more than 7 years of experience",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={`${fontBricolage.variable}`}>{children}</body>
    </html>
  );
}
