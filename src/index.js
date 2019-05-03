import LongTouch from './directives/LongTouch';

const install = (Vue, { duration = 800 } = {}) => {
  console.log('installing');
  Vue.directive('long-touch', LongTouch(duration));
};

export default {
  install,
};
