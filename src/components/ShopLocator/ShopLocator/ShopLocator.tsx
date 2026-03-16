import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import type { Marker as LeafletMarker } from "leaflet";
import styles from "./ShopLocator.module.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import { Shop } from "./types.shop";
import { getDirectionHref } from "./mapLinks";
import { useWhatsApp } from "../../../utils/whatsapp";

delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })
  ._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const storeIcon = new L.DivIcon({
  className: "",
  html: `
    <div class="store-pin">
      <div class="store-pin__dot"></div>
    </div>
  `,
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -24],
});

type FocusMapProps = {
  shop: Shop | null;
};

function FocusMap({ shop }: FocusMapProps) {
  const map = useMap();

  useEffect(() => {
    if (!shop) return;

    map.flyTo([shop.lat, shop.lng], 12, {
      duration: 1.1,
    });
  }, [shop, map]);

  return null;
}

function fitBoundsForAll(map: L.Map, items: Shop[]) {
  if (!items.length) return;

  const bounds = L.latLngBounds(
    items.map((x) => [x.lat, x.lng] as [number, number]),
  );

  map.fitBounds(bounds, { padding: [40, 40] });
}

function MapInit({ shops }: { shops: Shop[] }) {
  const map = useMap();

  useEffect(() => {
    if (shops.length) {
      fitBoundsForAll(map, shops);
    }
  }, [map, shops]);

  return null;
}

