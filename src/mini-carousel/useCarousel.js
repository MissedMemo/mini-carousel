import { useState, useRef } from "react";

const imageWidth = 194;

export const useCarousel = (imageUrls) => {
  const [offsetX, setOffsetX] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  const refCarousel = useRef();

  const calcWidth = (el) => {
    if (el) {
      refCarousel.current = el;
      if (refCarousel.current.clientWidth !== clientWidth) {
        setClientWidth(refCarousel.current.clientWidth);
      }
    }
  };

  const totalWidth = imageUrls.length * imageWidth;
  const scrollAmount = clientWidth;
  const maxOffset = totalWidth - clientWidth;

  const canScrollLeft = offsetX < 0;
  const canScrollRight = offsetX > -maxOffset;

  console.log(
    { offsetX },
    { totalWidth },
    { clientWidth },
    { scrollAmount },
    { maxOffset },
    { canScrollLeft },
    { canScrollRight }
  );

  const scrollLeft = () => {
    if (canScrollLeft) {
      setOffsetX((x) => Math.min(x + scrollAmount, 0));
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setOffsetX((x) => Math.max(x - scrollAmount, -maxOffset));
    }
  };

  return {
    canScrollLeft,
    scrollLeft,
    canScrollRight,
    scrollRight,
    calcWidth,
    transformAnimation: {
      style: { transform: `translate3d(${offsetX}px, 0, 0)` },
    },
  };
};
