import React from 'react';
import T from 'prop-types';

const Error = ({ errorMessage }) => {
  return (
    <>
      <p>{errorMessage}</p>
    </>
  );
};

Error.propTypes = {
  errorMessage: T.string.isRequired,
};

export default Error;
