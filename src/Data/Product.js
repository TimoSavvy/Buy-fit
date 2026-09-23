import  Redback from "./Redback.png"
import CoatBrown from "./CoatBrown.png"
import Miliback from "./Miliback.png"
import Boot from "./Boot.png"
import Blackshoe from "./Blackshoe.png"
import Brownloafer from "./Brownloafer.png"
import Coat2 from "./Coat2.png"
import Coatblack from "./Coatblack.png"
import Ladydress from "./Ladydress.png"
import Ladyred from "./Ladyred.png"
import Reddress from "./Reddress.png"
import Shirt from "./Shirt.png"
import Shirtblue from "./Shirtblue.png"
import Shirtpink from "./Shirtpink.png"
import Sweat2 from "./Sweat2.png"
import Sweater from "./Sweater.png"
import Vansblue from "./Vansblue.png"
import Vansnavy from "./Vansnavy.png"
import Wedgown from "./Wedgown.png"

const products = [
  {
    id: 1,
    name: "Black Men's Shirt",
    price: 12.99,
    image:
      Shirt,
    description:
      "Black Longsleeve shirt for men, 100% cotton, Sleek and Stylish design.",
    
  },
  
  {
    id: 2,
    name: "Red Velvet Gown ",
    price: 21.99,
    image:
      Reddress,
    description:
      "Red velvet Women Dress with Rich and smooth satin texture, Elegant and Comfy design.",
  },
  {
    id: 3,
    name: "Silver Silk Gown",
    price: 49.99,
    image:
      Wedgown,
    description:
      "Gorgeous Silver Silk Gown For Women, Elegant and Stylish design, Smooth Silk texture.",
  },
  {
    id: 4,
    name: "Grey Suit Shirt",
    price: 14.99,
    image:
      Shirtblue,
    description:
      "Stylish Grey Suit Shirt, Coporate Shirt for Working Men, Comfy and stylish design.",
  },
  {
    id: 5,
    name: "Stylish Black Gown",
    price: 29.99,
    image: Ladydress,
    description:
      "Stylish 2 colour women gown, bareback long dress with sleek design.",
  },
  {
    id: 6,
    name: "Winter Thick Coat",
    price: 24.99,
    image:
      Coat2,
    description:
      "Winter essential thick coat, Durable and comfy unisex design, inner Fur for more comfort in harsh weathers",
  },
  {
    id: 7,
    name: "Men's 2-Piece Coat",
    price: 19.99,
    image:
      CoatBrown,
    description:
      "2-piece man winter coat, Wool fabrics, polyester inner fabric. Color: Wood brown, Mangenta",
  },
  {
    id: 8,
    name: "Women's Black Coat",
    price: 19.99,
    image:
      Coatblack,
    description:
      "Winter essential thick coat, Durable and comfy unisex design, inner Fur for more comfort in harsh weathers",
  },
   {
    id: 9,
    name: "Red BackPack",
    price: 16.99,
    image:
      Redback,
    description:
      "Hot-Red school backpack for everyone, Durable and very comfy design, for outdoors and school needs.",
  },
  {
    id: 10,
    name: "Military Backpack",
    price: 28.99,
    image:
      Miliback,
    description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, delectus ut. Natus laborum consequatur magni?",
  },   
  {
    id: 11,
    name: "Deep Blue Sweater",
    price: 9.99,
    image:
      Sweat2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, delectus ut. Natus laborum consequatur magni?.",
  },
   {
    id: 12,
    name: "Snowflakes Cardigan",
    price: 13.99,
    image:
      Sweater,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, delectus ut.",
  },
  
   {
    id: 13,
    name: "Men's Black Loafer",
    price: 39.99,
    image:
      Blackshoe,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, delectus ut.",

  },
   {
    id: 14,
    name: "Safety Boots",
    price: 44.99,
    image:
      Boot,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, delectus ut.",
  },
   

   {
    id: 15,
    name: "Blue Evans Flattop",
    price: 23.99,
    image:
      Vansblue,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, delectus ut.",
  },
   {
    id: 16,
    name: "Deep Blue Evans",
    price: 23.99,
    image:
      Vansnavy,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, delectus ut.",
  },
  {
    id: 17,
    name: "Men's Brown Loafers",
    price: 44.99,
    image:
      Brownloafer,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, delectus ut.",
  },
  {
    id: 18,
    name: "Red & Black Gown",
    price: 39.99,
    image:
      Ladyred,
    description:
      "Red and Black gown for Women, Wool and Polyester fabric, Classy and elegant design .",
  },
   
  {
    id: 19,
    name: "Men Shirt",
    price: 16.99,
    image:
      Shirtpink,
    description:
      "Pink Men Longsleeve shirt, 100% cotton sleek and stylish design.",
  },
    {
    id: 20,
    name: "Red Velvet Gown ",
    price: 21.99,
    image:
      Reddress,
    description:
      "Red velvet Women Dress with Rich and smooth satin texture, Elegant and Comfy design.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}