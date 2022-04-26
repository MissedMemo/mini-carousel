import { useState, useRef } from "react";

type Props = {
  numImages: number;
  imageWidth: number;
  imageGap: number;
};

// prettier-ignore
export const useCarousel = ({ numImages, imageWidth, imageGap}: Props) => {
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

  const imagePanelWidth = numImages * imageWidth + (numImages -1) * imageGap;
  const scrollAmount = clientWidth - imageWidth * 0.33; // maintain some of previous view (shows no images "skipped")
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
