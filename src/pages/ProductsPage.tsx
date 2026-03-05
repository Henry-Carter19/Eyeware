import "../styles/ProductsPage.css";
import FilterMenu from "../components/product/filters/FilterMenu";
import ProductCarousel, {
  Product,
} from "../components/product/ProductCarousel/ProductCarousel";
import SelectionCard from "../components/product/SelectionCard/SelectionCard";

import productData from "../data/productsData.json";
import frameStyleData from "../data/frameStyle.json";
import frameColor from "../data/frameColor.json";
import priceRange from "../data/priceData.json";

import { mapToSelectionData } from "../utils/selectionMapper";

const ProductsPage = () => {
  const frameStyle = mapToSelectionData(frameStyleData);
  const frameColorMapped = mapToSelectionData(frameColor);
  const priceMapped = mapToSelectionData(priceRange);

  // 🔥 CAST JSON PRODUCTS TO Product[]
  const typedProducts: Product[] = productData.products.map((p) => ({
    ...p,
    layoutType: p.layoutType === "detail" ? "detail" : "grid",
  }));

  return (
    <div className="products-page">
      <div className="left-section">
        <FilterMenu />
      </div>

      <div className="right-section">
        <ProductCarousel products={typedProducts} />

        <SelectionCard data={frameStyle} />
        <ProductCarousel products={typedProducts} />

        <SelectionCard data={frameColorMapped} />
        <ProductCarousel products={typedProducts} />

        <SelectionCard data={priceMapped} />
        <ProductCarousel products={typedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
