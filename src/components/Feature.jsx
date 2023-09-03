import PropTypes from 'prop-types';
import Row from '../UI-Logic/Row';
import { styled } from 'styled-components';

const FeatureStyles = styled.div`
  &:not(:last-child) {
    border-bottom: 1.5px solid var(--color-dark-tertiary);
    padding-bottom: 5px;
    margin-bottom: 5px;
  }
`;

const CheckMarkStyles = styled.div`
  background-color: var(--color-primary);
  color: var(--color-dark-primary);
  width: 15px;
  height: 15px;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: var(--font-weight-lg);
  }
`;

const Feature = ({ items }) => {
  const { service, category } = items;

  return (
    <FeatureStyles>
      <Row direction="horizontal">
        <p>{service || category}</p>
        <CheckMarkStyles>
          <span>
            <ion-icon name="checkmark-outline"></ion-icon>
          </span>
        </CheckMarkStyles>
      </Row>
    </FeatureStyles>
  );
};

Feature.propTypes = {
  items: PropTypes.object,
};
export default Feature;
