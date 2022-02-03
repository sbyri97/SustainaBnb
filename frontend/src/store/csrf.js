import Cookies from 'js-cookie';

export async function csrfFetch(url, options = {}) {
    //if the methos is not present set the method to get

    options.method = options.method || 'GET'

    //if no headers set oempty
    options.headers = options.headers || {};

    //if method is not get, set content-type to app/json and XSRF-TOKEN header to val of cookie

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] =
          options.headers['Content-Type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
    }

    const res = await window.fetch(url, options);

    if (res.status >= 400) throw res;

    return res;
}

export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
  }
