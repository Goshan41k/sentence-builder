import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import InputComponent from './InputComponent';
import HintComponent from './HintComponent';

import { FETCH_SENTENCES } from '../redux/types';
import './SentenceBuilder.scss';

const SentenceBuilder = (props) => {
  // useEffect(() => {
  //   props.fetchSentences();
  //   setTotalSentences(props.sentencesData.length);
  // }, [props]);

  const [currentSentenceId, setCurrentSentenceId] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [totalSentences, setTotalSentences] = useState(0);
  const [translatedSentence, setTranslatedSentence] = useState('');
  const [selectedTimes, setSelectedTimes] = useState([
    { id: 0, name: 'Past simple', isChecked: false },
    { id: 1, name: 'Past continuous', isChecked: false },
    { id: 2, name: 'Past perfect', isChecked: false },
    { id: 3, name: 'Present simple', isChecked: false },
    { id: 4, name: 'Present continuous', isChecked: false },
    { id: 5, name: 'Present perfect', isChecked: false },
    { id: 6, name: 'Future simple', isChecked: false },
    { id: 7, name: 'Future continuous', isChecked: false },
    { id: 8, name: 'Future perfect', isChecked: false },
  ]);

  return (
    <div className='main'>
      <div className='main-sentence-builder'>
        <div className='times-field'>
          <div className='times-field-header'>Select times</div>
          <div className='times-field-inputs'>
            <InputComponent
              id={0}
              times={selectedTimes}
              setTimes={setSelectedTimes}
            />
            <InputComponent
              id={1}
              times={selectedTimes}
              setTimes={setSelectedTimes}
            />
            <InputComponent
              id={2}
              times={selectedTimes}
              setTimes={setSelectedTimes}
            />
            <InputComponent
              id={3}
              times={selectedTimes}
              setTimes={setSelectedTimes}
            />
            <InputComponent
              id={4}
              times={selectedTimes}
              setTimes={setSelectedTimes}
            />
            <InputComponent
              id={5}
              times={selectedTimes}
              setTimes={setSelectedTimes}
            />
            <InputComponent
              id={6}
              times={selectedTimes}
              setTimes={setSelectedTimes}
            />
            <InputComponent
              id={7}
              times={selectedTimes}
              setTimes={setSelectedTimes}
            />
            <InputComponent
              id={8}
              times={selectedTimes}
              setTimes={setSelectedTimes}
            />
          </div>

          <button
            onClick={() => {
              props.fetchSentences(selectedTimes);
              // console.log(selectedTimes);
            }}
            className='main-button'
          >
            START
          </button>
        </div>
        <div className='sentences-field'>
          {props.sentencesData.length !== 0 ? (
            <div className='sentence-field-text'>
              {props.sentencesData[currentSentenceId].russianText}
            </div>
          ) : null}
          <input
            type='text'
            className='sentence-field-input'
            placeholder='type to enter translate'
            value={translatedSentence}
            onChange={(e) => setTranslatedSentence(e.target.value)}
          />
        </div>
        <div className='control-field'>
          <button
            onClick={() => {
              console.log(
                'Ваш результат: ',
                rightAnswers,
                ' правильных ответов из',
                totalSentences
              );
              setCurrentSentenceId(0);
              setTranslatedSentence('');
            }}
            className='main-button'
          >
            Finish
          </button>
          <button
            onClick={() => {
              if (currentSentenceId === props.sentencesData.length - 1) return;
              setCurrentSentenceId(currentSentenceId + 1);
            }}
            className='main-button'
          >
            Skip
          </button>
          <button
            onClick={() => {
              if (currentSentenceId === props.sentencesData.length - 1) return;
              if (
                props.sentencesData[
                  currentSentenceId
                ].englishText.toLocaleLowerCase() ===
                translatedSentence.toLocaleLowerCase()
              ) {
                setCurrentSentenceId(currentSentenceId + 1);
                setRightAnswers(rightAnswers + 1);
                setTranslatedSentence('');
              } else {
                alert('Note right translate');
              }
            }}
            className='main-button'
          >
            Next
          </button>
        </div>
      </div>
      <div className='main-sentence-builder-hints'>
        {props.sentencesData.length === 0 ? null : (
          <>
            <HintComponent
              hintType='time'
              header='Sentence time'
              body={props.sentencesData[currentSentenceId].sentenceTime}
            />
            <HintComponent
              hintType='rule'
              header='Tense rule'
              body={props.sentencesData[currentSentenceId].tenseRule}
            />
            <HintComponent
              hintType='tags'
              header='Tags word'
              body={props.sentencesData[currentSentenceId].englishText}
            />
            <HintComponent
              hintType='words'
              header='Used words'
              body={props.sentencesData[currentSentenceId].usedWords}
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
