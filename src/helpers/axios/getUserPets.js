import axios from 'axios';

// axios.defaults.headers.common.Authorization = `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YwYWQ0ZGY0MjZlY2UyYTJiNWViMzkiLCJlbWFpbCI6ImtlbGx5c2hpa292YTMwMDRAZ21haWwuY29tIiwiaWF0IjoxNjc2NzQ4ODM0LCJleHAiOjE2NzY4MzUyMzR9.P1gy6R6s40UBfB3LHKvEr_0hppzE7U0qlVb7tVFcieg'}`;

axios.defaults.baseURL = 'https://arcane-everglades-20653.herokuapp.com';

export const getUserPets = () => {
  return axios.get('/userPets');
};
