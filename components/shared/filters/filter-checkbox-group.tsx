"use client";

import { cn } from "@/lib/utils";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../../ui/input";
import { ChangeEvent, useState } from "react";

type Item = FilterChecboxProps;

interface FilterCheckboxGroupProps {
  className?: string;
  items: Item[]; // Весь список checkbox, при нажатии на показать все
  defaultItems: Item[]; // Список по умолчанию
  limit?: number; // Лимит списка
  searchInputPlaceholder?: string; // Поиск чекбоксов
  onChange?: (value: string[]) => void;
  defaultValue?: string[]; // Значение чекбокса
  title: string; // Заголовок
}

export const FilterCheckboxGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  onChange,
  defaultValue,

}: FilterCheckboxGroupProps) => {
  const [showAllFilter, setShowAllFilter] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");

  // Рендерим либо полный список фильтров либо начальный
  // Также тут поиск по фильтру
  const filterList = showAllFilter 
  ? items.filter((item) => item.text.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase()))
  : defaultItems?.slice(0, limit);

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
            checked={false}
            onCheckedChange={(ids) => console.log(ids)
            }
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
