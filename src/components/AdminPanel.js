import React, { useState } from 'react';
import './AdminPanel.scss';
// import firebaseAPI from '../firebase';

const AdminPanel = () => {
  const [englishText, setEnglishText] = useState('');
  const [russianText, setRussianText] = useState('');
  const [sentenceTime, setSentenceTime] = useState('');
  const [tenseRule, setTenseRule] = useState('');
  const [usedWords, setUsedWords] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className='admin-panel'>
      <form className='admin-panel-form' onSubmit={submitHandler}>
        <input
          type='text'
          value={englishText}
          onChange={(e) => setEnglishText(e.target.value)}
          placeholder='english text'
          className='admin-panel-input'
        />
        <input
          type='text'
          value={russianText}
          onChange={(e) => setRussianText(e.target.value)}
          placeholder='russian text'
          className='admin-panel-input'
        />
        <input
          type='text'
          value={sentenceTime}
          onChange={(e) => setSentenceTime(e.target.value)}
          placeholder='sentence time'
          className='admin-panel-input'
        />
        <input
          type='text'
          value={tenseRule}
          onChange={(e) => setTenseRule(e.target.value)}
          placeholder='tense rule'
          className='admin-panel-input'
        />
        <input
          type='text'
          value={usedWords}
          onChange={(e) => setUsedWords(e.target.value)}
          placeholder='used words'
          className='admin-panel-input'
        />
        <button type='submit' className='admin-panel-button'>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
