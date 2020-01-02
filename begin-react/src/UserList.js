import React, {useEffect, useContext} from 'react';
import {UserDispatch} from './App'
const User = React.memo(function User({user}){
    const {username, email, id, active} = user;
    const dispatch = useContext(UserDispatch);
    useEffect(() => {
        //특정 값이 업데이트 되고 나서 실행
        //props --> state
        //REST API
        //DS Video.js
        //setInterval, setTimeout
        // console.log('값이 설정됨, 값이 바뀜');
        // console.log(user);
        return () => {
            //clearinterval, clearTimeout
            // 라이브러리 인스턴스 제거작업
            // 뒷정리 함수로..
            // console.log('업데이트가 바뀌기전');
            // console.log(user);
        }
    }, [user]);
    return (
        <div>
            <div>
                <b style={{
                    color: active ? 'green': 'black',
                    cursor: 'pointer'
                }}
                onClick={() => dispatch({
                    type: 'TOGGLE_USER',
                    id
                })}>{username}</b>
                <span>({email})</span>
                <button onClick={() => dispatch({
                    type: 'REMOVE_USER',
                    id
                })}>삭제</button>
            </div>
        </div>
    )
});
function UserList({users}){
    return (
        <div>
            {
                users.map(
                    // map에서 key값 (고유값)은 필수임, index넣는 것보다 데이터에 고유값을 갖고 있는 것이 나음 
                    // user => (<User user={user} key={user.id} onRemove = {onRemove}/>),
                    (user, index) => (<User user={user} key={index} />)
                )
            }
        </div>
    )
}

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);