import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return (
    <div className="center" style={{ marginTop: '7rem' }}>
      <h3>💥 {message}</h3>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
