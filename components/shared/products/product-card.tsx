import Link from 'next/link';
import { Title } from '../title';
import { Button } from '../../ui/button';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  className
}: ProductCardProps) => {
  return (
    <div className={className}>
      <Link href="/">
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          maxime fugiat veritatis eaque ratione non maiores architecto ullam?
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} сом</b>
          </span>
          <Button className="text-base font-bold" variant="secondary">
            <Plus className="mr-1" size={20} />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  )
}
