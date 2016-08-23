import jquery from 'jquery';

const Ajax = {
  //post默认为json格式
  post(urlp, datap, func) {
    jquery.ajax({
      type: 'POST',
      url: urlp,
      data: JSON.stringify(datap),
      dataType: 'json',
      contentType: 'application/json',
      success: r => {
        func(r);
      },
    });
  },

  //表单默认支持application/x-www-form-urlencoded
  form(urlp, datap, func) {
    jquery.ajax({
      type: 'POST',
      url: urlp,
      data: datap,
      dataType: 'json',
      contentType: 'application/x-www-form-urlencoded',
      xhrFields: {
        withCredentials: true,
      },
      success: r => {
        func(r);
      },
    });
  },
}

export default Ajax;
