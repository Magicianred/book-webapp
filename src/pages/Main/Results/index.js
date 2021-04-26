import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import { Container, Cover, Wrapper, Info, ActionButtons } from './styles';
import ArrowRight from '../../../assets/images/arrow-right.svg';
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

  const redirectUser = () => {
    window.location.href = '/app/users';
  };

  return (
    <>
      <Container>
        <Wrapper onClick={() => redirectUser()}>
          <Cover src="https://devsamurai-materials.s3.amazonaws.com/samurai-books/clean-code.jpg" />
          <Info>
            <h4 classeName="name">
              Código Limpo - habilidades e praticas do agile software
            </h4>
            <div className="book-rating">
              <StarRatings
                rating={4.5}
                starRatedColor="#f1c40f"
                startDimension="18"
                startSpacing="0"
              />{' '}
              (4.5)
            </div>
            <div className="price">
              <span className="discount">{isbn}</span>
            </div>
          </Info>
          <ActionButtons>
            <span>
              <img src={ArrowRight} alt="arrow" size={32} />
            </span>
          </ActionButtons>
        </Wrapper>
      </Container>
    </>
  );
}

index.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default index;
