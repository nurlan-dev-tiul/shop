import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters/filters";
import { ProductCard } from "@/components/shared/products/product-card";
import { ProductListGroup } from "@/components/shared/products/product-list-group";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Container className="pb-14 mt-7">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductListGroup 
                title="Велоспорт"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    items: [{price: 550}],
                    name: "BMW R1200 rr", 
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeTMkXTSP_A5UQuuiGz5r4HFSOiAdo-_9Mw&s" 
                  },
                  {
                    id: 2,
                    items: [{price: 550}],
                    name: "BMW R1200 rr", 
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeTMkXTSP_A5UQuuiGz5r4HFSOiAdo-_9Mw&s" 
                  },
                  {
                    id: 3,
                    items: [{price: 550}],
                    name: "BMW R1200 rr", 
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeTMkXTSP_A5UQuuiGz5r4HFSOiAdo-_9Mw&s" 
                  },
                  {
                    id: 4,
                    items: [{price: 550}],
                    name: "BMW R1200 rr", 
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeTMkXTSP_A5UQuuiGz5r4HFSOiAdo-_9Mw&s" 
                  }
                ]}
              />
               <ProductListGroup 
                title="Самокаты"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    items: [{price: 550}],
                    name: "BMW R1200 rr", 
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeTMkXTSP_A5UQuuiGz5r4HFSOiAdo-_9Mw&s" 
                  },
                  {
                    id: 2,
                    items: [{price: 550}],
                    name: "BMW R1200 rr", 
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeTMkXTSP_A5UQuuiGz5r4HFSOiAdo-_9Mw&s" 
                  },
                  {
                    id: 3,
                    items: [{price: 550}],
                    name: "BMW R1200 rr", 
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeTMkXTSP_A5UQuuiGz5r4HFSOiAdo-_9Mw&s" 
                  },
                  {
                    id: 4,
                    items: [{price: 550}],
                    name: "BMW R1200 rr", 
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeTMkXTSP_A5UQuuiGz5r4HFSOiAdo-_9Mw&s" 
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
