import styled from "styled-components/macro";
import { useCarousel } from "./useCarousel";
import ScrollButton from "./scroll-button";

const MiniCarousel = ({ imageUrls, clickHandler }) => {
  // prettier-ignore
  const { canScrollLeft, scrollLeft, canScrollRight, scrollRight, visibleImages, calcWidth } = useCarousel(imageUrls);

  return (
    <Carousel ref={calcWidth}>
      {canScrollLeft && <ScrollButton clickHandler={scrollLeft} isLeftButton />}

      <Thumbnails>
        {visibleImages.map((url) => (
          <Image key={url} src={url} onClick={() => clickHandler(url)} />
        ))}
      </Thumbnails>

      {canScrollRight && <ScrollButton clickHandler={scrollRight} />}
    </Carousel>
  );
};

export default MiniCarousel;

///////////// Styling... ////////////////

const Carousel = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid lightblue;
`;

const Thumbnails = styled.div`
  display: flex;
  gap: 2px;
`;

const Image = styled("img")`
  height: 100px;
`;
