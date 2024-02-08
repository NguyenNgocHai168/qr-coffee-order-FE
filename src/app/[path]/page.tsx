"use client"
import CoffeeOrder from '@/components/Admin/CoffeeOrder'
import CoffeeStore from '@/components/Admin/CoffeeStore'
import CoffeeTable from '@/components/Admin/CoffeeTable'
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
        case '/Admin-manage-coffee-store':
            return <CoffeeStore />
        case '/Admin-manage-coffee-table':
            return <CoffeeTable />
        case '/Admin-manage-coffee-order':
            return <CoffeeOrder />
        default:
            return <div className='container'>404 not found</div>
    }
}

export default OrderCoffeeRoutes