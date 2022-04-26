import { useState, useRef } from "react";

export type CarouselHookProps = {
  numImages: number;
  imageWidth: number;
  imageHeight: number;
  imageGap: number;
};

// prettier-ignore
export const useCarousel = ({ numImages, imageWidth, imageHeight, imageGap}: CarouselHookProps) => {
  const [offsetX, setOffsetX] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const refCarousel = useRef<HTMLDivElement | null>(null);

  const calcWidth = (el: HTMLDivElement) => {
    if (el) {
      refCarousel.current = el;
      if (refCarousel.current.clientWidth !== clientWidth) {
        setClientWidth(refCarousel.current.clientWidth);
      }
    }
  };

  const imagePanelWidth = numImages * imageWidth;
  const scrollAmount = clientWidth;
  const maxOffset = -1 * (imagePanelWidth - clientWidth);

  const canScrollLeft = offsetX < 0;
  const canScrollRight = offsetX > maxOffset;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setOffsetX((x) => Math.min(x + scrollAmount, 0));
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setOffsetX((x) => Math.max(x - scrollAmount, maxOffset));
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
