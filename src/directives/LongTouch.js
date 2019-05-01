/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */

let longTouchTimeout;

const clearLongTouchTimeout = () => {
  if (longTouchTimeout) {
    clearTimeout(longTouchTimeout);
  }
};

const startLongTouchTimeout = (timeoutMs, cb) => {
  clearLongTouchTimeout();
  longTouchTimeout = setTimeout(cb, timeoutMs);
};

export default tocuhDuration => ({
  bind: (el, { value }) => {
    if (value && typeof value === 'function') {
      // events callbacks
      el._vue_longtouch_ts_cb = (e) => {
        e.preventDefault();
        startLongTouchTimeout(tocuhDuration, value);
      };

      el._vue_longtouch_tm_cb = (e) => {
        e.preventDefault();
        clearLongTouchTimeout();
      };

      el._vue_longtouch_te_cb = (e) => {
        e.preventDefault();
        clearLongTouchTimeout();
      };

      // add event listeners
      el.addEventListener('touchstart', el._vue_longtouch_ts_cb);
      el.addEventListener('touchmove', el._vue_longtouch_tm_cb);
      el.addEventListener('touchend', el._vue_longtouch_te_cb);
    }
  },
  unbind: (el) => {
    // remove event listeners
    el.removeEventListener('touchstart', el._vue_longtouch_cb);
    el.removeEventListener('touchmove', el._vue_longtouch_tm_cb);
    el.removeEventListener('touchend', el._vue_longtouch_te_cb);
  },
});
