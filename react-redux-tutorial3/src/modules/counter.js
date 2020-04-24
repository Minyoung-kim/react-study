import { createAction, handleActions } from 'redux-actions';

// 1. 액션이름정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 2. 액션생성함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 3. 초기상태
const initialState = {
    number: 0
};

// 4. 리듀서함수
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 })
    },
    initialState
)

export default counter;