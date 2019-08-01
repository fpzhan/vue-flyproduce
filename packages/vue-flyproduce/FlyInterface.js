(function() {
  var FlyInterface = function(obj) {
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

    if (isObject(obj)) {
      this.infos = obj;
    } else {
      this.infos = {};
    }
    this.beforeInfos = JSON.parse(JSON.stringify(this.infos));

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
          this.infos[key] = data[key];
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
    this.flyChangePage = function(page) {
      this.infos.pageValue = page;
    };
    this.getPage = function() {
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
  };
  window.FlyInterface = FlyInterface;
})();
