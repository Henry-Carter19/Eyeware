import "../styles/ProductsPage.css";

import FilterMenu from "../components/product/filters/FilterMenu";
import ProductCarousel, {
  Product,
} from "../components/product/ProductCarousel/ProductCarousel";
import SelectionCard from "../components/product/SelectionCard/SelectionCard";

import productData from "../data/productsData.json";
// import productData from "../data/prodcutsDetailData.json";
import frameStyleData from "../data/frameStyle.json";
import frameColor from "../data/frameColor.json";
import priceRange from "../data/priceData.json";
import filtersData from "../data/filters.json";

import { mapToSelectionData } from "../utils/selectionMapper";
import { useProductFilters } from "../hooks/useProductFilters";
import { FiltersJson } from "../utils/productFilters";

type ProductWithFilters = Product & {
  gender?: string;
  shape?: string;
  color?: string;
  style?: string;
  priceRange?: string;
};

const typedFiltersData = filtersData as FiltersJson;

const ProductsPage = () => {
  const frameStyle = mapToSelectionData(frameStyleData);
  const frameColorMapped = mapToSelectionData(frameColor);
  const priceMapped = mapToSelectionData(priceRange);

// const typedProducts: ProductWithFilters[] = productData.productsDetail.map(
const typedProducts: ProductWithFilters[] = productData.products.map(
  (p: any) => ({
    ...p,
    layoutType: p.layoutType === "detail" ? "detail" : "grid",
  }),
  );
  
  const { selectedFilters, filteredProducts, toggleValue, resetFilters } =
    useProductFilters<ProductWithFilters>({
      products: typedProducts,
      filterDefinitions: typedFiltersData.filters,
    });

  return (
    <div className="products-page">
      <div className="left-section">
        <FilterMenu
          selectedFilters={selectedFilters}
          onToggleFilter={toggleValue}
          onReset={resetFilters}
        />
      </div>

      <div className="right-section">
        <ProductCarousel products={filteredProducts} />

        <SelectionCard data={frameStyle} />
        <ProductCarousel products={filteredProducts} />

        <SelectionCard data={frameColorMapped} />
        <ProductCarousel products={filteredProducts} />

        <SelectionCard data={priceMapped} />
        <ProductCarousel products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
