export function buildGoogleMapsWebUrl(lat: number, lng: number, label?: string): string {
  const q = label ? encodeURIComponent(label) : `${lat},${lng}`;
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export function buildNativeMapUrl(lat: number, lng: number, label?: string): string {
  const encodedLabel = encodeURIComponent(label ?? "Store Location");

  // iOS Apple Maps
  const isIOS = /iPhone|iPad|iPod/i.test(window.navigator.userAgent);

  if (isIOS) {
    return `http://maps.apple.com/?ll=${lat},${lng}&q=${encodedLabel}`;
  }

  // Android geo intent / generic geo URL
  return `geo:${lat},${lng}?q=${lat},${lng}(${encodedLabel})`;
}

export function openDirections(lat: number, lng: number, label?: string): void {
  const isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  );

  if (isMobile) {
    const nativeUrl = buildNativeMapUrl(lat, lng, label);
    const webUrl = buildGoogleMapsWebUrl(lat, lng, label);

    const start = Date.now();
    window.location.href = nativeUrl;

    window.setTimeout(() => {
      // fallback to web if native app did not handle it
      if (Date.now() - start < 1800) {
        window.open(webUrl, "_blank", "noopener,noreferrer");
      }
    }, 1200);

    return;
  }

  window.open(buildGoogleMapsWebUrl(lat, lng, label), "_blank", "noopener,noreferrer");
}

export function getDirectionHref(
  directionUrl: string | undefined,
  lat: number,
  lng: number,
  name?: string
): string {
  if (directionUrl && directionUrl.trim()) {
    return directionUrl;
  }

  const label = encodeURIComponent(name ?? "Store");
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}(${label})`;
}

