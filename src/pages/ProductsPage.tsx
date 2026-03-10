import "../styles/ProductsPage.css";
import React, { useEffect, useState } from "react";
import FilterMenu from "../components/product/filters/FilterMenu";
import ProductCarousel, {
  Product,
} from "../components/product/ProductCarousel/ProductCarousel";
import SelectionCard from "../components/product/SelectionCard/SelectionCard";

import { mapToSelectionData } from "../utils/selectionMapper";

const ProductsPage = () => {
  const [productsData, setProductsData] = useState<any | null>(null);
  const [frameStyleData, setFrameStyleData] = useState<any | null>(null);
  const [frameColorData, setFrameColorData] = useState<any | null>(null);
  const [priceRangeData, setPriceRangeData] = useState<any | null>(null);

  useEffect(() => {
    const base = process.env.PUBLIC_URL || "";

    Promise.all([
      fetch(`${base}/data/productsData.json`).then((res) => res.json()),
      fetch(`${base}/data/frameStyle.json`).then((res) => res.json()),
      fetch(`${base}/data/frameColor.json`).then((res) => res.json()),
      fetch(`${base}/data/priceData.json`).then((res) => res.json()),
    ])
      .then(([products, frameStyle, frameColor, priceRange]) => {
        setProductsData(products);
        setFrameStyleData(frameStyle);
        setFrameColorData(frameColor);
        setPriceRangeData(priceRange);
      })
      .catch((err) => console.error("Failed to load product data:", err));
  }, []);

  if (!productsData || !frameStyleData || !frameColorData || !priceRangeData)
    return null;

  const frameStyle = mapToSelectionData(frameStyleData);
  const frameColorMapped = mapToSelectionData(frameColorData);
  const priceMapped = mapToSelectionData(priceRangeData);

  // 🔥 CAST JSON PRODUCTS TO Product[]
  const typedProducts: Product[] = productsData.products.map((p: any) => ({
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
