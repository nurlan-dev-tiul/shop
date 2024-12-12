import { hashSync } from "bcrypt";
import { prisma } from "./prisma.client";

// Данные компонентов
const components = [
  {
    name: 'Вело шлем',
    price: 2000,
    image:
      'https://sportexpert.kg/wp-content/uploads/2023/06/Cairn-%D0%B2%D0%B5%D0%BB%D0%BE%D1%88%D0%BB%D0%B5%D0%BC-Prism-XTR-II-forest-bright-red-58-61.jpg',
  },
  {
    name: 'Перчатки',
    price: 700,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4DeuuTOkij_y0fUvcmzzwHimsrjkjkvBRA&s',
  },
  {
    name: 'Очки',
    price: 500,
    image:
      'https://img.joomcdn.net/4498771a1dfddac37b4ea74c345ac891c5dcc092_original.jpeg',
  },
  {
    name: 'Мотошлем',
    price: 800,
    image:
      'https://motodom.ua/image/cache/catalog/Product_Pictures/Helmets/Icon/Airflite/Rubatone_Black_matt/icon_airflite_rubatone_helmet_black_750x750-500x500.jpg',
  },
  {
    name: 'Мотоэкиперовка',
    price: 500,
    image:
      'https://images.satu.kz/211384737_w640_h320_moto-ekipirovka-uchoose-cherepaha.jpg',
  },
  {
    name: 'Мотодержатель для телефона',
    price: 1500,
    image:
      'https://img.joomcdn.net/f2f5deb400ac5aa45f5695afe1a740a16822e804_original.jpeg',
  },
].map((obj, index) => ({id: index + 1, ...obj}));

// Функция для генерации данных на базу данных
async function up() {
  // Пользователи
  await prisma.user.createMany({ 
    data: [
      {
        fullName: "User",
        email: "user@test.ru",
        password: hashSync("1234567", 10),
        verified: new Date(),
        role: "USER"
      },
      {
        fullName: "Admin",
        email: "admin@test.ru",
        password: hashSync("1234567", 10),
        verified: new Date(),
        role: "ADMIN"
      }
    ]
  });

  // Категории
  await prisma.category.createMany({
    data: [
      {
        name: 'Велосипеды',
      },
      {
        name: 'Мотоциклы',
      },
      {
        name: 'Одежда',
      },
      {
        name: 'Запчасти',
      },
      {
        name: 'Аксессуары',
      },
    ]
  });

  // Компоненты аксессуары запчасти
  await prisma.components.createMany({
    data: components
  });

  // Продукция одежды, запчасти, аксессуары
  await prisma.product.createMany({
    data: [
      {
        name: 'Sram GX Eagle',
        imageUrl:
          'https://evobikes.co.za/wp-content/uploads/2020/05/gx_eagle_10_52_groupset.jpg',
        categoryId: 4,
      },
      {
        name: 'Обод ALEXRIMS DM18 27.5',
        imageUrl:
          'https://www.velodrive.ru/upload/iblock/ecb/dm18_900_1251665.jpg',
        categoryId: 4,
      },
      {
        name: 'FOX 40 FACTORY FLOAT',
        imageUrl:
          'https://trial-sport.ru/images/catalog/fk24021_40_factory_float_evol_e_tune_27_5_200mm_grip_2881417.jpg',
        categoryId: 4,
      },
      {
        name: 'Бутылка для воды 0.7',
        imageUrl:
          'https://images.prom.ua/2372464762_w600_h600_2372464762.jpg',
        categoryId: 5,
      },
      {
        name: 'Мото сумки',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqM78xaJF-tPNCWq1p9lfFAIS4BxesWkQqw&s',
        categoryId: 5,
      },
    ]
  });

  // Продукция для вело и мото
  const velo1 = await prisma.product.create({
    data: {
      name: "Merida Silex 600",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYfoUu-Hxoh8GGGhkE-gOWCA_Q3vaBvURBg&s",
      categoryId: 1,
      components: {
        connect: components.slice(0, 3)
      }
    }
  });
  const velo2 = await prisma.product.create({
    data: {
      name: "Cube Reaction Race",
      imageUrl: "https://www.stows.co.uk/images/113100_light_zoom.jpg?width=1998&height=1998&quality=85&mode=pad&format=webp&bgcolor=ffffff",
      categoryId: 1,
      components: {
        connect: components.slice(0, 3)
      }
    }
  });
  const velo3 = await prisma.product.create({
    data: {
      name: "Cannondale SuperSix EVO Carbon",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWwokGv6C2XcTcqXW5nCsYpPd6DMPq5Mqgg&s",
      categoryId: 1,
      components: {
        connect: components.slice(0, 3)
      }
    }
  });
  const velo4 = await prisma.product.create({
    data: {
      name: "Scott 29 Race",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQWaL0BWuQ3oOjAZBhKKaUoZlfT7Kji6FIQ&s",
      categoryId: 1,
      components: {
        connect: components.slice(0, 3)
      }
    }
  });
  const moto = await prisma.product.create({
    data: {
      name: "Kawasaki Versys 300",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmnLnzUpPLTHOvvGVzo1pp1pLBFftRJxIqg&s",
      categoryId: 2,
      components: {
        connect: components.slice(3, 6)
      }
    }
  });
  const moto2 = await prisma.product.create({
    data: {
      name: "BMW R1250 GS",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5554a8c0e4b0da925a222061/1646311760062-LAQFDBTN0S19QLEG79WA/kriega-r1250gs-te-4.jpg?format=1000w",
      categoryId: 2,
      components: {
        connect: components.slice(3, 6)
      }
    }
  });

  // Размеры вариации
  await prisma.productItem.createMany({
    data: [
      {
        productId: velo1.id,
        productType: 1,
        size: 17,
        price: 2000
      },
      {
        productId: velo2.id,
        productType: 2,
        size: 18,
        price: 1500
      },
      {
        productId: velo3.id,
        productType: 1,
        size: 19,
        price: 3000
      },
      {
        productId: velo4.id,
        productType: 2,
        size: 21,
        price: 3000
      },
      {
        productId: moto.id,
        productType: 1,
        size: 1250,
        price: 9000
      },
      {
        productId: moto2.id,
        productType: 1,
        size: 800,
        price: 5000
      },
      {
        productId: 1,
        price: 4000
      },
      {
        productId: 2,
        price: 5000
      },
      {
        productId: 3,
        price: 1000
      },
           {
        productId: 4,
        price: 800
      },
      {
        productId: 5,
        price: 900
      },
    ]
  });

  // Корзина
  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111"
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "22222"
      },
    ],
  });

  // Элемент в корзине
  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 1,
      components: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

// Функция для очистки данных из базы данных чтоб при генерации очищались предыдущие
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Components" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  }catch (e) {

  }
}

// Запуск функции main()
main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
  