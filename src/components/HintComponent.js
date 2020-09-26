import React, { useState } from 'react';
import PropTypes from 'prop-types';

import arrow from '../assets/arrow.png';

import './HintComponent.scss';

import { Transition } from 'react-transition-group';

const defaultStyle = {
  transition: `opacity 300ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const HintComponent = ({ hintType, header, body }) => {
  const [isBodyVisible, setBodyVisible] = useState(false);

  return (
    <div className='hint'>
      <div
        className='hint-header'
        onClick={() => setBodyVisible(!isBodyVisible)}
      >
        <div className='hint-header-text'>{header}</div>
        <img
          src={arrow}
          alt='#'
          className={
            isBodyVisible
              ? 'hint-header-icon hint-header-icon-active'
              : 'hint-header-icon'
          }
        />
      </div>

      {/* {isBodyVisible && hintType === 'time' ? (
        <div className='hint-body'>{body}</div>
      ) : null} */}

      <Transition in={isBodyVisible} timeout={'300'}>
        {(state) => (
          <div
            className='hint-body'
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {body}
          </div>
        )}
      </Transition>

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
