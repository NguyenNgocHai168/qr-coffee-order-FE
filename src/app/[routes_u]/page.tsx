"use client"
import OrderList from '@/components/OrderList'
import { usePathname } from 'next/navigation'

const OrderCoffeeRoutes = () => {
    const pathname = usePathname()

    switch (pathname) {
        case '/order-list':
            return <OrderList />
        default:
            return <div className='container'>404 not found</div>
    }
}

export default OrderCoffeeRoutes