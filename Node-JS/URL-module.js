const url = require('url')
var result = url.parse('htps:/google.com/student?name')
console.log(result)
/* 
Url {
  protocol: 'htps:',
  slashes: null,
  auth: null,
  host: '',
  port: null,
  hostname: '',
  hash: null,
  search: '?name',
  query: 'name',
  pathname: '/google.com/student',
  path: '/google.com/student?name',
  href: 'htpps:/google.com/student?name'
}
*/