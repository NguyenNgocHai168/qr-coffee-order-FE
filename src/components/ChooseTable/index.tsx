import React from 'react';
import { Button, Radio } from 'antd';
import Link from 'next/link';

const ChooseTable = () => {
    return (
        <div className='text-center p-6 bg-orange-900'>
            <h2 className='mb-4'>Chọn bạn của bạn</h2>
            <Radio.Group name="radiogroup" defaultValue={1}>
                <Radio value={1}>Bàn Số 1</Radio>
                <Radio value={2}>Bàn Số 2</Radio>
                <Radio value={3}>Bàn Số 3</Radio>
                <Radio value={4}>Bàn Số 4</Radio>
            </Radio.Group>
            <div className='py-4'>
                <Link href="/">
                    <Button>Oke</Button>
                </Link>
            </div>
        </div>
    )
}

export default ChooseTable