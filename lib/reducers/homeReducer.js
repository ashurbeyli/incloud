import { MESSAGE } from '../components/Home';

const initState = {
  message: MESSAGE
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'GET_HOME_DATA' :
      return {...state, message: action.message};
    default :
      return state;
  }
};