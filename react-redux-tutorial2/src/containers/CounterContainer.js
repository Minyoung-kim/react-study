import React from 'react';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    const number = useSelector(state => state.counter.number);
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

export default CounterContainer;
