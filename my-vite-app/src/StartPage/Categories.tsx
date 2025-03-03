import { useGetCategoriesQuery } from "../services/api";
import { RootState } from "../storage/store";
import LoadingBar from "./LoadingBar";
import { useState } from "react";
import { setActiveCategory } from "../storage/slices/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../storage/hooks";
import useWindowSize from "./useWindowSize";
import Modal from "./CategoryModal";

type CategoryProps = { id: number; name: string };

export default function Categoties() {
  const { isLoading } = useGetCategoriesQuery("");
  const { width } = useWindowSize();
  const dispatch = useAppDispatch();
  const isMobile = width < 768;

  const currentState = useAppSelector((state: RootState) => state.categories);
  const { activeId, entities } = currentState;
  const activeCategory = entities.find((category) => category.id === activeId);

  const Dropdown = () => {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => setOpen(!isOpen);

    const listItemClass =
      "flex text-[9px] my-2 h-full w-full items-center rounded-xl border-r-2 max-md:border border-gray-300 transition-all translate-x-3 duration-5000 ease-in-out";

    const Category = ({ id, name }: CategoryProps) => {
      const setCategory = () => {
        dispatch(setActiveCategory(id));
      };

      return (
        <li key={id} className={listItemClass}>
          <button
            className="rounded-xl text-blue-600 font-semibold h-5/6 w-full px-1 font-['Raleway'] transition-all hover:ring-2 hover:ring-blue-600/75 duration-300 ease-in-out"
            onClick={setCategory}
          >
            {name}
          </button>
        </li>
      );
    };

    const CategoriesList = () => (
      <div key="list" className="flex justify-start items-center text-center w-5/6 transition-all md:-translate-x-2 duration-300 ease-in-out max-md:flex-col max-md:w-1/4 max-md:z-10 max-md:bg-white">
        <ul className="flex border-y max-md:border-0 border-gray-300/50 items-center h-full max-md:flex-col max-md:z-10 max-md:justify-start">
          {entities.map((category) => (
            <Category id={category.id} name={category.name} />
          ))}
        </ul>
      </div>
    );

    return (
      <div className="flex w-full max-md:flex-col bg-white pb-2">
        <button
          className="w-1/6 max-md:p-1 border border-blue-600 rounded-xl text-[7px] text-blue-600 font-semibold font-['Raleway'] transition-all hover:ring-2 hover:ring-blue-600 duration-300 ease-in-out object-scale-down"
          onClick={handleOpen}
        >
          {activeCategory?.name || "Все"}
        </button>
        {isOpen && (isMobile ? <Modal isOpen setIsOpen={setOpen} categories={entities} />: <CategoriesList />)}
      </div>
    );
  };

  if (isLoading) return <LoadingBar />;

  return (
    <div className="w-full h-15 my-2 pb-2 px-3 bg-white">
      <div className="flex mb-2 w-1/2 justify-start items-center">
        <p className="font-['Raleway'] w-1/2 text-nowrap font-semibold font-stretch-ultra-condensed text-[10px] lg:text-sm">
          Категории товаров
        </p>
        <a
          href=""
          className="text-[9px] font-['Raleway'] text-blue-600 text-center w-1/6 ml-4 hover:underline"
        >
          Настройки
        </a>
      </div>
      <div className="flex h-10 w-full">
        <Dropdown />
      </div>
    </div>
  );
}
