import flyProduce from "./FlyProduce.vue";

flyProduce.install = function(Vue) {
  Vue.component(flyProduce.name, flyProduce);
};
export default flyProduce;
