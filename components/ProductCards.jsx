import { useState } from "react";

import { useRecoilValue } from "recoil";
import { bestProductsState, productsState } from "../atoms/productsState";
import CardsItem from "./CardsItem"
import Filter from "./Filter"

export default function ProductCards({divider, filter, isBest}) {
  const products = useRecoilValue(productsState);
  const bestProducts = useRecoilValue(bestProductsState);
  const [productFilter, setProductFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState("");

  const searchFilter = (item) => {
    if(searchTerm === "") {
      return item.name;
    }

    return item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
  }
  
  const filterFunc = (item) => {
    return productFilter ? item.country === productFilter : item;
  }

  return (
    <div className="relative py-16 w-full flex flex-col items-center">
      {
        divider && <div className="max-w-[240px] w-full h-[1px] bg-black absolute inset-y-0"/>
      }

      {
        filter && <Filter setProductFilter={setProductFilter} setSearchTerm={setSearchTerm}/>
      }
      
      <div 
        className="container max-w-[830px] flex flex-wrap justify-center items-center md:flex-col md:gap-7 gap-20 ">
        { 
          isBest ? (
            bestProducts.map(product => (
              <CardsItem 
                key={product.id}
                id={product.id}
                name={product.name}
                img={product.img}
                weight={product.weight}
                price={product.price}
              />
            ))
          ) : (
            products?.filter(filterFunc).filter(searchFilter).map(product => (
              <CardsItem 
                key={product.id}
                id={product.id}
                name={product.name}
                img={product.img}
                weight={product.weight}
                price={product.price}
              />
            ))
          )
          
        }
      </div>
    </div>
  )
}
