import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "BusyOnFriday",
  description: "this is a personal website of BusyOnFriday",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* menu header */}
        <div className="flex gap-4 p-4 fixed h-20 w-full justify-end z-[999] items-center backdrop-blur-[2px] px-4 py-0 top-0;">
          {["experience", "project"].map((item) => (
            <div className="capitalize" key={item}>
              {item}
            </div>
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
