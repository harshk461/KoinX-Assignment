import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ weight: "400", subsets: ["cyrillic"] });

export const metadata = {
  title: "KoinX",
  description: "KoinX Assignment Developed in Next 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
