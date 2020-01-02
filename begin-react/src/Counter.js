import React, {
    useState,
    useReducer
} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    //useState 현재값을 업데이트함
    const [number, dispatch] = useReducer(reducer, 0);
    // const [number, setNumber] = useState(0);
    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT'
        });
        // setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT'
        });
        // setNumber(prevNumber => prevNumber - 1);
    }
    return ( 
        <div>
            <h1> {number} </h1> 
            {/* 함수를 호출하는 것이 아니라 함수를 넣어주는 것임 */} 
            <button onClick = {onIncrease} > +1 </button> 
            <button onClick = {onDecrease} > -1 </button> 
        </div>
    )
}

export default Counter;