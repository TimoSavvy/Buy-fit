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
    name: "Wireless Headphones",
    price: 99.99,
    image:
      CoatBrown,
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      Miliback,
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image: Redback,
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image:
      Boot,
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image:
      Brownloafer,
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      Coat2,
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 79.99,
    image:
      Blackshoe,
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 89.99,
    image:
      Coatblack,
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
   {
    id: 9,
    name: "Webcam HD",
    price: 89.99,
    image:
      Ladydress,
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
   {
    id: 10,
    name: "Webcam HD",
    price: 89.99,
    image:
      Ladyred,
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
   {
    id: 11,
    name: "Webcam HD",
    price: 89.99,
    image:
      Reddress,
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
   {
    id: 12,
    name: "Webcam HD",
    price: 89.99,
    image:
      Shirt,
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
   {
    id: 13,
    name: "Webcam HD",
    price: 89.99,
    image:
      Shirtblue,
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
   
   {
    id: 14,
    name: "Webcam HD",
    price: 89.99,
    image:
      Sweat2,
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
   {
    id: 15,
    name: "Webcam HD",
    price: 89.99,
    image:
      Sweater,
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
   {
    id: 16,
    name: "Webcam HD",
    price: 89.99,
    image:
      Vansblue,
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
   {
    id: 17,
    name: "Webcam HD",
    price: 89.99,
    image:
      Vansnavy,
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
   {
    id: 18,
    name: "Webcam HD",
    price: 89.99,
    image:
      Wedgown,
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
  {
    id: 19,
    name: "Webcam HD",
    price: 89.99,
    image:
      Shirtpink,
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}