# 3. 컴포넌트

## 3.1 클래스형 컴포넌트

* 클래스형 컴포넌트 : state 기능, 라이프 사이클 기능 사용 가능, 임의 메서드를 정의할 수 있음. render 함수가 있어야 하고, 그 안에서 JSX를 반환해야 함.
    ```
    class App extends Component {
        render(
            const name= '리액트';
            return <div className="react">{name}</div>
        )
    }
    ```

* 함수형 컴포넌트 : state, 라이프 사이클 API사용 불가능. --> Hook 기능 도입으로 위의 내용 해결 함.
    ```
    function App() {
        const name = '리액트';
        return <div className="react"> {name} </div>
    }
    ```

> #### 클래스 문법 (ES6)
> * 이전에는 prototype이라는 문법을 사용하여 작업
>   ```
>   function Dog(name) {
>       this.name= name;
>   }
>   Dog.prototype.say = function(){
>       console.log(this.name + ': 멍멍');
>   }
>   var dog = new Dog('검둥이');
>   dog.say(); // 검둥이: 멍멍
>   ```
> * ES6 부터는 이와 기능이 똑같은 코드를 class를 사용하여 작성
>   ```
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
>   ```

* * *

## 3.2 첫 컴포넌트 생성

MyComponent.js

    import React from 'react';

    const MyComponent = () => {
        return <div> 나의 새롭고 멋진 컴포넌트 </div>;
    }
    export default MyComponent;

> #### 클래스 문법 (ES6)
> 화살표 함수 (arrow function) ES6 문법에서 함수를 표현하는 새로운 방식, 하지만 function을 이용한 함수 선언방식을 완전히 대체하지는 않음.
> 
> * function
>   ```
>   setTime(function(){
>       console.log('hello world');
>   }, 1000);
>   ```
> * 화살표 함수
>   ```
>   setTime(() => {
>       console.log('hello world'); 
>   }, 1000);
>   ```
> * * *
> #### this값이 다름.
> * function
>   ```
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
>   ```
> 
> * 화살표 함수
>   ```
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
>   ```
> **일반 함수 : 자신이 종속된 객체를 this로 가리킴**
> **화살표 함수 : 자신이 종속된 인스턴스를 가리킴**

### 모듈 내보내기 (export)
```
export default MyComponent;
```

### 모듈 불러오기 (import)

```
import React from 'react';
import MyComponent from './MyComponent';
```

## 3.3 props
컴포넌트 속성을 설정할 때 사용하는 요소.
해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있음.

### 3.3.1 JSX 내부에서 props 렌더링
>> 2장에서 배웠던 것처럼 JSX내부에서 {} 기호로 감싸주면 됨.

```
import React from 'react';
const MyComponent = props => {
    return <div> 안녕하세요, 제이름은 {props.name} 입니다.</div>
}
export default MyComponent;
```

### 3.3.2 컴포넌트를 사용할 때 props값 지정하기.

```
import React from 'react';
import MyComponent from './MyComponent';
const App () => {
    return <MyComponent name="React"/>
}
export default App;
```
### 3.3.3 props 기본값 설정: defaultProps

```
import React from 'react';
const MyComponent = props => {
    return <div> 안녕하세요, 제이름은 {props.name} 입니다.</div>
}
MyComponent.defaultProps = {
    name:'기본이름'
}
export default MyComponent;
```
### 3.3.4 태그 사이의 내용을 보여주는 children
리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이의 내용을 보여주는 props
```
import React from 'react';
import MyComponent from './MyComponent';
const App () => {
    return <MyComponent> 리액트 </MyComponent>;
}
export default App;
```
```
import React from 'react';
const MyComponent = props => {
    return <div> 
        안녕하세요, 제이름은 {props.name} 입니다. <br/>
        children 값은 {props.children} 입니다.
    </div>
}
MyComponent.defaultProps = {
    name:'기본이름'
}
export default MyComponent;
```
### 3.3.5 비구조화 활당 문법을 통해 props 내부 값 추출하기
```
const MyComponent = props => {
    const {name, children} = props;
```
```
const MyComponent = ({name, children}) => {
```
### 3.3.6 propTypes를 통한 props 검증
```
import React from 'react';
import PropTypes from 'prop-types';
const MyComponent = ({name, children}) => {
    return (...);
);
MyComponent.defaultProps = {
    name:'기본 이름'
};
MyComponent.propTypes = {
    name: PropTypes.string
};
export default MyComponent;
```

