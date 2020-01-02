import React, {useState} from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })
    const {name, nickname} = inputs;

    // e -> event 에 대한 내용을 파라미터로 받아와서 사용할 수 있음.
    // 불변성을 지켜줘야 react 컴포넌트에서 변경되는 것을 감지하여 업데이트 시켜줌. 
    // 객체 상태를 업데이트 할때에는 ... 사용하여 값을 복사한 후에 특정값을 덮어씌워서 상태를 업데이트 해줘야 함.
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value, // [name] 해당하는 name의 값을 가져다 할당해줌.
        });
    }
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
    }
    return (
        <div>
            <input name="name" placeholder="이름" onChange = {onChange} value = {name} />
            <input name="nickname" placeholder="닉네임" onChange = {onChange} value = {nickname} />
            <button onClick = {onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} {nickname}
            </div>
        </div>
    )
}

export default InputSample;