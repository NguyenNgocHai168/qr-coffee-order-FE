"use client"
import CoffeeOrder from "@/components/Admin/CoffeeOrder";
import CoffeeStore from "@/components/Admin/CoffeeStore";
import CoffeeTable from "@/components/Admin/CoffeeTable";
import { usePathname } from "next/navigation";

const AdminPage = () => {
    const pathname = usePathname()
    const pathCutString = pathname.split("/admin").join('')
    
    switch (pathCutString) {
        case '/manage-coffee-store':
            return <CoffeeStore />
        case '/manage-coffee-table':
            return <CoffeeTable />
        case '/manage-coffee-order':
            return <CoffeeOrder />
        default:
            return <div className='container'>404 not found</div>
    }
}

export default AdminPage