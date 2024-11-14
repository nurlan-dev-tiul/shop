import { cn } from '@/lib/utils';
import { Title } from '../title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../../ui/input';
import { RangeSlider } from './range-slider';
import { FilterCheckboxGroup } from './filter-checkbox-group';

interface FiltersProps {
  className?: string;
}

export const Filters = ({className}: FiltersProps) => {
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
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: "Молоко",
            value: "1"
          },
          {
            text: "Молоко",
            value: "2"
          },
          {
            text: "Молоко",
            value: "3"
          },
          {
            text: "Молоко",
            value: "4"
          },
          {
            text: "Молоко",
            value: "5"
          },
        ]}
        items={[
          {
            text: "Сырный соус",
            value: "1"
          },
          {
            text: "Голова Жука",
            value: "2"
          },
          {
            text: "Пыльное мясо",
            value: "3"
          },
          {
            text: "Сервый червь",
            value: "4"
          },
          {
            text: "Сервый червь",
            value: "4"
          },
          {
            text: "Сервый червь",
            value: "4"
          },
          {
            text: "Сервый червь",
            value: "4"
          }
        ]}
      />
    </div>
  )
}
