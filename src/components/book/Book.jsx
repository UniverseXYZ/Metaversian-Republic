
import BookCover from '@app/assets/images/book-cover.png';
import BookTestPage from '@app/assets/images/book-test-page.png';
import {
  Box,
  Container,
  Image
} from '@chakra-ui/react';

const Book = () => {
  return (
    <Container id="storySection">
      <Box sx={{
        pos: 'relative',
        mb: '210px',
      }}>
        <Image src={BookCover} />
        <Box sx={{
          bg: `url(${BookTestPage}) center / cover`,
          pos: 'absolute',
          boxSize: '100%',
          top: '0',
          left: '0',
        }}>
        </Box>
      </Box>
    </Container>
  );
};

export default Book;