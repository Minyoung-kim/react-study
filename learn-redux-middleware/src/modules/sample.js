import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest} from 'redux-saga/effects';
import * as api from '../lib/api';
import { startLoading, finishLoading } from './loading';
import createRequestSaga from '../lib/createRequestSaga';
// import createRequestThunk from '../lib/createRequestThunk';

// 액션 타입 선언
// 한요쳥당 세개

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
// const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
// const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// thunk 함수를 생성
// thunk 함수 내부에서는 시작할때, 성공했을 때, 실패했을 때 다른 액션을 디스패치함.

// export const getPost = id => async dispatch => {
//     dispatch({ type: GET_POST }); // 요청을 시작하는 것을 알림.
//     try {
//         const response = await api.getPost(id);
//         dispatch({
//             type: GET_POST_SUCCESS,
//             payload: response.data
//         });
//     } catch (e) {
//         dispatch({
//             type: GET_POST_FAILURE,
//             payload: e,
//             error: true
//         });
//         throw e; // 나중에 컴포넌트 단에서 에러를 조회할 수 있게 해줌.
//     }
// };
// export const getUsers = () => async dispatch => {
//     dispatch({ type: GET_USERS }); // 요청을 시작하는 것을 알림.
//     try {
//         const response = await api.getUsers();
//         dispatch({
//             type:GET_USERS_SUCCESS,
//             payload: response.data
//         });
//     } catch (e) {
//         dispatch({
//             type: GET_USERS_FAILURE,
//             payload: e,
//             error: true
//         });
//         throw e; 
//     }
// };

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

export const getPostSaga = createRequestSaga(GET_POST, api.getPost);
export const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

// function* getPostSaga(action){
//     yield put(startLoading(GET_POST));
//     try{
//         const post = yield call(api.getPost, action.payload);
//         yield put({
//             type: GET_POST_SUCCESS,
//             payload: post.data
//         });
//     } catch(e){
//         yield put({
//             type:GET_USERS_FAILURE,
//             payload:e,
//             error:true
//         });
//     }
//     yield put(finishLoading(GET_POST));
// }

// function* getUsersSaga(){
//     yield put(startLoading(GET_USERS));
//     try{
//         const users= yield call(api.getUsers);
//         yield put({
//             type: GET_USERS_SUCCESS,
//             payload: users.data
//         });
//     } catch(e){
//         yield put({
//             type: GET_USERS_FAILURE,
//             payload:e,
//             error: true
//         });
//     }
//     yield put(finishLoading(GET_USERS));
// }

export function* sampleSaga(){
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}

// 초기상태를 선언.
// 요청의 로딩 중 상태는 loading 이라는 객체에서 관리합니다.

const initialState = {
    post: null,
    users: null
};

// 리듀서 함수 
const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false // 요청 완료
            },
            post: action.payload
        }),
        [GET_USERS_SUCCESS]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_USERS: false //요청 완료
            },
            users: action.payload
        })
    },
    initialState
);

export default sample;