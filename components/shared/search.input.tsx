"use client";

import { cn } from "@/lib/utils";
import { Api } from "@/services/api.client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import {  useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";
import Link from "next/link";

interface Props {
  className?: string
}

export const SearchInput = ({className}: Props) => {
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([])
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  // Хук из react-use, здесь она работает как useEffect
  // Мы получаем данные, когда searchQuery изменяется
  useDebounce(async () => {
    try {
      const response = await Api.products.search(searchQuery);
      setProducts(response);
    } catch (error) {
      console.log(error)
    }
  }, 250, [searchQuery]);

  // При клике на найденный товар мы должны скрыть выпадающий список и очистить
  const onClickItem = () => {
    setFocused(false);
    setProducts([]);
    setSearchQuery("")
  }

  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}
      <div ref={ref} className={cn("flex rounded-2xl flex-1 justify-between relative h-11 z-30", className)}>
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text" 
          placeholder="Поиск..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* Выпадающий список товаров при поиске */}
        {products.length > 0 && (
          <div 
            className={cn("absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12"
          )}>
            {products.map((product) => (
              <Link
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-200" 
                href={`/product/${product.id}`}
                onClick={onClickItem}
              >
                <img 
                  className="rounded-sm h-8 w-8"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}