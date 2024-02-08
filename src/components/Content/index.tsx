"use client"
import { usePathname } from "next/navigation"
import Footer from "../Footer"
import Header from "../Header"
import LayoutAdmin from "../Admin/Layout"

const Content = ({children} : {children: any}) => {
    const pathname = usePathname()
    const checkPermission = pathname.includes('Admin')

    if (checkPermission === true) {
        return (
            <div className="h-screen" style={{ marginBottom: "100vh" }}>
                <LayoutAdmin>
                    {children}
                </LayoutAdmin>
            </div>
        )
    } else {
        return (
            <div className="h-screen" style={{ marginBottom: "100vh" }}>
                <Header />
                    {children}
                <Footer />
            </div>
        )
    }
}

export default Content