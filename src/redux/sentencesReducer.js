import {
  FETCH_SENTENCES,
  SENTENCES_REQUEST,
  SENTENCES_RESPONSE,
  SENTENCES_ERROR,
} from './types';

let initialState = {
  sentencesData: [],
  sentencesIsLoading: false,
  sentencesIsLoaded: false,
  sentencesIsError: false,
};

const sentencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SENTENCES:
      return {
        ...state,
      };
    case SENTENCES_REQUEST:
      return {
        ...state,
        sentencesIsLoading: true,
        sentencesIsLoaded: false,
        sentencesIsError: false,
      };
    case SENTENCES_RESPONSE:
      return {
        ...state,
        sentencesIsLoading: false,
        sentencesIsLoaded: true,
        sentencesIsError: false,
        sentencesData: action.payload,
      };
    case SENTENCES_ERROR:
      return {
        ...state,
        sentencesIsLoading: false,
        sentencesIsLoaded: false,
        sentencesIsError: true,
      };
    default:
      return state;
  }
};

export default sentencesReducer;
