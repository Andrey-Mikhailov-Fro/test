import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import Categoties from "./Categories";
import Products from "./Products";

export default function StartPage() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh]">
      <div className="flex w-full h-9/10 justify-between object-fill">
        <div className="flex flex-col w-full">
          <Header />
          <Categoties />
          <div className="flex flex-1 h-1/2 box-border flex-wrap object-scale-down overflow-y-scroll overflow-x-clip p-3">
            <Products />
          </div>
        </div>
        <div className="block self-end w-full max-w-[180px] h-full border border-[#F0F4FB]">
          <Sidebar />
        </div>
      </div>
      <div className="flex w-full h-1/10 bg-gray-200">
        <p className="w-1/2 font-[Montressat] text-sm lg:text-lg font-semibold place-content-center pl-5">React</p>
      </div>
    </div>
  );
}
