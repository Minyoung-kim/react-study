
// 미들웨어: 함수를 반환하는 함수를 반환하는 함수.
// const loggerMiddleware = function loggerMiddleware(store) {
//     return function(next){
//         return function(action) {
//             //미들웨어 기본 구조
//         }
//     }
// }
// param : store --> 리덕스 스토어 인스턴스
// param : action --> 디스패치된 액션
// param : next --> 함수 형태이며, store.dispatch와 비슷한 역할
// next(action) 을 호출하면 그다음 처리해야할 미들웨어에게 액션을 넘겨주고, 
// 그다음 미들웨어가 없다면 리듀서에게 액션을 넘겨줌.
// 특정조건에 따라 액션을 무시하거나 
// 특정조건에 따라 액션 정보를 가로채서 변경한 후에 리듀서에 전달할 수 있음.
// 이런 미들웨어 속성을 사용하여 네트워크 요청과 같은 비동기 작업 관리하면 유용함.


// 미들웨어는 스토어를 생성하는 과정에서 적용.
const loggerMiddleware = store => next => action => {
    console.group(action && action.type); 
    console.log('이전상태', store.getState());
    console.log('액션', action);
    next(action);
    console.log('다음상태', store.getState());
    console.groupEnd();
};

export default loggerMiddleware;