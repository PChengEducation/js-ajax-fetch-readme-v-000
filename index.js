const token = '3b99955360148f7991b2010bbf1d2efd1d1ed282'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
