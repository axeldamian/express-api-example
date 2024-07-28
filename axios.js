import axios from 'axios';

const http = axios.create({
  baseUrl: 'https://www.google.com'
});

export function getContent(userId: string) {
  console.log(userId);
  return http.get('/search', {
  params : {
    q : "asd"
  }
  });
}
