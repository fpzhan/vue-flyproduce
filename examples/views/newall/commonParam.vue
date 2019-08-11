<script>
export default {
  success: undefined /**查询成功回调行数*/,
  error: undefined /**查询失败回调行数*/,
  contentType: undefined /**ajax请求contentType头信息*/,
  submitId: undefined /**触发查询节点的id*/,
  inputClear: false /**查询完参数是否清空query*/,
  init: false /**是否页面加载完成之后就进行初始化*/,
  paginationRef: "" /**分页组件的ref值*/,
  pageValue: 1 /**当前第几个页*/,
  size: 10 /**每页多少条数据*/,
  pages: 0 /**返回的总页数*/,
  total: 0 /**返回的数据总数*/,
  statusPath: "status" /**返回状态参数路径*/,
  totalPath: "total" /**返回总数据路径*/,
  currentName: "current" /**请求第几页传入参数名*/,
  sizeName: "size" /**每页多少条数据参数名*/,
  dataPath: "data" /**返回数据路径*/,
  pagesPath: "pages" /**返回总页数路径*/,
  currentPath: "current" /**返回当前第几页路径*/,
  submitEvent: "click" /**绑定submitId的节点的触发事件*/
};
</script>
