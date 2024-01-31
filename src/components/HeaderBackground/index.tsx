
const HeaderBackground = () => {
    return (
        <>
            <div
                className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
                style={{ backgroundImage: "url('/images/coffee_garden_house.jpg')", height: "100vh" }}>
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    <div className="flex h-full items-center justify-center">
                        <div className="text-white">
                            <h2 className="mb-4 text-4xl font-semibold"
                                style={{
                                    fontWeight: 600,
                                    fontFamily: "'Brush Script MT', cursive"
                                }}
                            >
                                Coffee house  Nguyen Ngoc Hai
                            </h2>
                            <h4 className="mb-6 text-xl font-semibold">Xin kính chào quý khách</h4>
                            <button
                                type="button"
                                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Order coffee
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderBackground