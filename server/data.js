import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data = [
  {
    id: 1,
    name: "AMERICAN EAGLE OUTFITTERS",
    description: "Tartan Checks Spread Collar Chest Pocket Casual Shirt",
    cost: 1959,
    actualCost: 2799,
    image: fs.readFileSync(
      `${path.join(__dirname, "./assets/image1.jpg/")}`,
      "base64"
    ),
  },
  {
    id: 2,
    name: "ALCOTT",
    description: "Men Relaxed Fit Light Fade Stretchable Jeans",
    cost: 1399,
    actualCost: 2799,
    image: fs.readFileSync(
      `${path.join(__dirname, "./assets/image2.jpg/")}`,
      "base64"
    ),
  },
  {
    id: 3,
    name: "ALCOTT",
    description: "Cuban Collar Short Sleeves Casual Shirt",
    cost: 1294,
    actualCost: 3699,
    image: fs.readFileSync(
      `${path.join(__dirname, "./assets/image3.jpg/")}`,
      "base64"
    ),
  },
  {
    id: 4,
    name: "LC Waikiki",
    description: "Men Slim Fit Opaque Casual Shirt",
    cost: 1119,
    actualCost: 2799,
    image: fs.readFileSync(
      `${path.join(__dirname, "./assets/image4.jpg/")}`,
      "base64"
    ),
  },
  {
    id: 5,
    name: "AMERICAN EAGLE OUTFITTERS",
    description: "Men Relaxed Fit Clean Look Light Fade Stretchable Jeans",
    cost: 3219,
    actualCost: 4599,
    image: fs.readFileSync(
      `${path.join(__dirname, "./assets/image5.jpg/")}`,
      "base64"
    ),
  },
];

export default data;
