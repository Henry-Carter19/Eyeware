import "../styles/ProductsPage.css";
import FilterMenu from "../components/product/filters/FilterMenu";
import ProductCarousel from "../components/product/ProductCard/ProductCarousel";
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

  return (
    <div className="products-page">
      {/* LEFT SIDEBAR */}
      <div className="left-section">
        <FilterMenu />
      </div>

      {/* RIGHT CONTENT */}
      <div className="right-section">
        {/* Product Grid */}
        <ProductCarousel products={productData.products} />

        {/* Selection Cards Below */}
        <SelectionCard data={frameStyle} />
        <ProductCarousel products={productData.products} />

        <SelectionCard data={frameColorMapped} />
        <ProductCarousel products={productData.products} />

        <SelectionCard data={priceMapped} />
        <ProductCarousel products={productData.products} />
      </div>
    </div>
  );
};

export default ProductsPage;
