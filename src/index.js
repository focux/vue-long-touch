import LongPress from './directives/LongPress';

const install = (Vue, { duration = 800 } = {}) => {
  Vue.directive('long-press', LongPress(duration));
};

export default {
  install,
};
