import styled from "styled-components/macro";
import { useCarousel } from "./useCarousel";

const MiniCarousel = ({ imageUrls, clickHandler }) => {
  // prettier-ignore
  const { canScrollLeft, scrollLeft, canScrollRight, scrollRight, calcWidth, slideProps } = useCarousel(imageUrls);

  return (
    <Carousel ref={calcWidth}>
      {canScrollLeft && (
        <ScrollButton direction="left" onClick={scrollLeft}>
          {"<"}
        </ScrollButton>
      )}

      <Thumbnails {...slideProps}>
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
  gap: 2px;
`;

const Image = styled("img")`
  height: 100px;
  width: 100px;
`;

const ScrollButton = styled.button(
  ({ direction }) => `
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
