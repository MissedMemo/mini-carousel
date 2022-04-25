import { useState, useRef } from "react";

export const useCarousel = (imageUrls) => {
  const [leftmostIndex, setLeftmostIndex] = useState(0);
  const [numVisible, setNumVisible] = useState(5);

  const refCarousel = useRef();

  const calcWidth = (el) => {
    if (el) {
      refCarousel.current = el;
      refCarousel.current = el;
      const n = Math.floor(refCarousel.current.clientWidth / 100);
      if (numVisible !== n) {
        setNumVisible(n);
      }
    }
  };

  const canScrollLeft = leftmostIndex > 0;
  const canScrollRight = leftmostIndex < imageUrls.length - numVisible;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setLeftmostIndex((i) => i - 1);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setLeftmostIndex((i) => i + 1);
    }
  };

  const visibleImages = imageUrls.filter((_, i) => i >= leftmostIndex);

  return {
    canScrollLeft,
    scrollLeft,
    canScrollRight,
    scrollRight,
    visibleImages,
    calcWidth,
  };
};
