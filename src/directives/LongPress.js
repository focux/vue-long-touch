/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */

let longPressTimeout;

const clearLongPressTimeout = () => {
  if (longPressTimeout) {
    clearTimeout(longPressTimeout);
  }
};

const startLongPressTimeout = (timeoutMs, cb) => {
  clearLongPressTimeout();
  longPressTimeout = setTimeout(cb, timeoutMs);
};

export default pressDuration => ({
  bind: (el, { value }) => {
    if (value && typeof value === 'function') {
      // events callbacks
      el._vue_longpress_ts_cb = (e) => {
        e.preventDefault();
        startLongPressTimeout(pressDuration, value);
      };

      el._vue_longpress_tm_cb = (e) => {
        e.preventDefault();
        clearLongPressTimeout();
      };

      el._vue_longpress_te_cb = (e) => {
        e.preventDefault();
        clearLongPressTimeout();
      };

      // add event listeners
      el.addEventListener('touchstart', el._vue_longpress_ts_cb);
      el.addEventListener('touchmove', el._vue_longpress_tm_cb);
      el.addEventListener('touchend', el._vue_longpress_te_cb);
    }
  },
  unbind: (el) => {
    // remove event listeners
    el.removeEventListener('touchstart', el._vue_longpress_cb);
    el.removeEventListener('touchmove', el._vue_longpress_tm_cb);
    el.removeEventListener('touchend', el._vue_longpress_te_cb);
  },
});
