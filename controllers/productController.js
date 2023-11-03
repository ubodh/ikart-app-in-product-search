// ProductController.js
import ProductModel from "../models/ProductModel.js";

const productModel = new ProductModel();

export default class ProductController {
  index = (req, res) => {
    res.render("index", { products: productModel.getAllProducts() });
  };

  search = (req, res) => {
    const { name } = req.body;

    if (!name) {
      // If no keyword is provided, you can render an empty result or handle it as per your needs
      return res.render("searchProduct", { filteredProducts: [], keyword: "" });
    }

    const filteredProducts = productModel.searchResult(name);

    // Display search results and pass the keyword to the view
    res.render("searchProduct", { filteredProducts, keyword: name });
  };
}
