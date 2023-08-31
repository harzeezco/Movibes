import PropTypes from 'prop-types';
import BoxStyles from '../UI-Logic/BoxStyles';
import FeatureBox from './FeatureBox';
import categories from '../../categories-data';
import services from '../../service-data';

const Box = ({ children, column }) => {
  return (
    <BoxStyles column={column}>
      {children}

      {column === 2 ? (
        <aside>
          <FeatureBox featureHeading="Categories" feature={categories} />
          <FeatureBox featureHeading="Services" feature={services} />
        </aside>
      ) : null}
    </BoxStyles>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  column: PropTypes.number,
};

export default Box;
