import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetailPage.css";

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
import { MessageCircle, Camera } from "lucide-react";
import { useWhatsApp } from "../utils/whatsapp";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const [productData, setProductData] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { sendMessage } = useWhatsApp();

  useEffect(() => {
    fetch("/data/prodcutsDetailData.json")
      .then((res) => res.json())
      .then((data) => setProductData(data))
      .catch((err) => console.error("Error loading product detail:", err));
  }, []);

  if (!productData) return null;

  const product = productData.productsDetail.find(
    (p: any) => String(p.id) === id
  );

  if (!product) return <div>Product Not Found</div>;

  const images = product.images;

  const handleBuyProduct = () => {
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

                <div className="zoom-container">
                  <img
                    src={images[currentIndex]}
                    alt={product.title}
                    className="main-image"
                  />
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

              {/* <div className="sticky-btn-container">
                <ButtonComponent
                  label="Buy on"
                  variant="whatsapp"
                  icon={<MessageCircle size={16} />}
                  onClick={handleBuyProduct}
                />

                <ButtonComponent label="Buy now" variant="buy" fullWidth />
              </div> */}
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

              {/* <SectionWrapper title="Offers & Coupons">
                <OfferSection offers={product.offers ?? []} />
              </SectionWrapper> */}

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