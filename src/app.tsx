import styled from "styled-components/macro";
import MiniCarousel from "./mini-carousel/mini-carousel";

const images = [
  "https://picsum.photos/id/1000/500",
  "https://picsum.photos/id/1001/500",
  "https://picsum.photos/id/1002/500",
  "https://picsum.photos/id/1003/500",
  "https://picsum.photos/id/1004/500",
  "https://picsum.photos/id/1005/500",
  "https://picsum.photos/id/1006/500",
  "https://picsum.photos/id/1008/500",
  "https://picsum.photos/id/1009/500",
  "https://picsum.photos/id/1010/500",
  "https://picsum.photos/id/1011/500",
  "https://picsum.photos/id/1012/500",
  "https://picsum.photos/id/1013/500",
  "https://picsum.photos/id/1014/500",
  "https://picsum.photos/id/1015/500",
];

const App = () => {
  const handleImageClick = (url: string) => {
    console.log("you clicked on:", url);
  };

  return (
    <StyledClient>
      <ImagesSection>
        <MiniCarousel imageUrls={images} clickHandler={handleImageClick} />
      </ImagesSection>
    </StyledClient>
  );
};

export default App;

///////////// Styling... ////////////////

const StyledClient = styled.div`
  height: 100vh;
`;

const ImagesSection = styled.div`
  width: 50%;
  border: 1px solid black;
  padding: 40px;
`;
