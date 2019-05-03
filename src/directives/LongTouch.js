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

const disableSelect = (el) => {
  if (el) {
    el.style.webkitUserSelect = 'none';
    el.style.khtmlUserSelect = 'none';
    el.style.mozUserSelect = 'none';
    el.style.msUserSelect = 'none';
    el.style.userSelect = 'none';
  }
};

export default tocuhDuration => ({
  bind: (el, { value }) => {
    disableSelect(el);
    if (value && typeof value === 'function') {
      // events callbacks
      el._vue_longtouch_ts_cb = (e) => {
        // e.preventDefault();
        e.stopPropagation();
        startLongTouchTimeout(tocuhDuration, value);
      };

      el._vue_longtouch_tm_cb = (e) => {
        // e.preventDefault();
        e.stopPropagation();
        clearLongTouchTimeout();
      };

      el._vue_longtouch_te_cb = (e) => {
        // e.preventDefault();
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
