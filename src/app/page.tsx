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

      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img alt="Placeholder" className="block h-auto w-full" src="/images/coffe_sua_da.jpg" />
              </a>
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Coffee sữa đá
                  </a>
                  
                </h1>
                <p className="text-grey-darker text-sm">
                  26/01/2023
                </p>
              </header>
              <span className="text-sm p-2 md:p-4">Đạm đà béo - đậm đà thơm ngon - kính mời</span>
              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Order Coffee
                </button>
              </footer>
            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img alt="Placeholder" className="block h-auto w-full" src="/images/coffe_sua_da.jpg" />
              </a>
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Coffee sữa đá
                  </a>
                  
                </h1>
                <p className="text-grey-darker text-sm">
                  26/01/2023
                </p>
              </header>
              <span className="text-sm p-2 md:p-4">Đạm đà béo - đậm đà thơm ngon - kính mời</span>
              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Order Coffee
                </button>
              </footer>
            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img alt="Placeholder" className="block h-auto w-full" src="/images/coffe_sua_da.jpg" />
              </a>
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Coffee sữa đá
                  </a>
                  
                </h1>
                <p className="text-grey-darker text-sm">
                  26/01/2023
                </p>
              </header>
              <span className="text-sm p-2 md:p-4">Đạm đà béo - đậm đà thơm ngon - kính mời</span>
              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Order Coffee
                </button>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
