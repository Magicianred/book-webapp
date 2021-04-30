/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { MdArrowForward } from 'react-icons/md';
import { Container, Cover, Wrapper, Info, ActionButtons } from './styles';
// import ArrowRight from '../../../assets/images/arrow-right.svg';
import { getBooks } from '../../../services/books';

function index({ isbn }) {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const loadBook = async () => {
      const response = await getBooks(isbn);
      console.log('livro pesquisado', response);
      setBook(response);
    };
    loadBook();
  }, [isbn]);

  return (
    <>
      <Container>
        {book &&
          <Link to={`/book-details/${isbn}`}>
            <Wrapper>
              <Cover src="https://devsamurai-materials.s3.amazonaws.com/samurai-books/clean-code.jpg" />
              <Info>
                <h4 className="name">{book.name}</h4>
                <div className="book-rating">
                  <StarRatings
                    rating={book.rating}
                    starRatedColor="#f1c40f"
                    starDimension="18"
                    starSpacing="0"
                  />{' '}
                (4.5)
              </div>
                <div className="price">
                  <span className="discount">{isbn}</span>
                </div>
              </Info>
              <ActionButtons>
                <span className="button">
                  <MdArrowForward color="#FFF" alt="arrow" size={32} />
                </span>
              </ActionButtons>
            </Wrapper>
          </Link>
        }
      </Container>
    </>
  );
}

index.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default index;
