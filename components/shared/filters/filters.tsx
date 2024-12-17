"use client";

import { cn } from '@/lib/utils';
import { Title } from '../title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../../ui/input';
import { RangeSlider } from './range-slider';
import { FilterCheckboxGroup } from './filter-checkbox-group';
import { useFilterParts } from '@/hooks/useFilterParts';

interface FiltersProps {
  className?: string;
}

export const Filters = ({className}: FiltersProps) => {

  const { partsComponents, loading, onAddChecboxId, selectedIds } = useFilterParts();
  const items = partsComponents.map(item => ({text: item.name, value: String(item.id)}))

  return (
    <div className={cn("", className)}>
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* Цены */}
      <div className="mt-5 border-y border-y-neutral-200 py-5 pb-5">
        <p className="font-bold mb-3">Цена от и до</p>
        <div className="flex gap-3 mb-5 items-center">
          <Input type="number" placeholder="0" min={0} max={30000} defaultValue={0} />
          <Input type="number" placeholder="30000" min={0} max={30000} />
        </div>
        <RangeSlider min={0} max={30000} step={10} value={[0, 15000]} />
      </div>
      <FilterCheckboxGroup 
        title="Бренды"
        name="brands"
        className="mt-5"
        limit={3}
        loading={loading}
        defaultItems={items.slice(0, 3)} // До 6 элементов
        items={items} // При нажатии на кнопку показать - все элементы
        onClickChecbox={onAddChecboxId} // Добавляем id в Set из кликнутого чекбокса    
        selectedIds={selectedIds}
      />
    </div>
  )
}
