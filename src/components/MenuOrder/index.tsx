"use client"
import React, { useEffect, useState } from 'react';
import { Avatar, List, Checkbox, Button, message } from 'antd';
import type { CheckboxProps } from 'antd';

const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

import VirtualList from 'rc-virtual-list';

interface UserItem {
    email: string;
    gender: string;
    name: {
        first: string;
        last: string;
        title: string;
    };
    nat: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

const fakeDataUrl =
    'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;

const MenuOrder = () => {
    const [data, setData] = useState<UserItem[]>([]);

    const appendData = () => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((body) => {
                setData(data.concat(body.results));
                message.success(`${body.results.length} more items loaded!`);
            });
    };

    useEffect(() => {
        appendData();
    }, []);

    const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
            appendData();
        }
    };

    return (
        <>
            <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className='w-auto'>
                    <List>
                        <VirtualList
                            data={data}
                            height={ContainerHeight}
                            itemHeight={47}
                            itemKey="email"
                            onScroll={onScroll}
                        >
                            {(item: UserItem) => (
                                <List.Item key={item.email}>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.picture.large} />}
                                        title={<a href="https://ant.design">{item.name.last}</a>}
                                        description={item.email}
                                    />
                                    <div>
                                        <Checkbox onChange={onChange}>Checkbox</Checkbox>
                                    </div>
                                </List.Item>
                            )}
                        </VirtualList>
                    </List>
                </div>
                <div className='w-auto'>
                    <List>
                        <VirtualList
                            data={data}
                            height={ContainerHeight}
                            itemHeight={47}
                            itemKey="email"
                            onScroll={onScroll}
                        >
                            {(item: UserItem) => (
                                <List.Item key={item.email}>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.picture.large} />}
                                        title={<a href="https://ant.design">{item.name.last}</a>}
                                        description={item.email}
                                    />
                                    <div>
                                        <Checkbox onChange={onChange}>Checkbox</Checkbox>
                                    </div>
                                </List.Item>
                            )}
                        </VirtualList>
                    </List>
                </div>
            </div>
            <div className='m-auto grid grid-cols-1 mt-6'>
                <Button type="primary" ghost>Submit Order</Button>
            </div>
        </>
    )
}

export default MenuOrder






































// const MenuOrder = () => {
//     return (
//         <div className="container my-12 mx-auto px-4 md:px-12">
//             <div className="flex flex-wrap -mx-1 lg:-mx-4">
//                 <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
//                     <article className="overflow-hidden rounded-lg shadow-lg">
//                         <a href="#">
//                             <img alt="Placeholder" className="block h-auto w-full" src="/images/coffe_sua_da.jpg" />
//                         </a>
//                         <header className="flex items-center justify-between leading-tight p-2 md:p-4">
//                             <h1 className="text-lg">
//                                 <a className="no-underline hover:underline text-black" href="#">
//                                     Coffee sữa đá
//                                 </a>
//                             </h1>
//                             <p className="text-grey-darker text-sm">
//                                 26/01/2023
//                             </p>
//                         </header>
//                         <span className="text-sm p-2 md:p-4">Đạm đà béo - đậm đà thơm ngon - kính mời</span>
//                         <footer className="flex items-center justify-between leading-none p-2 md:p-4">
//                             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                                 Order Coffee
//                             </button>
//                         </footer>
//                     </article>
//                 </div>
//                 <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
//                     <article className="overflow-hidden rounded-lg shadow-lg">
//                         <a href="#">
//                             <img alt="Placeholder" className="block h-auto w-full" src="/images/coffe_sua_da.jpg" />
//                         </a>
//                         <header className="flex items-center justify-between leading-tight p-2 md:p-4">
//                             <h1 className="text-lg">
//                                 <a className="no-underline hover:underline text-black" href="#">
//                                     Coffee sữa đá
//                                 </a>

//                             </h1>
//                             <p className="text-grey-darker text-sm">
//                                 26/01/2023
//                             </p>
//                         </header>
//                         <span className="text-sm p-2 md:p-4">Đạm đà béo - đậm đà thơm ngon - kính mời</span>
//                         <footer className="flex items-center justify-between leading-none p-2 md:p-4">
//                             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                                 Order Coffee
//                             </button>
//                         </footer>
//                     </article>
//                 </div>
//                 <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
//                     <article className="overflow-hidden rounded-lg shadow-lg">
//                         <a href="#">
//                             <img alt="Placeholder" className="block h-auto w-full" src="/images/coffe_sua_da.jpg" />
//                         </a>
//                         <header className="flex items-center justify-between leading-tight p-2 md:p-4">
//                             <h1 className="text-lg">
//                                 <a className="no-underline hover:underline text-black" href="#">
//                                     Coffee sữa đá
//                                 </a>

//                             </h1>
//                             <p className="text-grey-darker text-sm">
//                                 26/01/2023
//                             </p>
//                         </header>
//                         <span className="text-sm p-2 md:p-4">Đạm đà béo - đậm đà thơm ngon - kính mời</span>
//                         <footer className="flex items-center justify-between leading-none p-2 md:p-4">
//                             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                                 Order Coffee
//                             </button>
//                         </footer>
//                     </article>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MenuOrder