```
const App = () => {
    return <MyComponent name={3}>리액트</MyComponent>;
}
```
* propTypes 종류
  * array
  * arrayOf(다른 propType): 특정 PropType으로 이루어진 배열
  * bool
  * func
  * number
  * object
  * string
  * symbol: ES6의 Symbol
  * node: 렌더링할 수 있는 모든 것
  * instanceOf(클래스): 특정 클래스의 인스턴스
  * oneOf(['dog', 'cat']): 주어진 배열 요소 중 값 하나
  * oneOfType: 주어진 배열 안의 종류중 하나
  * objectOf(): 객체의 모든 키 값이 인자로 주어진 PropType인 객체
  * shape({name: PropTypes.string, num: PropTypes.number}): 주어진 스키마를 가진 객체
  * any

### 3.3.7 클래스형 컴포넌트에서 props 사용하기
```
class MyComponent extends Component {
    render() {
        const {name, children} = this.props;
        return (
            <div>
            안녕하세요, 제 이름은 {name}입니다. <br />
            children값은 {children} 입니다.
            </div>
        )
    }
}
```
```
class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    }
    static propTypes = {
        name: PropTypes.string,
    }
    render() {
        const {name, children} = this.props;
        return (
            <div>
            안녕하세요, 제 이름은 {name}입니다. <br />
            children값은 {children} 입니다.
            </div>
        )
    }
}
```
## 3.4 state
컴포넌트 내부에서 바뀔 수 있는 값
--> props는 부모 컴포넌트가 설정하고 부모 컴포넌트에서만 수정가능.

### 3.4.1 클래스형 컴포넌트 - state
* 클래스형 컴포넌트에서 state를 설정할 때는 constructor 메서드를 작성.
* constructor를 작성할 때에는 super(props)를 호출해줘야 함. 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속하고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해줌.

Counter.js

```
import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        // state의 초깃값 설정하기
        this.state= {
            number: 0
        };
    }
    render() {
        // state를 조회할 때에는 this.state로 조회
        const {number} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={() => {
                    this.setState({number:number+1});
                }}>+1</button>
            </div>
        )
    }
}
export default Counter;
```

```
import React from 'react';
import Counter from './Counter';

const App = () => {
    return <Counter />
}
export default App;

```

* state 객체 안에 여러값이 있을때

```
this.state = {
    number:0,
    fixedNumber:0
}
```
```
const {number, fixedNumber} = this.state;
```
```
<h1>{number}</h1>
<h2>바뀌지 않는 값 {fixedNumber}</h2>
```
* state를 constructor에서 꺼내기
constructor을 삭제하고, 하기 값으로 변경

```
state = {
    number:0,
    fixedNumber:0
}
```

* this.setState 에 객체 대신 함수 인자 전달하기
```
this.setState({number: number+1});
this.setState({number: this.state.number+1});
```
```
this.setState(prevState => {
    return {
        number: prevState.number+1
    }
});
```

* this.setState가 끝난 후 특정 작업 실행하기
setState 의 두번째 파라미터로 콜백 함수를 등록하여 작업처리 가능.
```
this.setState({
    number : number+1
}, () => {
    console.log('방금 setState가 호출되었습니다.')
    console.log(this.state);
});
```

### 3.4.2 함수형 컴포넌트 - state

Say.js
```
import React, {useState} from 'react';
const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요!');
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
}
export default Say;
```
App.js
```
import React from 'react';
import Say from './Say';
const App = () => {
    return <Say />
}
export default App;
```
* 한 컴포넌트에서 useState 여러번 사용하기

Say.js
```
import React, {useState} from 'react';
const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}} onClick={() => setColor('red')}>빨간색</button>
            <button style={{color:'green'}} onClick={() => setColor('green')}>녹색</button>
            <button style={{color:'blue'}} onClick={() => setColor('blue')}>파란색</button>
        </div>
    );
}
export default Say;
```

## 3.5 state를 사용할 때 주의사항
**state값을 바꿀때는 setState 혹은 useState를 통해 전달받은 세터함수를 사용해야함!**
--> 배열이나 객체를 업데이트할떄 : 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트 한 후, 
그 사본의 상태를 setState 혹은 세터함수를 통해 업데이트 합니다.
사본을 만들어서 업데이트 하는 방법 --> 스프레드 연산자, concat(), filter(), map() 
이에 대한 내용은 이후 차근차근 배워보겠습니다.  끝

## 앞으로...
**새로운 컴포넌트를 만들 때에는 useState를 사용하길 권장**
--> 이유: 코드가 더 간결하고, 함수형 컴포넌트와 Hooks를 사용하는 것이 주요 컴포넌트 개발방식이 될 거라고 공지 했기 때문.