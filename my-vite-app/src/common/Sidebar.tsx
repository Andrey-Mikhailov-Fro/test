export default function Sidebar() {
    return (
        <>
            <div className="flex w-11/12 h-fit rounded-lg md:rounded-xl border border-[#FF2D87] py-2 mt-3 ml-2 mr-3 md:mt-4 md:ml-3 md:mr-4">
                <div className="flex relative w-1/3">
                    <img alt="Shop Bags picture" src="/bags.svg" className="absolute size-[40px] place-self-center right-1 md:size-max md:right-2" />
                </div>
                <div className="flex flex-col w-full justify-center">
                    <p className="text-[#2967FF] font-[raleway] font-[600px] text-pretty text-start text-[8px] lg:text-[12px]">Получай товары</p>
                    <p className="text-[#2967FF] font-[raleway] font-[600px] text-start text-[8px] lg:text-[12px]">БЕСПЛАТНО!</p>
                    <button className="text-[6px] lg:text-[12px] bg-[#2967FF] font-[raleway] text-white rounded-2xl my-0.5 mr-5 py-0.5 md:py-1 max-sm:mr-2">Узнать подробнее</button>
                </div>
            </div>
        </>
    );
}