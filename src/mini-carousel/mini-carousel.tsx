import styled from "styled-components/macro";
import { useCarousel } from "./useCarousel";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const imageUrl = (s: TemplateStringsArray, id: string) =>
  `https://picsum.photos/id/${id}/500`;

const imageWidth = 194;
const imageHeight = 164;
const imageGap = 2;

type CarouselProps = {
  imageIds: string[];
  clickHandler: (url: string) => void;
};

const MiniCarousel = ({ imageIds, clickHandler }: CarouselProps) => {
  // prettier-ignore
  const { canScrollLeft, scrollLeft, canScrollRight, scrollRight, calcWidth, transformAnimation } = useCarousel({
    numImages: imageIds.length,
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

      {/*prettier-ignore */}
      <Thumbnails {...transformAnimation}>
        {imageIds.map((id) => (
          <Image key={id} src={imageUrl`${id}`} onClick={() => clickHandler(id)} />
        ))}
      </Thumbnails>

      {canScrollRight && (
        <ScrollButton direction="right" onClick={scrollRight}>
          <RightArrow />
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
  cursor: pointer;
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
    cursor: pointer;
  `
);
