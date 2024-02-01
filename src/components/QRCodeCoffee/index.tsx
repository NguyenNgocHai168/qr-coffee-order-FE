import React from 'react'
import { Input, QRCode, Space } from 'antd'

const QRCodeCoffee = () => {
    const [text, setText] = React.useState('http://localhost:3000/coffeeHouse/choose-table/')

    return (
        <div className='text-center'>
            <Space direction="vertical" align="center">
                <QRCode value={text || '-'} />
                <h1>The Coffee House..!</h1>
            </Space>
        </div>
    )
}

export default QRCodeCoffee