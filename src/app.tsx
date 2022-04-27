import styled from "styled-components/macro";
import MiniCarousel from "./mini-carousel/mini-carousel";

//prettier-ignore
const images = ["1000", "1001", "1002", "1003", "1004", "1005", "1006", "1008", "1009", "1010", "1011", "1012", "1013", "1014", "1015"];

const App = () => {
  const handleImageClick = (id: string) => {
    console.log("you clicked on image:", id);
  };

  return (
    <StyledClient>
      <ImagesSection>
        <MiniCarousel imageIds={images} clickHandler={handleImageClick} />
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
