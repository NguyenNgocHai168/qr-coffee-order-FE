"use client"
import { usePathname } from "next/navigation"
import Footer from "../Footer"
import Header from "../Header"
import LayoutAdmin from "../Admin/Layout"

const ContentPage = ({ children }: { children: any }) => {
    const pathname = usePathname()
    const checkPermission = pathname.includes('admin')

    if (checkPermission === true) {
        return (
            <LayoutAdmin>
                {children}
            </LayoutAdmin>
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

export default ContentPage