import "./globals.css";
import NavBar from "../components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>StartApp</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@600&display=swap" />
      </head>
      <body className="flex text-white flex-col">
        {children}
      </body>
    </html>
  );
}
                      