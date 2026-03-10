import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import productData from "../data/prodcutsDetailData.json";
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
import { useWhatsApp } from "../utils/whatsapp";

const ProductDetailPage = () => {
  
  const { id } = useParams<{ id: string }>();

  const product = productData.productsDetail.find((p) => String(p.id) === id);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const imgRef = useRef<HTMLImageElement | null>(null);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState("50% 50%");
  const { sendMessage } = useWhatsApp();

  if (!product) return <div>Product Not Found</div>;

  /* support both single image & images array */
  const images = product.images;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imgRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();

    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;

    x = Math.max(0, Math.min(100, x));
    y = Math.max(0, Math.min(100, y));

    setZoomPos(`${x}% ${y}%`);
  };

  const handleByProduct = () => {
    const message = `Hello, I want to buy this product:

${product.title}
Price: ₹${product.price}

Product Link:
${window.location.href}`;

    sendMessage("918381001406", message);
  };

  return (
    <div className="detail-page">
      <Container>
        {/* BREADCRUMB */}
        <Row className="mb-4">
          <Col xs={12}>
            <div className="breadcrumb"></div>
          </Col>
        </Row>

        <Row className="gx-3">
          {/* LEFT SIDE */}
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
                          : currentIndex - 1,
                      )
                    }
                  >
                    ‹
                  </button>

                  <div className="thumbnail-row">
                    {images.map((img: string, index: number) => (
                      <div
                        key={index}
                        className={`thumb-box ${index === currentIndex ? "active" : ""}`}
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
                          : currentIndex + 1,
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
                  onClick={handleByProduct}
                />

                <ButtonComponent label="Buy now" variant="buy" fullWidth />
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={7} md={12}>
            <div className="detail-right">
              <SectionWrapper>
                <ProductHeader
                  brand={product.brand ?? ""}
                  title={product.title}
                  price={product.price}
                  peopleBought={product.peopleBought ?? 0}
                />
              </SectionWrapper>

              <SectionWrapper title="Offers & Coupons">
                <OfferSection offers={product.offers ?? []} />
              </SectionWrapper>

              <SectionWrapper title="Check Delivery Date">
                <DeliverySection />
              </SectionWrapper>

              <SectionWrapper title="Frame Dimensions">
                <FrameDimensions dimensions={product.frameDimensions ?? {}} />
              </SectionWrapper>

              <SectionWrapper>
                <TrustBadges badges={product.trustBadges ?? []} />
              </SectionWrapper>

              <SectionWrapper title="Description">
                <ProductDescription text={product.description?.text ?? ""} />
              </SectionWrapper>

              <SectionWrapper title="Product Information">
                <ProductInformation info={product.productInformation ?? []} />
              </SectionWrapper>

              <SectionWrapper>
                <RelatedLinks links={product.relatedLinks ?? []} />
              </SectionWrapper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetailPage;
