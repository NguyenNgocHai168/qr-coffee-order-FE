import { removeOrderCoffee } from "@/redux/features/coffeeOrder-slice"
import { AppDispatch, RootState } from "@/redux/features/store"
import { useDispatch, useSelector } from "react-redux"

const OrderList = () => {
    const orderCoffeeList = useSelector((state: RootState) => state.orderCoffeeReducer.list)
    const dispatch = useDispatch<AppDispatch>()

    const handleDeleteOrder = (id: number) => dispatch(removeOrderCoffee(id))

    return (
        <>
            <div className="max-w-2xl m-auto mt-6">
                <table className="w-full table-collapse">
                    <thead>
                        <tr>
                            <th
                                className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200"
                            >
                                Ảnh
                            </th>
                            <th
                                className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200"
                            >
                                Tên món
                            </th>
                            <th
                                className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200"
                            >
                                Giá bán
                            </th>
                            <th
                                className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200 text-center"
                            >
                                Hành động
                            </th>
                            <th
                                className="text-sm uppercase font-semibold text-grey-darker p-3 bg-gray-200"
                            ></th>
                        </tr>
                    </thead>
                    <tbody className="align-baseline">
                        {orderCoffeeList.map((orderCoffee: any) => (
                            <tr className="group cursor-pointer hover:bg-gray-100" key={orderCoffee.id}>
                                <td
                                    className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                                >
                                    <img style={{ height: "5vh", width: "25%" }} src={`/images/${orderCoffee.image}`} alt="Images Error" />
                                </td>
                                <td
                                    className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                                >
                                    {orderCoffee.title}
                                </td>
                                <td
                                    className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                                >
                                    {orderCoffee.price}
                                </td>
                                <td
                                    className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm group-hover:visible"
                                >
                                    <div 
                                        // className="invisible group-hover:visible"
                                    >
                                        <button className="no-underline text-blue">View</button>
                                        <span className="text-grey">|</span>
                                        <button className="no-underline text-blue">Edit</button>
                                        <span className="text-grey">|</span>
                                        <button onClick={() => handleDeleteOrder(orderCoffee.id)} className="no-underline text-blue">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Thanh Toán Tiền Mặt</button>
                <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">VNpay</button>
                <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">MoMo</button>
            </div>
        </>
    )
}

export default OrderList