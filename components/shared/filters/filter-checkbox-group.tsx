"use client";

import { cn } from "@/lib/utils";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../../ui/input";
import { ChangeEvent, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Item = FilterChecboxProps;

interface FilterCheckboxGroupProps {
  className?: string;
  loading?: boolean;
  items: Item[]; // Весь список checkbox, при нажатии на показать все
  defaultItems: Item[]; // Список по умолчанию
  limit?: number; // Лимит списка
  searchInputPlaceholder?: string; // Поиск чекбоксов
  onClickChecbox?: (id: string) => void;
  defaultValue?: string[]; // Значение чекбокса
  title: string; // Заголовок
  selectedIds?: Set<string>;
  name: string;
}

export const FilterCheckboxGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  loading,
  onClickChecbox,
  defaultValue,
  selectedIds,
  name

}: FilterCheckboxGroupProps) => {
  const [showAllFilter, setShowAllFilter] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");

  // Скелетон 
  if(loading){
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        {...Array(limit).fill(0).map((_, index) => (
          <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
        ))}
      </div>
    )
  }

  // Рендерим либо полный список фильтров либо начальный
  // Также тут поиск по фильтру
  const filterList = showAllFilter 
  ? items.filter((item) => item.text.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase()))
  : defaultItems?.slice(0, limit);

  console.log(filterList);
  

  const onChangeSearchFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value)
  }

  return (
    <div className={cn("", className)}>
      <p className="font-bold mb-3">{title}</p>
      {showAllFilter && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchFilter}
            placeholder={searchInputPlaceholder} 
            className="bg-gray-50 border-none" 
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {filterList.map((item, index) => (
          <FilterCheckbox 
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selectedIds?.has(item.value)}
            onCheckedChange={() =>onClickChecbox?.(item.value)}
            name={name}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAllFilter ? "border-t border-t-neutral-100 mt-4" : ""}>
            <button className="text-primary mt-3" onClick={() => setShowAllFilter(!showAllFilter)}>
                {showAllFilter ? "Скрыть" : "+ Показать все"}
            </button>
        </div>
      )}
    </div>
  )
}
