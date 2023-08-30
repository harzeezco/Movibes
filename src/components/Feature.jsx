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

const Feature = ({ items }) => {
  const { service, category, isActive } = items;

  return (
    <FeatureStyles>
      <Row direction="horizontal">
        <p>{service || category}</p>
        <input
          className="checkbox"
          type="checkbox"
          checked={isActive}
          onChange={() => {}}
        />
      </Row>
    </FeatureStyles>
  );
};

Feature.propTypes = {
  items: PropTypes.object,
};
export default Feature;
