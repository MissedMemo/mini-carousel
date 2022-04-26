import styled from "styled-components/macro";
import { useCarousel } from "./useCarousel";

const imageWidth = 194;
const imageHeight = 164;
const imageGap = 2;

type CarouselProps = {
  imageUrls: string[];
  clickHandler: (url: string) => void;
};

const MiniCarousel = ({ imageUrls, clickHandler }: CarouselProps) => {
  // prettier-ignore
  const { canScrollLeft, scrollLeft, canScrollRight, scrollRight, calcWidth, transformAnimation } = useCarousel({
    numImages: imageUrls.length,
    imageWidth,
    imageGap
  });

  return (
    <Carousel ref={calcWidth}>
      {canScrollLeft && (
        <ScrollButton direction="left" onClick={scrollLeft}>
          {"<"}
        </ScrollButton>
      )}

      <Thumbnails {...transformAnimation}>
        {imageUrls.map((url) => (
          <Image key={url} src={url} onClick={() => clickHandler(url)} />
        ))}
      </Thumbnails>

      {canScrollRight && (
        <ScrollButton direction="right" onClick={scrollRight}>
          {">"}
        </ScrollButton>
      )}
    </Carousel>
  );
};

export default MiniCarousel;

///////////// Styling... ////////////////

const Carousel = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid lightblue;
  border-radius: 24px;
`;

const Thumbnails = styled.div`
  transition: transform 300ms ease 100ms;
  display: flex;
  gap: ${imageGap}px;
`;

// flex-shrink required for images in flex container not to be square!
const Image = styled("img")`
  width: ${imageWidth}px;
  height: ${imageHeight}px;
  flex-shrink: 0;
`;

const ScrollButton = styled.button(
  ({ direction }: { direction: string }) => `
    z-index: 1000;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${direction === "left" ? 0 : null};
    right: ${direction === "right" ? 0 : null};
    width: 40px;
    background-color: black;
    opacity: 45%;
    color: white;
    border: none;
    font-size: 32px;
  `
);
