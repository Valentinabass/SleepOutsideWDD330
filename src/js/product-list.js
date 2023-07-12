import productList from "./productList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");
console.log("category: ", category);
productList(".product-list", category);
