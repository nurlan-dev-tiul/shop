"use client";

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface CategoriesProps {
  className?: string;
}

const cats = [
  {
    id: 1,
    name: "Велосипеды"
  },
  {
    id: 2,
    name: "Самокаты"
  },
  {
    id: 3,
    name: "Скейтборды"
  },
  {
    id: 4,
    name: "Теннис"
  },
  {
    id: 5,
    name: "Ролики"
  },
  {
    id: 6,
    name: "Туризм"
  },
  {
    id: 7,
    name: "Одежда"
  },
  {
    id: 8,
    name: "Рюкзаки"
  },
]

export const Categories = ({className}: CategoriesProps) => {
  const {activeId} = useCategoryStore((state) => state);
  console.log(activeId);
  
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-2 rounded-2xl', className)}>
      {
        cats.map(({name, id}, index) => (
          <a className={cn(
            'flex items-center font-bold rounded-2xl px-2',
            activeId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
            )}
            href={`/#${name}`}
            key={index}
          >
            <button>{name}</button>
          </a>
        ))
      }
    </div>
  )
}
