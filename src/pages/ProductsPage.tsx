import { useEffect, useState } from "react";
import "../styles/ProductsPage.css";

import FilterMenu from "../components/product/filters/FilterMenu";
import ProductCarousel, {
  Product,
} from "../components/product/ProductCarousel/ProductCarousel";
import SelectionCard from "../components/product/SelectionCard/SelectionCard";

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

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductWithFilters[]>([]);
  const [filtersData, setFiltersData] = useState<FiltersJson | null>(null);

  const [frameStyleData, setFrameStyleData] = useState<any[]>([]);
  const [frameColorData, setFrameColorData] = useState<any[]>([]);
  const [priceRangeData, setPriceRangeData] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const [
        productsRes,
        filtersRes,
        frameStyleRes,
        frameColorRes,
        priceRangeRes,
      ] = await Promise.all([
        fetch("/data/productsData.json"),
        fetch("/data/filters.json"),
        fetch("/data/frameStyle.json"),
        fetch("/data/frameColor.json"),
        fetch("/data/priceData.json"),
      ]);

      const productsJson = await productsRes.json();
      const filtersJson = await filtersRes.json();
      const frameStyleJson = await frameStyleRes.json();
      const frameColorJson = await frameColorRes.json();
      const priceRangeJson = await priceRangeRes.json();

      const typedProducts: ProductWithFilters[] = productsJson.products.map(
        (p: any) => ({
          ...p,
          layoutType: p.layoutType === "detail" ? "detail" : "grid",
        }),
      );

      setProducts(typedProducts);
      setFiltersData(filtersJson);
      setFrameStyleData(frameStyleJson);
      setFrameColorData(frameColorJson);
      setPriceRangeData(priceRangeJson);
    };

    loadData();
  }, []);

  const frameStyle = mapToSelectionData(frameStyleData);
  const frameColorMapped = mapToSelectionData(frameColorData);
  const priceMapped = mapToSelectionData(priceRangeData);

  const { selectedFilters, filteredProducts, toggleValue, resetFilters } =
    useProductFilters<ProductWithFilters>({
      products: products,
      filterDefinitions: filtersData?.filters || [],
    });

  if (!filtersData) return null;

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