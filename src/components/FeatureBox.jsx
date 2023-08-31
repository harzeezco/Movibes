import PropTypes from 'prop-types';

import { styled } from 'styled-components';
import RegularList from './RegularList';
import Features from './Feature';

const FeaturedMoviesStyles = styled.div`
  font-size: 1.2rem;
  text-transform: capitalize;
  background-color: var(--color-dark-secondary);
  color: var(--color-white-light);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  margin: 0 auto 3rem;
  max-width: 75%;
`;

const FeatureHeadingStyles = styled.h5`
  text-align: center;
  font-size: 1.4rem;
  font-weight: var(--font-weight-xm);
  margin-bottom: 1.5rem;
`

const FeatureBox = ({ feature, featureHeading }) => {
  return (
    <>
      <FeatureHeadingStyles>{featureHeading}</FeatureHeadingStyles>
      <FeaturedMoviesStyles>
        <RegularList
          items={feature}
          resorceName="items"
          feature="categories"
          itemComponent={Features}
        />
      </FeaturedMoviesStyles>
    </>
  );
};

FeatureBox.propTypes = {
  feature: PropTypes.array,
  featureHeading: PropTypes.string,
};

export default FeatureBox;
