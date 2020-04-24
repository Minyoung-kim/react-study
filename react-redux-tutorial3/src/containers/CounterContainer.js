import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease} />
};

export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease,
    }
)(CounterContainer);

// 위 컴포넌트를 리덕스와 연동하려면 connect 함수를 사용해야함.
// connect (mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
// mapStateToProps <--  리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수.
// mapDispatchToProps <-- 액션 생성 함수를 props로 넘겨주기 위해 사용하는 함수.

// connect 함수를 호출하고 나면 다른 함수를 반환함. 반환된 함수에 컴포넌트를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어짐.
// const makeContainer = connect(mapStateToProps, mapDispatchToProps);
// makeContianer(타깃 컴포넌트); 