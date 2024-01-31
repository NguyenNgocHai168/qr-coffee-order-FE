import React from 'react';
import HeaderBackground from "../HeaderBackground";
import { Badge } from "antd";
import { CalendarOutlined } from '@ant-design/icons';
import Link from 'next/link';
import './header.scss';

const Header = () => {
    return (
        <>
            <div className="header-container fixed text-white z-10 right-0 p-6">
                <Link href="/order-list">
                    <Badge count={9} offset={[10, 10]}>
                        <CalendarOutlined className='text-4xl bg-amber-500' />
                    </Badge>
                </Link>
            </div>
            <HeaderBackground />
        </>
    )
}
export default Header;