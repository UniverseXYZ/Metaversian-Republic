import Page1 from "@app/assets/images/Page1.png";
import Page10 from "@app/assets/images/Page10.png";
import Page11 from "@app/assets/images/Page11.png";
import Page12 from "@app/assets/images/Page12.png";
import Page2 from "@app/assets/images/Page2.png";
import Page3 from "@app/assets/images/Page3.png";
import Page4 from "@app/assets/images/Page4.png";
import Page5 from "@app/assets/images/Page5.png";
import Page6 from "@app/assets/images/Page6.png";
import Page7 from "@app/assets/images/Page7.png";
import Page8 from "@app/assets/images/Page8.png";
import Page9 from "@app/assets/images/Page9.png";
import { Box, Container } from "@chakra-ui/react";
import HTMLFlipBook from "react-pageflip";
import classes from "./Book.module.scss";

const Book = () => {
  let pages = [];
  let pagesUrls = [
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    Page11,
    Page12,
  ];

  for (var i = 1; i <= 12; i++) {
    pages.push(
      <Box
        key={i}
        sx={{
          bg: `url(${pagesUrls[i - 1]}) center / cover`,
          pos: "absolute",
          boxSize: "100%",
          top: "0",
          left: "0",
        }}
      />
    );
  }
  return (
    <Container id="storySection">
      <Box
        sx={{
          pos: "relative",
          mb: "210px",
        }}
      >
        <HTMLFlipBook
          className={classes["book"]}
          width={600}
          height={600}
          loadFromImages={["@app/assets/images/book-test-page.png"]}
        >
          {pages}
        </HTMLFlipBook>
      </Box>
    </Container>
  );
};

export default Book;
