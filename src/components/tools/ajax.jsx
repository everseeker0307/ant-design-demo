const Ajax = {
  get(url, func) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && func) {
        func(request.response);
      }
    };
    request.send(null);
  },

  post(url, data, func) {
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && func) {
        func(request.response);
      }
    };
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
  },
}

export default Ajax;
