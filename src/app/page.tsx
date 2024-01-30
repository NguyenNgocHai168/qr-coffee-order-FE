import MenuOrder from '@/components/MenuOrder';
import React from 'react';

export default function Home() {

  return (
    <>
      <div className="flex items-baseline my-4">
        <div className="h-4 flex-auto border-solid border-t-4 border-t-amber-400 border-b-8 border-b-amber-400"></div>
        <h2 className="mx-4 mb-0 text-center" style={{ fontSize: "revert", fontWeight: "600", fontFamily: "'Brush Script MT&quot', cursive" }}>
          Menu order
        </h2>
        <div className="h-4 flex-auto border-solid border-t-4 border-t-amber-400 border-b-8 border-b-amber-400"></div>
      </div>
      <MenuOrder />
    </>
  )
}
