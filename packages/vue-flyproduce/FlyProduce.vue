<template
  ><div><slot></slot></div
></template>
<script>
import $ from "jquery";
import Vue from "vue";

function contains(a, obj) {
  var i = a.length;
  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}

export default {
  name: "flyProduce",
  props: {
    flyAction: Object,
    url: String,
    input: Object /*查询参数*/,
    output: Object /*返回结果*/,
    success: Function /*查询成功回调行数*/,
    error: Function /*查询失败回调行数*/,
    contentType: String /*ajax请求contentType头信息*/,
    submitId: String /*触发查询节点的id*/,
    inputClear: Boolean /*查询完参数是否清空query*/,
    init: Boolean /*是否页面加载完成之后就进行初始化*/,
    pageValue: Number /*当前第几页的值*/,
    size: Number /*每页多少条数据*/,
    currentName: String /*请求第几页传入参数名*/,
    sizeName: String /*每页多少条数据参数名*/,
    dataPath: String /*返回数据路径*/,
    pagesPath: String /*返回总页数路径*/,
    currentPath: String /*返回当前第几页路径*/,
    submitEvent: String /*绑定submitId节点的事件名称，例如：click*/,
    needPage: Boolean /*是否需要分页*/
  },
  data() {
    return {
      //ajax发起请求时，数据存储的位置
      ajaxData: {},
      ajaxParam: [
        "options",
        "async",
        // "beforeSend",
        "cache",
        // "complete",
        "contentType",
        "context",
        // "dataFilter",
        "dataType",
        "global",
        "ifModified",
        "jsonp",
        "jsonpCallback",
        "password",
        "processData",
        "scriptCharset",
        "traditional",
        "timeout",
        "type",
        "username",
        "xhr"
      ]
    };
  },
  mounted: function() {
    var current = this;
    if (
      this.$props.flyAction &&
      this.$props.flyAction instanceof FlyInterface
    ) {
      this.$props.flyAction.syncAction = this.action;
    }
    this.$nextTick(function() {
      //页面渲染完成后，进行触发ajax请求节点的元素绑定
      current.getProps("submitId") &&
        $("#" + current.getProps("submitId")).bind(
          current.getProps("submitEvent")
            ? current.getProps("submitEvent")
            : "click",
          function() {
            current.action();
          }
        );
      //页面加载完成后，初始化数据请求
      current.getProps("init") && current.action();
    });
  },
  methods: {
    //全局赋值，通过该方法进行。只修改数据，不修改变量引用地址
    setVal(mData, mVal, list) {
      var data = mData;
      var val = mVal;
      var dataStr = "mData";
      var valStr = "mVal";
      if (list && list instanceof Array) {
        for (var y = 0; y < list.length; y++) {
          dataStr += "['" + list[y] + "']";
          valStr += "['" + list[y] + "']";
        }
        eval("val=" + valStr);
        eval("data=" + dataStr);
      } else {
        list = [];
      }
      if (data instanceof Array && val instanceof Array) {
        var maxValue = Math.max(val.length, data.length);
        var delIndex = -1;
        var delLength = 0;
        for (var i = 0; i < maxValue; i++) {
          debugger;
          if (data[i] && val[i]) {
            list.push(i);
            this.setVal(mData, mVal, list);
            list.pop();
          } else if (!data[i] && val[i]) {
            debugger;
            var Vues = Vue;
            eval("Vues.set(" + dataStr + ",i," + valStr + "[i]);");
          } else if (data[i] && !val[i]) {
            if (delIndex == -1) {
              delIndex = i;
            }
            delLength = delLength + 1;
          }
        }
        if (delIndex != -1) {
          data.splice(delIndex, delLength);
        }
      } else if (typeof data == "object" && typeof val == "object") {
        for (var key in data) {
          list.push(key);
          this.setVal(mData, mVal, list);
          list.pop();
        }
      } else if (typeof val != "function" && typeof data != "function") {
        eval(dataStr + "=" + valStr);
      }
    },
    //全局props取值
    getProps(str) {
      if (this.$props[str]) {
        if (str == "input" && this.$props[str] instanceof FlyEntity) {
          return this.$props[str].infos;
        } else {
          return this.$props[str];
        }
      } else if (
        str != undefined &&
        this.$props.flyAction &&
        this.$props.flyAction instanceof FlyInterface &&
        this.$props.flyAction.infos[str]
      ) {
        if (
          str == "input" &&
          this.$props.flyAction.infos[str] instanceof FlyEntity
        ) {
          return this.$props.flyAction.infos[str].infos;
        } else {
          return this.$props.flyAction.infos[str];
        }
      } else if (str == undefined) {
        if (this.$props.flyAction instanceof FlyInterface) {
          return this.$props.flyAction.infos;
        } else {
          return this.$props;
        }
      }
    },
    //全局props赋值
    setProps(str, val) {
      if (this.$props[str]) {
        if (str == "input" && this.$props[str] instanceof FlyEntity) {
          this.setVal(this.$props[str].infos, val);
        } else {
          this.setVal(this.$props[str], val);
        }
      } else if (
        this.$props.flyAction &&
        this.$props.flyAction instanceof FlyInterface &&
        (this.$props.flyAction.infos[str] ||
          this.$props.flyAction.infos[str] === 0)
      ) {
        if (
          str == "input" &&
          this.$props.flyAction.infos[str] instanceof FlyEntity
        ) {
          this.setVal(this.$props.flyAction.infos[str].infos, val);
        } else if (
          typeof this.$props.flyAction.infos[str] == "string" ||
          typeof this.$props.flyAction.infos[str] == "number"
        ) {
          this.$props.flyAction.infos[str] = val;
        } else if (val == undefined) {
          if (this.$props.flyAction.infos[str] instanceof Array) {
            this.setVal(this.$props.flyAction.infos[str], []);
          } else if (typeof this.$props.flyAction.infos[str] == "object") {
            this.setVal(this.$props.flyAction.infos[str], {});
          }
        } else {
          this.setVal(this.$props.flyAction.infos[str], val);
        }
      }
    },
    //清空input参数
    clearObject(obj) {
      debugger;
      for (var i in obj) {
        if (obj[i] instanceof Array) {
          obj[i] = [];
        } else if (typeof obj[i] == "object") {
          this.clearObject(i);
        } else if (typeof obj[i] == "string") {
          obj[i] = "";
        } else if (typeof obj[i] == "number") {
          obj[i] = 0;
        }
      }
    },
    //发起ajax请求

    action() {
      var current = this;

      if (current.getProps("needPage")) {
        current.getProps("input")[
          current.getProps("currentName")
        ] = current.getProps("pageValue");
        current.getProps("input")[
          current.getProps("sizeName")
        ] = current.getProps("size");
      }

      //根据当前contentType修改数据格式
      if (
        current.getProps("contentType") &&
        current.getProps("contentType") == "application/json"
      ) {
        this._data.ajaxData = JSON.stringify(current.getProps("input"));
      } else {
        if (current.getProps("input") instanceof Array) {
          console.error("请设置contentType参数为application/json");
        }
        // var str = "";
        // if (current.getProps("input")) {
        //   for (var key in current.getProps("input")) {
        //     str += key + "=" + current.getProps("input")[key] + "&";
        //   }
        // }
        // if (str.length > 0) {
        //   str = str.substring(0, str.length - 1);
        // }
        debugger;
        this._data.ajaxData = current.getProps("input");
      }
      debugger;
      var ajaxObj = {
        url: current.getProps("url"),
        data: this._data.ajaxData,
        success: function(res) {
          if (res[current.getProps("statusPath")] == 200) {
            current.setProps("output", res[current.getProps("dataPath")]);
            if (current.getProps("needPage")) {
              if (
                current.getProps("pagesPath") &&
                current.getProps("pagesPath") != ""
              ) {
                current.setProps("pages", res[current.getProps("pagesPath")]);
              }
              if (
                current.getProps("totalPath") &&
                current.getProps("totalPath") != ""
              ) {
                current.setProps("total", res[current.getProps("totalPath")]);
              }
            }
          }
          // current.getProps("success") && current.getProps("success")(res);
          current.executeFunc("success", [res]);
          debugger;
          if (current.getProps("inputClear")) {
            current.clearObject(current.getProps("input"));
          }
        },
        error: function(res) {
          // current.getProps("error") && current.getProps("error")(res);
          current.executeFunc("error", [res]);
          if (current.getProps("inputClear")) {
            current.clearObject(current.getProps("input"));
          }
        },
        beforeSend: function(xhr) {
          return current.executeFunc("beforeSend", [xhr]);
        },
        dataFilter: function(data, type) {
          var res = current.executeFunc("dataFilter", [data, type]);
          return res;
        },
        complete: function(xhr, ts) {
          return current.executeFunc("complete", [xhr, ts]);
        }
      };

      var param = this.getProps();
      if (param != undefined && typeof param == "object") {
        for (var name in param) {
          if (
            param[name] != undefined &&
            contains(this._data.ajaxParam, name)
          ) {
            ajaxObj[name] = param[name];
          }
        }
      }

      $.ajax(ajaxObj);
    },
    /**
     * infos.customFunc是Object ，type为key。value是Array ，value的元素为Object
     * 每个元素的格式{
     *     index:number, 回调的顺序
     *     callback:function 回调的函数
     * }
     * @param type
     * @param paramList
     * @return {*}
     */
    executeFunc(type, paramList) {
      if (
        this.getProps("customFunc") &&
        this.getProps("customFunc")[type] &&
        this.getProps("customFunc")[type] instanceof Array
      ) {
        var tmp = {};
        for (var i = 0; i < this.getProps("customFunc")[type].length; i++) {
          for (
            var j = i + 1;
            j < this.getProps("customFunc")[type].length;
            j++
          ) {
            if (
              this.isNumber(this.getProps("customFunc")[type][i], "index") &&
              this.isNumber(this.getProps("customFunc")[type][j], "index") &&
              this.getProps("customFunc")[type][i]["index"] >
                this.getProps("customFunc")[type][j]["index"]
            ) {
              tmp = this.getProps("customFunc")[type][j];
              this.getProps("customFunc")[type][j] = this.getProps(
                "customFunc"
              )[type][i];
              this.getProps("customFunc")[type][i] = tmp;
            }
          }
        }
        var customContext = [];
        for (var k = 0; k < this.getProps("customFunc")[type].length; k++) {
          if (
            this.isFunction(this.getProps("customFunc")[type][k], "callback") &&
            this.isNumber(this.getProps("customFunc")[type][k], "index")
          ) {
            if (type == "success" || type == "error" || type == "beforeSend") {
              customContext.push({
                index: this.getProps("customFunc")[type][k]["index"],
                result: this.getProps("customFunc")[type][k]["callback"](
                  paramList[0],
                  customContext
                )
              });
            } else if (type == "dataFilter" || type == "complete") {
              customContext.push({
                index: this.getProps("customFunc")[type][k]["index"],
                result: this.getProps("customFunc")[type][k]["callback"](
                  paramList[0],
                  paramList[1],
                  customContext
                )
              });
            }
          }
        }
        if (customContext.length == 0) {
          if (type == "dataFilter") {
            return paramList[0];
          } else {
            return;
          }
        } else {
          return customContext[customContext.length - 1].result;
        }
      }
      if (type == "dataFilter") {
        return paramList[0];
      } else {
        return;
      }
    },
    isNumber(rootVar, childVar) {
      if (
        rootVar &&
        rootVar[childVar] != undefined &&
        !isNaN(rootVar[childVar])
      ) {
        return true;
      }
      return false;
    },
    isFunction(rootVar, childVar) {
      if (
        rootVar &&
        rootVar[childVar] &&
        rootVar[childVar] instanceof Function
      ) {
        return true;
      }
      return false;
    }
  },

  watch: {
    // //监听第几页，改变进行值修改
    // pageValue: function() {
    //   this.action();
    // },
    //监听第几页，改变进行值修改
    flyAction: {
      handler(obj) {
        debugger;
        var newValue = obj.infos;
        var oldValue = obj.beforeInfos;
        if (
          newValue &&
          oldValue &&
          (oldValue.executeSize != newValue.executeSize &&
            newValue.executeSize != 0)
        ) {
          //setPageValue,setSize,action三个函数中添加了下面的方法。故这里去掉，以免数据初始化也会造成请求
          obj.updateBeforeInfos();
          this.action();
        }
      },
      deep: true
    }
  }
};
</script>
