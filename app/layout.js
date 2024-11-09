import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AS Immigrations | Trusted Immigration Services for a Brighter Future",
  description:
    "AS Immigrations provides expert, personalized immigration services to help individuals and families navigate the process of relocating smoothly. Our dedicated team is here to guide you at every step, making your journey towards a new life accessible and stress-free. Partner with us to build a brighter future today!",
  icons: {
    icon: "/images/AS.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
