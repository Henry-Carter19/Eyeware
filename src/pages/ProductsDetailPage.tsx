import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetailPage.css";
import DeliverySection from "../components/product/ProductDetails/DeliverySection/DeliverySection";
import FrameDimensions from "../components/product/ProductDetails/FrameDimensions/FrameDimensions";
import OfferSection from "../components/product/ProductDetails/OfferSection/OfferSection";
import ProductDescription from "../components/product/ProductDetails/ProductDescription/ProductDescription";
import ProductHeader from "../components/product/ProductDetails/ProductHeader/ProductHeader";
import ProductInformation from "../components/product/ProductDetails/ProductInformation/ProductInformation";
import RelatedLinks from "../components/product/ProductDetails/RelatedLinks/RelatedLinks";
import SectionWrapper from "../components/product/ProductDetails/SectionWrapper/SectionWrapper";
import TrustBadges from "../components/product/ProductDetails/TrustBadges/TrustBadges";
import { Container, Row, Col } from "react-bootstrap";
import ButtonComponent from "../components/ui/ButtonComponent/ButtonComponent";
import { MessageCircle, Heart, ArrowUpRight, Camera } from "lucide-react";

type Product = {
  id: number;
  brand: string;
  title: string;
  price: number;
  peopleBought: number;
  images: string[];
  offers: any[];
  frameDimensions: any;
  trustBadges: any[];
  description: { text: string };
  productInformation: any;
  relatedLinks: any[];
};

type ProductResponse = {
  productsDetail: Product[];
};

const ProductDetailPage = () => {
  const { id } = useParams();

  const [productData, setProductData] = useState<ProductResponse | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const imgRef = useRef<HTMLImageElement | null>(null);
  const [showZoom, setShowZoom] = useState<boolean>(false);
  const [zoomPos, setZoomPos] = useState<string>("50% 50%");

  useEffect(() => {
    const base = process.env.PUBLIC_URL || "";

    fetch(`${base}/data/productsDetailData.json`)
      .then((res) => res.json())
      .then((json: ProductResponse) => setProductData(json))
      .catch((err) =>
        console.error("Failed to load product detail data:", err)
      );
  }, []);

  if (!productData) return null;

  const product = productData.productsDetail.find(
    (p) => p.id === Number(id)
  );

  if (!product) return <div>Product Not Found</div>;

  const images: string[] = product.images ?? [];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imgRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();

    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;

    x = Math.max(0, Math.min(100, x));
    y = Math.max(0, Math.min(100, y));

    setZoomPos(`${x}% ${y}%`);
  };

  return (
    <div className="detail-page">
      <Container>
        <Row className="mb-4">
          <Col xs={12}>
            <div className="breadcrumb"></div>
          </Col>
        </Row>

        <Row className="gx-3">
          <Col lg={5} md={12}>
            <div className="detail-left">
              <div className="image-card">
                <button className="try-btn">
                  <Camera size={18} />
                  <span className="try-btn-text">TRY ON</span>
                </button>

                <div className="icon-group">
                  <span>
                    <Heart />
                  </span>
                  <span>
                    <ArrowUpRight />
                  </span>
                </div>

                <div
                  className="zoom-container"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setShowZoom(true)}
                  onMouseLeave={() => setShowZoom(false)}
                >
                  <img
                    ref={imgRef}
                    src={images[currentIndex]}
                    alt={product.title}
                    className="main-image"
                  />

                  {showZoom && (
                    <div
                      className="zoom-view"
                      style={{
                        backgroundImage: `url(${images[currentIndex]})`,
                        backgroundPosition: zoomPos,
                      }}
                    />
                  )}
                </div>

                <div className="thumb-wrapper">
                  <button
                    className="thumb-arrow"
                    onClick={() =>
                      setCurrentIndex(
                        currentIndex === 0
                          ? images.length - 1
                          : currentIndex - 1
                      )
                    }
                  >
                    ‹
                  </button>

                  <div className="thumbnail-row">
                    {images.map((img: string, index: number) => (
                      <div
                        key={index}
                        className={`thumb-box ${
                          index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => setCurrentIndex(index)}
                      >
                        <img src={img} alt="" />
                      </div>
                    ))}
                  </div>

                  <button
                    className="thumb-arrow"
                    onClick={() =>
                      setCurrentIndex(
                        currentIndex === images.length - 1
                          ? 0
                          : currentIndex + 1
                      )
                    }
                  >
                    ›
                  </button>
                </div>
              </div>

              <div className="sticky-btn-container">
                <ButtonComponent
                  label="Buy on"
                  variant="whatsapp"
                  icon={<MessageCircle size={16} />}
                />

                <ButtonComponent label="Buy now" variant="buy" fullWidth />
              </div>
            </div>
          </Col>

          <Col lg={7} md={12}>
            <div className="detail-right">
              <SectionWrapper>
                <ProductHeader
                  brand={product.brand}
                  title={product.title}
                  price={product.price}
                  peopleBought={product.peopleBought}
                />
              </SectionWrapper>

              <SectionWrapper title="Offers & Coupons">
                <OfferSection offers={product.offers} />
              </SectionWrapper>

              <SectionWrapper title="Check Delivery Date">
                <DeliverySection />
              </SectionWrapper>

              <SectionWrapper title="Frame Dimensions">
                <FrameDimensions dimensions={product.frameDimensions} />
              </SectionWrapper>

              <SectionWrapper>
                <TrustBadges badges={product.trustBadges} />
              </SectionWrapper>

              <SectionWrapper title="Description">
                <ProductDescription text={product.description.text} />
              </SectionWrapper>

              <SectionWrapper title="Product Information">
                <ProductInformation info={product.productInformation} />
              </SectionWrapper>

              <SectionWrapper>
                <RelatedLinks links={product.relatedLinks} />
              </SectionWrapper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetailPage;