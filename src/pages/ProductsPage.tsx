import "../styles/ProductsPage.css";
import FilterMenu from "../components/product/filters/FilterMenu";
import ProductCarousel from "../components/product/ProductCard/ProductCarousel";
import SelectionCard from "../components/product/SelectionCard/SelectionCard";

import frameStyleData from "../data/frameStyle.json";
import frameColor from "../data/frameColor.json";
import priceRange from "../data/priceData.json";

import { mapToSelectionData } from "../utils/selectionMapper";

const ProductsPage = () => {
  const frameStyle = mapToSelectionData(frameStyleData);
  const frameColorData = mapToSelectionData(frameColor);
  const priceData = mapToSelectionData(priceRange);

  return (
    <div className="products-page">
      {/* LEFT SIDEBAR */}
      <div className="left-section">
        <FilterMenu />
      </div>

      {/* RIGHT CONTENT */}
      <div className="right-section">
        <ProductCarousel />

        <SelectionCard data={frameStyle} />

        <SelectionCard data={frameColorData} />
        <SelectionCard data={priceData} />
      </div>
    </div>
  );
};

export default ProductsPage;
