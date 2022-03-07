import { IChef } from "../interfaces/chef.interface";
import { r4, r5, r6 } from "./restaurants";
import { imageBaseChefUrl } from "./util";

export const c1: IChef = {
  name: "Yossi Shitrit",
  descr:
    "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
  url: `${imageBaseChefUrl}/yossi.png`,
  restaurants: [r4, r5, r6],
};
