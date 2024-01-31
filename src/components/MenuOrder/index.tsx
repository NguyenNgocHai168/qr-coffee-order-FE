"use client"
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';

const { Meta } = Card;

const MenuOrder = () => {
    return (
        <>
            <div className="container m-auto px-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
                <div className='w-auto'>
                    <Card
                        hoverable
                        cover={<img alt="example" src="/images/Freshly_Brewed.jpg" style={{ height: "31vh", width: "100vw" }} />}
                    >
                        <Meta title="Coffee sữa Đá" description={<span className='text-red-600'>25.000.000 VND</span>} />
                    </Card>
                </div>
                <div className='w-auto'>
                    <Card
                        hoverable
                        cover={<img alt="example" src="/images/High_Quality.jpg" style={{ height: "31vh", width: "100vw" }}/>}
                    >
                        <Meta title="Coffee sữa Đá" description={<span className='text-red-600'>25.000.000 VND</span>} />
                    </Card>
                </div>
                <div className='w-auto'>
                    <Card
                        hoverable
                        cover={<img alt="example" src="/images/Freshly_Brewed.jpg" style={{ height: "31vh", width: "100vw" }} />}
                    >
                        <Meta title="Coffee sữa Đá" description={<span className='text-red-600'>25.000.000 VND</span>} />
                    </Card>
                </div>
                <div className='w-auto'>
                    <Card
                        hoverable
                        cover={<img alt="example" src="/images/High_Quality.jpg" style={{ height: "31vh", width: "100vw" }}/>}
                    >
                        <Meta title="Coffee sữa Đá" description={<span className='text-red-600'>25.000.000 VND</span>} />
                    </Card>
                </div>
            </div>
            <div className='m-auto grid grid-cols-1 mt-6'>
                <Button type="primary" ghost>Submit Order</Button>
            </div>
        </>
    )
}

export default MenuOrder
