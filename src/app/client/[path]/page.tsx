"use client"
import ChooseTable from "@/components/ChooseTable"
import OrderList from "@/components/OrderList"
import QRCodeCoffee from "@/components/QRCodeCoffee"
import TodoList from "@/components/TodoList"
import { usePathname } from "next/navigation"

const ClientPage = () => {
    const pathname = usePathname()
    const pathCutString = pathname.split("/client").join('')

    switch (pathCutString) {
        case '/order-list':
            return <OrderList />
        case '/coffeeHouse-QR':
            return <QRCodeCoffee />
        case '/coffeeHouse-choose-table':
            return <ChooseTable />
        case '/todo-list':
            return <TodoList />
        default:
            return <div className='container'>404 not found</div>
    }
}

export default ClientPage