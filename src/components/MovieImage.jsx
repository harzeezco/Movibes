import PropTypes from 'prop-types';

import { styled } from 'styled-components';

const MovieImageBoxStyles = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
`;

const RatingStyles = styled.div`
  font-size: ${(props) => props.font};
  color: #fff;
  background-color: ${(props) => props.background};
  backdrop-filter: blur(10px);
  width: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0.4rem;
  border-bottom-left-radius: 2.5rem;
  border-top-right-radius: 2rem;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 0;
`;

const MovieImagestyles = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const StarIcon = styled.svg`
  width: ${(props) => props.size};
`;

const MovieImage = ({
  color = '#fcc419',
  size = '2rem',
  width = '18rem',
  height = '30rem',
  fontsize = '1.3rem',
  backgroundcolor = 'hsla(0, 0%, 90%, 0.15)',
  items,
}) => {
  const { img, rating } = items;

  return (
    <MovieImageBoxStyles width={width} height={height}>
      <RatingStyles font={fontsize} background={backgroundcolor}>
        <StarIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
          size={size}
        >
          <path
            style={{ height: '2rem', width: '3rem' }}
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </StarIcon>

        <span>{rating}</span>
      </RatingStyles>
      <MovieImagestyles width={width} height={height} src={img} alt="" />
    </MovieImageBoxStyles>
  );
};

MovieImage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundcolor: PropTypes.string,
  fontsize: PropTypes.string,
  image: PropTypes.string,
  items: PropTypes.object,
};

export default MovieImage;
