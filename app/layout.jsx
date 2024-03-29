import "./globals.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "LA PLACE",
  description: "Your map device",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="favicon/favicon.ico"
        type="image/x-icon"
      />
      <body className="font-NeueLeiden max-w-4xl mx-4 md:mx-auto overflow-x-hidden bg-CreamyWhite-0">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
