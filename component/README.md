# 3. 컴포넌트

## 3.1 클래스형 컴포넌트

* 클래스형 컴포넌트 : state 기능, 라이프 사이클 기능 사용 가능, 임의 메서드를 정의할 수 있음. render 함수가 있어야 하고, 그 안에서 JSX를 반환해야 함.
    class App extends Component {
        render(
            const name= '리액트';
            return <div className="react">{name}</div>
        )
    }

* 함수형 컴포넌트 : state, 라이프 사이클 API사용 불가능. --> Hook 기능 도입으로 위의 내용 해결 함.
    function App() {
        const name = '리액트';
        return <div className="react"> {name} </div>
    }

> ### 클래스 문법 (ES6)
> * 이전에는 prototype이라는 문법을 사용하여 작업
>   function Dog(name) {
>       this.name= name;
>   }
>   Dog.prototype.say = function(){
>       console.log(this.name + ': 멍멍');
>   }
>   var dog = new Dog('검둥이');
>   dog.say(); // 검둥이: 멍멍
> * ES6 부터는 이와 기능이 똑같은 코드를 class를 사용하여 작성
>   class Dog {
>       constructor(name) {
>           this.name = name
>       }
>       say() {
>           console.log(this.name + ': 멍멍')
>       }
>   }
>   const dog = new Dog('흰둥이');
>   dog.say(); // 흰둥이: 멍멍

* * *

## 3.2 첫 컴포넌트 생성

MyComponent.js

    import React from 'react';

    const MyComponent = () => {
        return <div> 나의 새롭고 멋진 컴포넌트 </div>;
    }
    export default MyComponent;

> ### 클래스 문법 (ES6)
> 화살표 함수 (arrow function) ES6 문법에서 함수를 표현하는 새로운 방식, 하지만 function을 이용한 함수 선언방식을 완전히 대체하지는 않음.
> 
> * function
>   setTime(function(){
>       console.log('hello world');
>   }, 1000);
> * 화살표 함수
>   setTime(() => {
>       console.log('hello world'); 
>   }, 1000);
> * * *
> #### this값이 다름.
> * function
>   function BlackDog() {
>       this.name = '흰둥이';
>       return {
>           name: '검둥이',
>           bark: function() {
>               console.log(this.name + ': 멍멍');
>           }
>       }
>   }
>   const blackDog = new BlackDog();
>   blackDog.bark(); // '검둥이 : 멍멍'
> 
> * 화살표 함수
>   function WhiteDog() {
>       this.name = '흰둥이';
>       return {
>           name: '검둥이',
>           bark: () => {
>               console.log(this.name + ': 멍멍');
>           }
>       }
>   }
>   const whiteDog = new WhiteDog();
>   whiteDog.bark(); // '흰둥이 : 멍멍'
> ** 일반 함수 : 자신이 종속된 객체를 this로 가리킴 **
> ** 화살표 함수 : 자신이 종속된 인스턴스를 가리킴 **
