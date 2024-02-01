"use client"
import ChooseTable from '@/components/ChooseTable'
import OrderList from '@/components/OrderList'
import QRCodeCoffee from '@/components/QRCodeCoffee'
import { usePathname } from 'next/navigation'

const OrderCoffeeRoutes = () => {
    const pathname = usePathname()

    switch (pathname) {
        case '/order-list':
            return <OrderList />
        case '/coffeeHouse-QR':
            return <QRCodeCoffee />
        case '/coffeeHouse-choose-table':
            return <ChooseTable />
        default:
            return <div className='container'>404 not found</div>
    }
}

export default OrderCoffeeRoutes