import { IDish } from "../interfaces/dish.interface";
import { imageBaseDishUrl } from "./util";
import { iconBaseUrl } from "./util";

const d1: IDish = {
  name: "Pad Ki Mao",
  descr:
    "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
  //@ts-ignore
  restaurant: "Tiger Lilly",
  price: 88,
  url: `${imageBaseDishUrl}/padKiMao.png`,
  tag: `spicy`,
};
const d2: IDish = {
  name: "Garbanzo Frito",
  descr:
    "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
  //@ts-ignore
  restaurant: "Kab Kem",
  price: 98,
  url: `${imageBaseDishUrl}/garbanzoFritto.png`,
};
const d3: IDish = {
  name: "Smoked Pizza",
  descr: 'Basil dough, cashew "butter", demi-glace, bison & radish',
  //@ts-ignore
  restaurant: "Popina",
  price: 65,
  url: `${imageBaseDishUrl}/smokedPizza.png`,
  tag: `vegan`,
};

export const dishes: IDish[] = [d1, d2, d3, d2];
