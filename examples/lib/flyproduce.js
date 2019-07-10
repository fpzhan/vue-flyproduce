import action from "./action";
import FlyInterface from "./FlyInterface";
import FlyEntity from "./FlyEntity";
var FlyProduce = {
  install: function(Vue) {
    Vue.component(action.name, action);
  }
};

export default FlyProduce;
