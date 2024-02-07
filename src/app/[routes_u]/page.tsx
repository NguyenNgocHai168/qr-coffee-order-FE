"use client"
import ChooseTable from '@/components/ChooseTable'
import OrderList from '@/components/OrderList'
import QRCodeCoffee from '@/components/QRCodeCoffee'
import TodoList from '@/components/TodoList'
import { usePathname } from 'next/navigation'

const OrderCoffeeRoutes = () => {
    const pathname = usePathname()

    switch (pathname) {
        case '/Order-list':
            return <OrderList />
        case '/CoffeeHouse-QR':
            return <QRCodeCoffee />
        case '/CoffeeHouse-choose-table':
            return <ChooseTable />
        case '/Todo-list':
            return <TodoList />
        default:
            return <div className='container'>404 not found</div>
    }
}

export default OrderCoffeeRoutes