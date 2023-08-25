import './globals.css'
import Link from "next/link"
import NavBar from "./components/NavBar"

export default function RootLayout({children} : {children : React.ReactNode}) {
  return (
    <html>
      <head>
        <title>StartApp</title>
      </head>
      <body className='flex bg-gray-800 text-white flex-col font-nunito'>
        <header>
          <NavBar/>
        </header>
        {children}
      </body>
    </html>
  )
}