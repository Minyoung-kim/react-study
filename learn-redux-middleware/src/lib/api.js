// api를 모두 함수화해줌.
// 각 api를  호출하는 함수를 따로 작성하면, 가독성, 유지보수가 쉬움.

import axios from 'axios';

export const getPost = id => 
axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = id => 
axios.get(`http://jsonplaceholder.typicode.com/users`);