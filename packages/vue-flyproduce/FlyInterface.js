(function() {
  var FlyInterface = function(obj) {
    if (isObject(obj)) {
      this.infos = obj;
      this.infos.executeSize = 0;
    } else {
      this.infos = { executeSize: 0 };
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
      this.updateBeforeInfos();
      this.infos.executeSize = this.infos.executeSize + 1;

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
            this.infos[key] = data[key];
          }
        }
      }
      return this;
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
      this.updateBeforeInfos();
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
      this.updateBeforeInfos();
      this.infos.size = size;
    };
  };
  window.FlyInterface = FlyInterface;
})();
