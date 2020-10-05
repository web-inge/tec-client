import { handleActions } from "redux-actions";
import { increment, decrement } from './actions'

const defaultState = { counter: 0, name :'' };

export default handleActions(
    {
      [increment]: (state, { payload: { amount } }) => {
        return { ...state, counter: state.counter + amount };
      },
      [decrement]: (state, { payload: { amount } }) => {
        return { ...state, counter: state.counter + amount };
      }
    },
    defaultState
  );