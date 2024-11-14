"use client";

import { cn } from "@/lib/utils";
import { Title } from "../title";
import { ProductCard } from "./product-card";
import { useIntersection } from 'react-use';
import { useEffect, useRef } from "react";
import { useCategoryStore } from "@/store/category";

interface ProductListGroupProps {
  title: string;
  items: any[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

export const ProductListGroup = ({
  title, items, categoryId, listClassName, className
}: ProductListGroupProps) => {
  // Состояние категории из Зустанд
  const setActiveIdCategory = useCategoryStore((state) => state.setActiveId)
  // Хук который определяет какой div блок на странице становиться виден при скролле
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveIdCategory(categoryId);
    }
  }, [intersection?.isIntersecting]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title 
        text={title} 
        size="lg" 
        className="font-extrabold mb-5" 
      />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, index) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  )
}
