import { useGetProductImagesQuery, useGetProductsQuery } from "../services/api";
import { useAppSelector } from "../storage/hooks";
import LoadingBar from "./LoadingBar";

type ProductProps = {
  id: number;
  productName: string;
  imgSrc?: string;
};

type ProductApi = {
  id: number;
  category_id: number;
  name: string;
  description: string;
};

type ImgApi = {
  image_name: string;
  image_url: string;
  id: number;
};

export default function Products() {
  const products = useGetProductsQuery("");
  const productsImgs = useGetProductImagesQuery("");
  const activeCategory = useAppSelector((state) => state.categories.activeId);

  const actualProducts: ProductApi[] = activeCategory
    ? products.data.filter(
        (product: ProductApi) => product.category_id === activeCategory
      )
    : products.data;

  const ProductIcon = ({ id, productName, imgSrc }: ProductProps) => {
    return (
      <div
        key={id}
        className="w-1/3 h-1/3 border border-gray-300 place-items-center"
      >
        <img
          alt="Prod"
          src={imgSrc}
          className="h-2/3 aspect-square object-fill"
        />
        <p className="text-[7px] my-1 mx-0.5 text-wrap truncate">{productName}</p>
      </div>
    );
  };

  if (products.isLoading && productsImgs.isLoading) return <LoadingBar />;
  if (actualProducts.length === 0) return (<div className="w-full text-center font-['Raleway'] font-semibold text-gray-500/90">Нет товаров в данной категории</div>);

  return (
    <>
      {actualProducts.map((product: ProductApi) => {
        const imgSrc: ImgApi = productsImgs.data.find(
          (img: ImgApi) => img.id === product.id
        );

        return (
          <ProductIcon
            id={product.id}
            productName={product.name}
            imgSrc={imgSrc?.image_url}
          />
        );
      })}
    </>
  );
}
