import {
  FETCH_SENTENCES,
  SENTENCES_REQUEST,
  SENTENCES_RESPONSE,
  SENTENCES_ERROR,
} from './types';

export const fetchSentences = () => {
  return {
    type: FETCH_SENTENCES,
  };
};

export const sentencesRequest = () => {
  return {
    type: SENTENCES_REQUEST,
  };
};

export const sentencesResponse = (data) => {
  return {
    type: SENTENCES_RESPONSE,
    payload: data,
  };
};

export const sentencesError = () => {
  return {
    type: SENTENCES_ERROR,
  };
};
