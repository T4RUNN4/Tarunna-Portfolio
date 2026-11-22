import { useState } from "react";

const FALLBACK = "/logo.svg?v=5";

export default function SafeImage({ src, alt = "", className = "", ...props }) {
  const [current, setCurrent] = useState(src || FALLBACK);

  return (
    <img
      src={current}
      alt={alt}
      className={`img-fallback ${className}`}
      onError={() => {
        if (current !== FALLBACK) setCurrent(FALLBACK);
      }}
      {...props}
    />
  );
}
