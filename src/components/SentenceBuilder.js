import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import HintComponent from './HintComponent';

import { FETCH_SENTENCES } from '../redux/types';
import './SentenceBuilder.scss';

const SentenceBuilder = (props) => {
  useEffect(() => {
    props.fetchSentences();
  }, [props]);

  return (
    <div className='main'>
      <div className='main-sentence-builder'>
        <div className='times-field'>
          <div className='times-field-header'>Select times</div>
          <button className='main-button'>START</button>
        </div>
        <div className='sentences-field'>
          <div className='sentence-field-text'>
            I usually wake up at 7 o'clock.
          </div>
          <input
            type='text'
            className='sentence-field-input'
            placeholder='type to enter translate'
          />
        </div>
        <div className='control-field'>
          <button className='main-button'>Finish</button>
          <button className='main-button'>Skip</button>
          <button className='main-button'>Next</button>
        </div>
      </div>
      <div className='main-sentence-builder-hints'>
        {props.sentencesData.length === 0 ? null : (
          <>
            <HintComponent
              hintType='time'
              header='Sentence time'
              body={props.sentencesData[0].sentenceTime}
            />
            <HintComponent
              hintType='rule'
              header='Tense rule'
              body={props.sentencesData[0].tenseRule}
            />
            <HintComponent
              hintType='tags'
              header='Tags word'
              body={props.sentencesData[0].englishText}
            />
            <HintComponent
              hintType='words'
              header='Used words'
              body={props.sentencesData[0].usedWords}
            />
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sentencesData: state.sentencesReducer.sentencesData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSentences: () => dispatch({ type: FETCH_SENTENCES }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SentenceBuilder);
