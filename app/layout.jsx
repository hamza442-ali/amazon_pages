
import "@styles/globals.css";
import { Nav } from "@components/Nav";

export const metadata = {
    title: "Amaz0n",
    description: "Descover and Share new products"
}

const RootLayout = ({children}) => {
  return (
    <html lang="eng">
        <body>
            <Nav/>
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className="app">
                {children}
            </main>
        </body>

    </html>
  )
}

export default RootLayout; 