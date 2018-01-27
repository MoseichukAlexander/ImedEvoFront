import * as constants from '../constants/modalConstants';

const initialState = {
  modalName: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.SHOW_USER_NAME:
      return {
        modalName: action.modalName,
      };
    default:
      return state;
  }
}