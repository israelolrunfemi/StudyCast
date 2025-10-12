import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Studycast",
  description: "This is the home page",
};
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  )};