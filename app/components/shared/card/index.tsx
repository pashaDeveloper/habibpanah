import React from "react";
import Link from "next/link";
import CardActions from "./CardActions";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  discount?: number;
  image: string;
  category: string[];
  starRating: number;
}

interface ProductPriceProps {
  price: number;
  discount?: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price, discount }) => {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;
  
  return (
    <div className="flex flex-col items-center">
      {discount ? (
        <>
          <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1"></div>
          <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </>
      ) : (
        <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      )}
    </div>
  );
};

interface Props {
  product: Product;
}

const Card: React.FC<Props> = ({ product }) => {
  return (
    <div className="shadow-xl my-1 md:my-4 ltr:mr-2 rtl:ml-1 md:mx-6 bg-palette-card rounded-xl flex relative min-h-[180px] md:min-h-0">
      <Link
        href={`/${product.category[0]}/${product.category[1]}/${product.category[2]}/${product.slug}`}
        className="flex md:items-center md:flex-col relative w-full"
      >
        {/* Mobile layout - horizontal with square skeleton on left and content on right */}
        <div className="md:hidden w-2/5 relative bg-slate-400/30 p-1 rounded-bl-xl rounded-tl-xl flex items-center justify-center" style={{ aspectRatio: '1/1' }}>
        
          {product?.discount ? (
            <span className="w-5 h-5 block absolute -top-1 -left-1">
              <img 
                src="/images/discount-icon/discount.webp" 
                alt="Discount" 
                className="w-5 h-5"
              />
            </span>
          ) : null}
        </div>
        
        {/* Desktop layout - vertical with square skeleton on top and content below */}
        <div className="hidden md:block w-full relative bg-slate-400/30 p-2 rounded-tr-xl rounded-tl-xl  flex-col justify-between items-center" style={{ aspectRatio: '1/1' }}>
         
          {product?.discount ? (
            <span className="w-8 sm:w-auto block absolute -top-2 -left-2">
              <img 
                src="/images/discount-icon/discount.webp" 
                alt="Discount" 
                className="w-8 h-8"
              />
            </span>
          ) : null}
        </div>
        
        {/* Content area with skeleton text */}
        <div className="flex flex-col justify-between flex-grow w-3/5 md:w-full px-2 md:px-3 py-2 md:py-4">
          <div className="flex justify-center md:justify-start flex-col flex-grow overflow-hidden">
            <div className="self-center md:self-start">
              {/* Skeleton star rating */}
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mr-1"></div>
                ))}
              </div>
            </div>
            {/* Skeleton product name */}
            <div className="mb-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mt-2 w-3/4"></div>
            </div>
          </div>
          {/* Skeleton price */}
          <ProductPrice price={product.price} discount={product.discount} />
        </div>
      </Link>
      <CardActions product={product} />
    </div>
  );
};

export default Card;