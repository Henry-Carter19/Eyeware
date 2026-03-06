import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./FeautredCollection.css";
import { CardLayout, cards, layouts } from "./FeaturedCollections.data";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CssVars = React.CSSProperties & {
  ["--tx"]?: string;
  ["--ty"]?: string;
};

export default function FeaturedCollectionsOnlyFocus() {
  const animRef = useRef<number | null>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const isDownRef = useRef(false);
  const isDraggingRef = useRef(false);

  const startRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  const setStage = (tx: number, ty: number) => {
    posRef.current.x = tx;
    posRef.current.y = ty;

    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty("--tx", `${tx}px`);
    stage.style.setProperty("--ty", `${ty}px`);
  };

  const [activeIndex, setActiveIndex] = useState<number>(3);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const layout: CardLayout[] = useMemo(
    () => (isMobile ? layouts.mobile : layouts.desktop),
    [isMobile],
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const clampIndex = (i: number) => {
    const n = cards.length;
    return ((i % n) + n) % n;
  };

  const goPrev = () => setActiveIndex((i) => clampIndex(i - 1));
  const goNext = () => setActiveIndex((i) => clampIndex(i + 1));

  const startSpringToTarget = () => {
    // if (animRef.current != null) return;
    if (animRef.current != null) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
    const stiffness = 0.02; // try 0.10 - 0.16
    const damping = 0.65; // try 0.72 - 0.85
    const epsilon = 0.15;

    const tick = () => {
      const p = posRef.current;
      const v = velRef.current;
      const t = targetRef.current;

      const dx = t.x - p.x;
      const dy = t.y - p.y;

      v.x = (v.x + dx * stiffness) * damping;
      v.y = (v.y + dy * stiffness) * damping;

      const maxV = 34; // px per frame cap (tune 20–60)
      v.x = Math.max(-maxV, Math.min(maxV, v.x));
      v.y = Math.max(-maxV, Math.min(maxV, v.y));

      p.x += v.x;
      p.y += v.y;

      setStage(p.x, p.y);

      const done =
        Math.abs(dx) < epsilon &&
        Math.abs(dy) < epsilon &&
        Math.abs(v.x) < epsilon &&
        Math.abs(v.y) < epsilon;

      if (done) {
        setStage(t.x, t.y);
        v.x = 0;
        v.y = 0;
        animRef.current = null;
        return;
      }

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
  };

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    const item = itemRefs.current[activeIndex];

    if (!wrap || !stage || !item) return;

    const raf = window.requestAnimationFrame(() => {
      const wrapRect = wrap.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      // Focus point: slightly above center
      // const focusX = wrapRect.left + wrapRect.width * 0.55;
      // const focusY = wrapRect.top + wrapRect.height * 0.46;

      // const focusX = wrapRect.left + wrapRect.width / 2;
      // const focusY = wrapRect.top + wrapRect.height / 2;

      const focusX = wrapRect.left + wrapRect.width / 2;
      const focusY = wrapRect.top + wrapRect.height * 0.45;

      const itemCenterX = itemRect.left + itemRect.width / 2;
      const itemCenterY = itemRect.top + itemRect.height / 2;

      const dx = focusX - itemCenterX;
      const dy = focusY - itemCenterY;

      const curX = parseFloat(stage.style.getPropertyValue("--tx") || "0");
      const curY = parseFloat(stage.style.getPropertyValue("--ty") || "0");

      // stage.style.setProperty("--tx", String(curX + dx));
      // stage.style.setProperty("--ty", String(curY + dy));

      // stage.style.setProperty("--tx", `${curX + dx}px`);
      // stage.style.setProperty("--ty", `${curY + dy}px`);

      targetRef.current.x = curX + dx;
      targetRef.current.y = curY + dy;

      // don’t fight the user while dragging
      if (!isDownRef.current) startSpringToTarget();
    });

    return () => window.cancelAnimationFrame(raf);
  }, [activeIndex, isMobile]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const snapToNearest = () => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const wrapRect = wrap.getBoundingClientRect();

    // Use SAME focus point as your existing focus effect
    // const focusX = wrapRect.left + wrapRect.width * 0.55;
    // const focusY = wrapRect.top + wrapRect.height * 0.46;

    // const focusX = wrapRect.left + wrapRect.width / 2;
    // const focusY = wrapRect.top + wrapRect.height / 2;

    const focusX = wrapRect.left + wrapRect.width / 2;
    const focusY = wrapRect.top + wrapRect.height * 0.45;

    let bestIdx = activeIndex;
    let bestDist = Number.POSITIVE_INFINITY;

    for (let i = 0; i < itemRefs.current.length; i++) {
      const el = itemRefs.current[i];
      if (!el) continue;

      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;

      const dx = cx - focusX;
      const dy = cy - focusY;
      const d2 = dx * dx + dy * dy;

      if (d2 < bestDist) {
        bestDist = d2;
        bestIdx = i;
      }
    }

    setActiveIndex(bestIdx);
  };

  return (
    <section className="fc">
      <h2 className="fc__title">
        Featured <span className="fc__titleItalic">Collections</span>
      </h2>

      <div className="fc__controls" aria-label="Carousel controls">
        <button type="button" aria-label="Previous" onClick={goPrev}>
          <ChevronLeft />
        </button>
        <button type="button" aria-label="Next" onClick={goNext}>
          <ChevronRight />
        </button>
      </div>

      <div
        className="fc__stageWrap"
        ref={wrapRef}
        style={{ touchAction: "none" }} // important for mobile
        onPointerDown={(e) => {
          const stage = stageRef.current;
          if (!stage) return;

          isDownRef.current = true;
          isDraggingRef.current = false;

          const tx = parseFloat(stage.style.getPropertyValue("--tx") || "0");
          const ty = parseFloat(stage.style.getPropertyValue("--ty") || "0");

          startRef.current = { x: e.clientX, y: e.clientY, tx, ty };
        }}
        onPointerMove={(e) => {
          if (!isDownRef.current) return;

          const dx = e.clientX - startRef.current.x;
          const dy = e.clientY - startRef.current.y;

          // threshold so clicks still work
          if (!isDraggingRef.current) {
            if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
            isDraggingRef.current = true;

            // capture ONLY once we are sure it's a drag
            (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
          }

          setStage(startRef.current.tx + dx, startRef.current.ty + dy);
        }}
        onPointerUp={(e) => {
          isDownRef.current = false;

          if (isDraggingRef.current) {
            (e.currentTarget as HTMLDivElement).releasePointerCapture(
              e.pointerId,
            );

            // SNAP after drag
            snapToNearest();

            // allow clicks again after this event cycle
            window.setTimeout(() => {
              isDraggingRef.current = false;
            }, 0);
          } else {
            isDraggingRef.current = false;
          }
        }}
        onPointerCancel={() => {
          isDownRef.current = false;
          isDraggingRef.current = false;
        }}
      >
        <div
          className="fc__stage"
          ref={stageRef}
          style={{ "--tx": "0px", "--ty": "0px" } as CssVars}
        >
          <div className="fc__bg" aria-hidden="true">
            <svg className="fc__bgSvg" preserveAspectRatio="none">
              <defs>
                <pattern
                  id="fc-bg-pattern"
                  patternUnits="userSpaceOnUse"
                  width="240"
                  height="240"
                >
                  <path
                    d="M0 240 L240 0"
                    stroke="rgba(15, 29, 42, 0.10)"
                    strokeWidth="2"
                  />
                  <circle cx="40" cy="40" r="3" fill="rgba(15, 29, 42, 0.18)" />
                  <circle
                    cx="200"
                    cy="120"
                    r="2.5"
                    fill="rgba(15, 29, 42, 0.14)"
                  />
                  <circle
                    cx="120"
                    cy="200"
                    r="2"
                    fill="rgba(15, 29, 42, 0.12)"
                  />
                </pattern>
              </defs>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#fc-bg-pattern)"
              />
            </svg>
          </div>

          {cards.map((c, idx) => {
            const pos = layout[idx];
            const active = idx === activeIndex;

            return (
              <div
                key={c.id}
                className={"fc__item" + (active ? " fc__item--active" : "")}
                // style={{ left: pos.left, top: pos.top, transform: `rotate(${pos.rotate}deg)` }}
                style={
                  {
                    left: pos.left,
                    top: pos.top,
                    ["--rot" as any]: `${pos.rotate}deg`,
                    background: `linear-gradient(273deg, transparent 2%, rgba(0,0,0,.78) 97%), ${c.bg}`,
                  } as React.CSSProperties
                }
                onClick={() => {
                  if (isDraggingRef.current) return;
                  setActiveIndex(idx);
                }}
                role="button"
                tabIndex={0}
                aria-label={`Focus ${c.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveIndex(idx);
                }}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
              >
                <img alt={c.title} src={c.image} loading="lazy" />
                <button
                  className="fc__itemButton"
                  type="button"
                  aria-label="View details"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.alert(`Open collection: ${c.title}`);
                  }}
                >
                  ›
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
