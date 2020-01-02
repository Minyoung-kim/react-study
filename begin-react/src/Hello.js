import React from 'react';

//컴포넌트 만들기: 함수 형태 클래스 형태
//컴포넌트 : 함수 형태 
function Hello({color, name, isSpecial}){
    return (
        <div style={{
            color
        }}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name : '이름없음'
}

export default Hello;