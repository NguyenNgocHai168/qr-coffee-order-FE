
const OrderList = () => {
    return (
        <>
            <div className="max-w-2xl m-auto mt-6">
                <table className="w-full table-collapse">
                    <thead>
                        <tr>
                            <th
                                className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200"
                            >
                                Name
                            </th>
                            <th
                                className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200"
                            >
                                Issues Date
                            </th>
                            <th
                                className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200"
                            >
                                Due Date
                            </th>
                            <th
                                className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200 text-center"
                            >
                                Amount Owing
                            </th>
                            <th
                                className="text-sm uppercase font-semibold text-grey-darker p-3 bg-gray-200"
                            ></th>
                        </tr>
                    </thead>
                    <tbody className="align-baseline">
                        <tr className="group cursor-pointer hover:bg-gray-100">
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                Dang Van Thanh
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                Sep, 11 2018
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                2 days ago
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap "
                            >
                                $100.00
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm group-hover:visible"
                            >
                                <div className="invisible group-hover:visible">
                                    <a href="#" className="no-underline text-blue">View</a>
                                    <span className="text-grey">|</span>
                                    <a href="#" className="no-underline text-blue">Edit</a>
                                    <span className="text-grey">|</span>
                                    <a href="#" className="no-underline text-blue">Delete</a>
                                </div>
                            </td>
                        </tr>
                        <tr className="group cursor-pointer hover:bg-gray-100">
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                Hanux Huynh
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                Sep, 15 2018
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                6 days ago
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap "
                            >
                                $450.00
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm"
                            >
                                <div className="invisible group-hover:visible">
                                    <a href="#" className="no-underline text-blue">View</a>
                                    <span className="text-grey">|</span>
                                    <a href="#" className="no-underline text-blue">Edit</a>
                                    <span className="text-grey">|</span>
                                    <a href="#" className="no-underline text-blue">Delete</a>
                                </div>
                            </td>
                        </tr>
                        <tr className="group cursor-pointer hover:bg-gray-200est">
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                Dinh Ngoc Thien Thao
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                Sep, 19 2018
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                10 days ago
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap "
                            >
                                $600.00
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm group-hover:visible"
                            >
                                <div className="invisible group-hover:visible">
                                    <a href="#" className="no-underline text-blue">View</a>
                                    <span className="text-grey">|</span>
                                    <a href="#" className="no-underline text-blue">Edit</a>
                                    <span className="text-grey">|</span>
                                    <a href="#" className="no-underline text-blue">Delete</a>
                                </div>
                            </td>
                        </tr>
                        <tr className="group cursor-pointer hover:bg-gray-200est">
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                Cao Thai Sang
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                Aug, 11 2018
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                1 month ago
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap "
                            >
                                $150.00
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm"
                            >
                                <div className="invisible group-hover:visible">
                                    <a href="#" className="no-underline text-blue">View</a>
                                    <span className="text-grey">|</span>
                                    <a href="#" className="no-underline text-blue">Edit</a>
                                    <span className="text-grey">|</span>
                                    <a href="#" className="no-underline text-blue">Delete</a>
                                </div>
                            </td>
                        </tr>
                        <tr className="group cursor-pointer hover:bg-gray-200est">
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                Xuan Hoi Nghi
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                Jul, 11 2018
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                2 months ago
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap "
                            >
                                $700.00
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm group-hover:visible"
                            >
                                <div className="invisible group-hover:visible">
                                    <a href="#" className="no-underline text-blue">View</a>
                                    <span className="text-grey">|</span>
                                    <a href="#" className="no-underline text-blue">Edit</a>
                                    <span className="text-grey">|</span>
                                    <a href="#" className="no-underline text-blue">Delete</a>
                                </div>
                            </td>
                        </tr>
                        <tr className="group cursor-pointer hover:bg-gray-200est">
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                Bao Thien Ha
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                Jul, 11 2018
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap"
                            >
                                2 months ago
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap "
                            >
                                $650.00
                            </td>
                            <td
                                className="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm"
                            >
                                <div className="invisible group-hover:visible">
                                    <a href="#" className="no-underline text-blue">View</a>
                                    <span className="text-grey">|</span>
                                    <a href="#" className="no-underline text-blue">Edit</a>
                                    <span className="text-grey">|</span>
                                    <a href="#" className="no-underline text-blue">Delete</a>
                                </div>
                            </td>
                        </tr>
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