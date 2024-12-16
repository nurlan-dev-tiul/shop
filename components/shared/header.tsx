import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search.input";

interface HeaderProps {
  className?: string;
}

export const Header = ({className}: HeaderProps) => {
  return (
    <header className={cn('border', className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={42} height={42} />
            <div>
              <h1 className="text-2xl uppercase font-black">Куплю Продам</h1>
              <p className="text-sm text-gray-400 leading-3">Найди что искал</p>
            </div>
          </div>
        </Link>
        <div className="mx-10 flex-1">
            <SearchInput />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex gap-1">
            <User size={16} />
            Войти
          </Button>
          <div>
            <Button className="group relative">
              <b>520 P</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>3</b>
              </div> 
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
