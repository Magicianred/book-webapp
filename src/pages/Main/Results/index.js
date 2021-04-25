import React from 'react';
import PropTypes from 'prop-types';
import { Container, Cover, Wrapper } from './styles';
// import { getBooks } from '../../../services/books';

function index({ isbn }) {
  // const [book, setBook] = useState();
  // useEffect(() => {
  //   const loadBook = async () => {
  //     getBooks(isbn);
  //     setBook(loadBook);
  //   };
  //   loadBook();
  // }, [isbn]);

  return (
    <>
      <Container>
        <Wrapper>
          <Cover src="https://devsamurai-materials.s3.amazonaws.com/samurai-books/clean-code.jpg" />
          <div>{isbn}</div>
        </Wrapper>
      </Container>
    </>
  );
}

index.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default index;
