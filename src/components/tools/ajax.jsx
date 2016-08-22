const Ajax = {
  get(url, func) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && func) {
        func(xhr.response);
      }
    };
    xhr.send(null);
  },

  post(url, data, func) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && func) {
        func(xhr);
      }
    };
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.withCredentials = true;   //允许cookie
    xhr.send(JSON.stringify(data));
  },
}

export default Ajax;
