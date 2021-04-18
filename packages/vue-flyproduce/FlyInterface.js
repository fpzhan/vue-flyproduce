(function() {
  var FlyInterface = function(obj) {
    var ajaxFuncName = [
      "success",
      "error",
      "beforeSend",
      "dataFilter",
      "complete"
    ];
    if (isObject(obj)) {
      this.infos = obj;
      this.infos.executeSize = 0;
    } else {
      this.infos = { executeSize: 0 };
    }

    function contains(a, obj) {
      var i = a.length;
      while (i--) {
        if (a[i] === obj) {
          return true;
        }
      }
      return false;
    }

    function isObject(data) {
      if (data instanceof Array) {
        return false;
      }
      if (typeof data == "object") {
        return true;
      } else {
        return false;
      }
    }

    this.beforeInfos = undefined;

    this.action = function() {
      if (
        this.infos.async == false &&
        this.syncAction &&
        typeof this.syncAction == "function"
      ) {
        this.syncAction();
      } else {
        this.updateBeforeInfos();
        this.infos.executeSize = this.infos.executeSize + 1;
      }
    };

    this.updateBeforeInfos = function() {
      this.beforeInfos = JSON.parse(JSON.stringify(this.infos));
    };

    this.setData = function(data) {
      this.infos = data;
      return this;
    };

    this.getUrl = function() {
      return this.infos.url;
    };

    this.overrideBy = function(data) {
      debugger;
      if (isObject(data)) {
        for (var key in data) {
          if (data[key] != undefined) {
            if (contains(ajaxFuncName, key)) {
              if (!this.infos.customFunc) {
                this.infos.customFunc = {};
              }
              if (
                !this.infos.customFunc[key] ||
                !(this.infos.customFunc[key] instanceof Array)
              ) {
                this.infos.customFunc[key] = [];
              }
              this.infos.customFunc[key].push({
                index: 0,
                callback: data[key]
              });
            } else {
              this.infos[key] = data[key];
            }
          }
        }
      }
      return this;
    };

    this.appendFuncs = function(list) {
      for (var i in list) {
        this.appendFunc(list[i]["type"], list[i]["index"], list[i]["callback"]);
      }
    };

    this.appendFunc = function(type, index, func) {
      if (type && index && func) {
        if (!this.infos.customFunc) {
          this.infos.customFunc = {};
        }
        if (
          !this.infos.customFunc[type] ||
          !(this.infos.customFunc[type] instanceof Array)
        ) {
          this.infos.customFunc[type] = [];
        }
        this.infos.customFunc[type].push({ index: index, callback: func });
      } else {
        console.warn(
          "flyproduce 中appendFunc函数必须传入type，index，func才生效！"
        );
      }
    };

    this.setInput = function(data) {
      this.infos.input = data;
      return this;
    };
    this.setOutput = function(data) {
      this.infos.output = data;
      return this;
    };

    this.setSubmitId = function(str) {
      this.infos.submitId = str;
    };
    this.setPageValue = function(page) {
      this.infos.pageValue = page;
    };
    this.getPageValue = function() {
      debugger;
      return this.infos.pageValue;
    };

    this.getTotal = function() {
      debugger;
      return this.infos.total;
    };

    this.getSize = function() {
      return this.infos.size;
    };
    this.setSize = function(size) {
      this.infos.size = size;
    };
  };
  window.FlyInterface = FlyInterface;
})();
