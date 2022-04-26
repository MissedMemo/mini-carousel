import { useState, useRef } from "react";

const imageWidth = 100;

export const useCarousel = (imageUrls) => {
  const [offsetX, setOffsetX] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  const refCarousel = useRef();

  const calcWidth = (el) => {
    if (el) {
      refCarousel.current = el;
      setClientWidth(refCarousel.current.clientWidth);
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
      setOffsetX((x) => x + scrollAmount);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setOffsetX((x) => {
        const offset =
          Math.abs(x - scrollAmount) > maxOffset
            ? -maxOffset
            : x - scrollAmount;
        console.log({ offset });
        return offset;
      });
    }
  };

  return {
    canScrollLeft,
    scrollLeft,
    canScrollRight,
    scrollRight,
    calcWidth,
    slideProps: {
      style: { transform: `translate3d(${offsetX}px, 0, 0)` },
    },
  };
};
