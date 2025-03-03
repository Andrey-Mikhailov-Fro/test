export default function Header() {
  return (
    <div className="flex min-h-10 h-1/12 w-max [@media(min-width:582px)]:w-full border-b border-[#F0F4FB] p-0 items-center">
      <div className="flex h-full w-full justify-between items-center">
        <p className="w-1/5 font-['Raleway'] font-bold text-[#2D2D2F] text-sm lg:text-lg ml-[2vw] mr-[1vw]">
          React
        </p>
        <a
          href=""
          className="w-1/5 font-['Raleway'] text-[#727280] text-[7px] md:text-[9px] lg:text-[10px] mr-1 hover:underline"
        >
          История заказов
        </a>
        <div className="flex relative grow content-center">
          <input
            id="search"
            type="text"
            className="w-full appearance-none pl-3 py-1 pr-15 md:pr-30 border border-[#F0F4FB] rounded-xl peer transition-all hover:ring-2 hover:ring-[#F0F4FB] focus:outline-none focus:border-gray-300 focus:border-double duration-300 ease-in-out"
          />
          <label
            htmlFor="search"
            className="absolute top-2 left-2 font-['Raleway'] text-[6px] md:text-[9px] text-[#727280] peer-focus:hidden"
          >
            Поиск бренда, товара, категории...
          </label>
          <button className="absolute flex top-0.75 right-0.5 h-10/12 w-1/5 max-w-[100px] bg-[#F0F4FB] hover:bg-gray-300 rounded-xl justify-center items-center">
            <img src="/search.svg" className="size-2" />
          </button>
        </div>
        <button className="flex border border-[#727280] rounded-full size-6 aspect-square mx-1 justify-center items-center">
          <img src="/cart.svg" className="size-3" />
        </button>
        <button className="flex rounded-full size-6 aspect-square mx-1 justify-center items-center">
          <img src="/profilePic.svg" className="size-6" />
        </button>
      </div>
    </div>
  );
}
