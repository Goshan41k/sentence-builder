import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './HintComponent.scss';

const HintComponent = ({ hintType, header, body }) => {
  const [isBodyVisible, setBodyVisible] = useState(false);

  return (
    <div className='hint'>
      <div
        className='hint-header'
        onClick={() => setBodyVisible(!isBodyVisible)}
      >
        <div className='hint-header-text'>{header}</div>
        <img src='#' alt='#' className='hint-header-icon' />
      </div>

      {isBodyVisible && hintType === 'time' ? (
        <div className='hint-body'>{body}</div>
      ) : null}

      {isBodyVisible && hintType === 'rule' ? (
        <div className='hint-body'>{body}</div>
      ) : null}

      {isBodyVisible && hintType === 'tags' ? (
        <div className='hint-body'>{body}</div>
      ) : null}

      {isBodyVisible && hintType === 'words' ? (
        <div className='hint-body'>{body}</div>
      ) : null}
    </div>
  );
};

HintComponent.propTypes = {
  hintType: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.string,
};

export default HintComponent;