export default function ShopLocator() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [selectedShopId, setSelectedShopId] = useState<number>(0);
  const markerRefs = useRef<Record<number, LeafletMarker | null>>({});

  const { sendMessage } = useWhatsApp();

  // ...existing code...
  useEffect(() => {
    fetch("/data/shops.json")   // <- fix: match actual filename
      .then((res) => res.json())
      .then((data) => {
        setShops(data.shops);

        if (data.shops.length > 0) {
          setSelectedShopId(data.shops[0].id);
        }
      })
      .catch((err) => console.error("Failed to load shops:", err));
  }, []);
  // ...existing code...

  const selectedShop = useMemo(
    () => shops.find((x) => x.id === selectedShopId) ?? null,
    [selectedShopId, shops],
  );

  useEffect(() => {
    if (!selectedShopId) return;

    const timer = window.setTimeout(() => {
      Object.entries(markerRefs.current).forEach(([id, marker]) => {
        if (!marker) return;

        if (Number(id) === selectedShopId) {
          marker.openPopup();
        } else {
          marker.closePopup();
        }
      });
    }, 180);

    return () => window.clearTimeout(timer);
  }, [selectedShopId]);

  const handleAppointment = (shop: Shop) => {
    const phoneNumber = "917066602959";

    const message = `Hello Kubade OptiCare,

I would like to book an appointment.

Store: ${shop.name}
Address: ${shop.address}

Preferred Date:
Preferred Time:

Location:
${shop.directionUrl}

Please confirm availability.`;

    sendMessage(phoneNumber, message);
  };

  function getShopStatus(timing: string) {
    const now = new Date();

    const [start, end] = timing.split(" - ");

    const parseTime = (timeStr: string) => {
      const [time, modifier] = timeStr.split(" ");
      let [hours, minutes] = time.split(":").map(Number);

      if (modifier.toLowerCase() === "pm" && hours !== 12) hours += 12;
      if (modifier.toLowerCase() === "am" && hours === 12) hours = 0;

      const date = new Date();
      date.setHours(hours, minutes, 0, 0);
      return date;
    };

    const startTime = parseTime(start);
    const endTime = parseTime(end);

    return now >= startTime && now <= endTime ? "Open" : "Closed";
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <section className={styles.cardsPanel}>
          <div className={styles.cardsGrid}>
            {shops.map((shop) => {
              const isActive = shop.id === selectedShopId;
              const status = getShopStatus(shop.timing);
              return (
                <article
                  key={shop.id}
                  className={`${styles.card} ${isActive ? styles.cardActive : ""
                    }`}
                  onClick={() => setSelectedShopId(shop.id)}
                >
                  <div className={styles.imageWrap}>
                    <img
                      src={shop.imageUrl}
                      alt={shop.name}
                      className={styles.cardImage}
                    />

                    <div className={styles.statusBadge}>
                      <span
                        className={`${styles.statusDot} ${status === "Closed" ? styles.statusDotClosed : ""
                          }`} />
                      <span
                        className={`${styles.statusText} ${status === "Closed" ? styles.statusTextClosed : ""
                          }`}>
                        {status}
                      </span>
                      <span className={styles.statusTime}>{shop.timing}</span>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.topMetaRow}>
                      <div className={styles.servicePills}>
                        {shop.services.map((service) => (
                          <span key={service} className={styles.servicePill}>
                            {service}
                          </span>
                        ))}
                      </div>

                      <div className={styles.rating}>
                        <span className={styles.star}>★</span>
                        <span className={styles.ratingValue}>
                          {shop.rating}
                        </span>
                        <span className={styles.reviewCount}>
                          ({shop.reviews})
                        </span>
                      </div>
                    </div>

                    <h3 className={styles.cardTitle}>{shop.name}</h3>
                    <p className={styles.cardAddress}>{shop.address}</p>

                    <div className={styles.buttonRow}>
                      <a
                        href={getDirectionHref(
                          shop.directionUrl,
                          shop.lat,
                          shop.lng,
                          shop.name,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryButton}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className={styles.directionIcon} />
                        Get Direction
                      </a>

                      <button
                        type="button"
                        className={styles.primaryButton}
                        onClick={() => handleAppointment(shop)}
                      >
                        Book an Appointment
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <aside className={styles.mapPanel}>
          <div className={styles.mapCard}>
            <MapContainer
              center={[21.1458, 79.0882]}
              zoom={11}
              scrollWheelZoom
              zoomControl={false}
              className={styles.map}
            >
              <ZoomControl position="topright" />

              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <MapInit shops={shops} />
              <FocusMap shop={selectedShop} />

              {shops.map((shop) => {
                const status = getShopStatus(shop.timing);

                return (
                  <Marker
                    key={shop.id}
                    position={[shop.lat, shop.lng]}
                    icon={storeIcon}
                    ref={(ref) => {
                      markerRefs.current[shop.id] = ref;
                    }}
                    eventHandlers={{
                      click: () => setSelectedShopId(shop.id),
                    }}
                  >
                    <Popup closeButton>
                      <div className={styles.popupCard}>
                        <div className={styles.popupHeader}>
                          <img
                            src={shop.imageUrl}
                            alt={shop.name}
                            className={styles.popupThumb}
                          />

                          <div className={styles.popupHeaderInfo}>
                            <div className={styles.popupStatusLine}>
                              <span
                                className={`${styles.popupStatusDot} ${status === "Closed" ? styles.popupStatusDotClosed : ""
                                  }`}
                              />

                              <span
                                className={`${styles.popupStatusLabel} ${status === "Closed" ? styles.popupStatusClosed : ""
                                  }`}
                              >
                                {status}
                              </span>

                              <span className={styles.popupTiming}>
                                {shop.timing}
                              </span>
                            </div>

                            <h4 className={styles.popupTitle}>{shop.name}</h4>
                            <p className={styles.popupAddress}>{shop.address}</p>
                          </div>
                        </div>

                        <div className={styles.popupButtons}>
                          <a
                            href={getDirectionHref(
                              shop.directionUrl,
                              shop.lat,
                              shop.lng,
                              shop.name
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.popupSecondaryButton}
                          >
                            <span className={styles.directionIcon} />
                            <div style={{ textAlign: "center", paddingTop: "8px" }}>
                              Get Direction
                            </div>
                          </a>

                          <button
                            type="button"
                            className={styles.popupPrimaryButton}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAppointment(shop);
                            }}
                          >
                            Book an Appointment
                          </button>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </aside>
      </div>
    </div>
  );
}