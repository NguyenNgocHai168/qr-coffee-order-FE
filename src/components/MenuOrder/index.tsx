"use client"
import React, { useState } from 'react';
import { Card } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

interface IMenuOrder {
    id: number,
    title: string,
    price: string,
    image: string,
    checkOrder: boolean
}

const MenuOrder = () => {
    const [selectedOrder, setSelectedOrder] = useState<boolean>(false)
    const [orderList, setOrderList] = useState<IMenuOrder[]>([])
    const [data, setData] = useState<IMenuOrder[]>([
        {
            id: 1,
            title: "Nước ép dâu tây 1",
            price: "35.000 VND",
            image: "Freshly_Brewed.jpg",
            checkOrder: false
        },
        {
            id: 2,
            title: "Nước ép dâu tây 2",
            price: "35.000 VND",
            image: "Freshly_Brewed.jpg",
            checkOrder: true
        },
        {
            id: 3,
            title: "Nước ép dâu tây 3",
            price: "35.000 VND",
            image: "Freshly_Brewed.jpg",
            checkOrder: false
        },
        {
            id: 4,
            title: "Nước ép dâu tây 4",
            price: "35.000 VND",
            image: "Freshly_Brewed.jpg",
            checkOrder: false
        },
        {
            id: 5,
            title: "Nước ép dâu tây 5",
            price: "35.000 VND",
            image: "Freshly_Brewed.jpg",
            checkOrder: false
        },
        {
            id: 6,
            title: "Nước ép dâu tây 6",
            price: "35.000 VND",
            image: "Freshly_Brewed.jpg",
            checkOrder: false
        },
        {
            id: 9,
            title: "Nước ép dâu tây 7",
            price: "35.000 VND",
            image: "Freshly_Brewed.jpg",
            checkOrder: false
        },
        {
            id: 8,
            title: "Nước ép dâu tây 8",
            price: "35.000 VND",
            image: "Freshly_Brewed.jpg",
            checkOrder: false
        },
    ])

    const handleAddOrder = (id: number) => {
        let checkSelectedOrder = data.map((item:IMenuOrder) => {
            if (item.id === id) {
                let replaceCheck = !(item.checkOrder)
                let newItem = {...item, checkOrder: replaceCheck}
                if (replaceCheck) {
                    setOrderList([...orderList, newItem])
                }
                return newItem
            }
            return item
        })        
        setData(checkSelectedOrder)
        setSelectedOrder(!selectedOrder)
    }    
    return (
        <>
            <div className="container m-auto px-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {data.map((item: any, index: number) => (
                    <div key={index} className='w-auto' onClick={() => handleAddOrder(item.id)}>
                        <Card
                            hoverable
                            cover={
                                <div className='relative'>
                                    <img alt="example" src={`/images/${item.image}`} style={{ height: "31vh", width: "100vw" }} />
                                    {item.checkOrder && <CheckCircleOutlined className='absolute text-green-600 text-8xl' style={{ right: "10%", bottom: "10%" }} />}
                                </div>
                            }
                        >
                            <Meta title={`${item.title}`} description={<span className='text-red-600'>{item.price}</span>} /> 
                        </Card>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MenuOrder
