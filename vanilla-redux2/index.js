import { createStore } from 'redux';

// dom을 직접 수정하기 위해서 dom 노드를 가리키는 값을 미리 선언해줌.

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 1.
// 먼저 액션에 이름을 정의해 줌. 
// 액션 : 프로젝트의 상태에 변화를 일으키는 것을 액션이라고 함.
// 액션의 이름은 문자열 형태, 주로 대문자, 중복되지 않도록 주의.

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 2.
// 액션 생성 함수 작성
// type 값을 갖고 있어야 함.

const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = difference => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});

// 3.
// 초깃값 설정
const initialState = {
    toggle: false,
    counter: 0
}

// 4.
// 리듀서 함수 정의
// 리듀서는 변화를 일으키는 함수.
// 파라미터 state, action 
function reducer(state= initialState, action) {
    console.log(action.difference);
    switch(action.type){
        case TOGGLE_SWITCH:
            return {
                ...state, 
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

// 스토어 만들기 : 이부분 이해가 안감.
const store = createStore(reducer);
// 스토어 내장함수들을 사용하여 render 함수 만들기
const render = () => {
    const state = store.getState(); // 현재 상태를 불러움
    //토글 처리
    if(state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    // 카운터 처리
    counter.innerText = state.counter;
}
render();

// 구독하기 <-- 스토어의 내장함수.
// 스토어의 상태가 바뀔때마다 render 함수가 호출되도록 해줌.
store.subscribe(render);

// 디스패치 <-- 액션 발생시키기.
// 파라미터 : 액션객체

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
}