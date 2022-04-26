import { useState, useRef } from "react";

export const useCarousel = (imageUrls) => {
  const [offsetX, setOffsetX] = useState(0);

  const refCarousel = useRef();

  const calcWidth = (el) => {
    if (el) {
      refCarousel.current = el;
    }
  };

  const slideProps = {
    style: { transform: `translate3d(${offsetX}px, 0, 0)` },
  };

  const canScrollLeft = offsetX < 0;
  const canScrollRight = true; //leftmostIndex < imageUrls.length - numVisible;
  console.log({ offsetX });

  const scrollLeft = () => {
    if (canScrollLeft) {
      setOffsetX((x) => x + 600);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setOffsetX((x) => x - 600);
    }
  };

  return {
    canScrollLeft,
    scrollLeft,
    canScrollRight,
    scrollRight,
    calcWidth,
    slideProps,
  };
};
