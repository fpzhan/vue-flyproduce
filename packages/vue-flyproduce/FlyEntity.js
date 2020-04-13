(function() {
  var FlyEntity = function(data) {
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
    this.infos = data;
    this.InitInfos = function(obj) {
      if (isObject(obj)) {
        for (var key in obj) {
          this.infos[key] = obj[key];
        }
      }
      return this;
    };
    this.copy = function(obj) {
      return JSON.parse(JSON.stringify(obj));
    };
    this.List = function(num) {
      if (typeof num == "number") {
        var list = [];
        while (num > 0) {
          list.push(this.copy(this.infos));
          num = num - 1;
        }
        this.infos = list;
      } else if (num instanceof Array) {
        this.infos = num;
      } else {
        // this.infos = [this.copy(this.infos)];
        this.infos=[]
      }

      return this;
    };

    this.instance = function() {
      return this.infos;
    };
  };
  window.FlyEntity = FlyEntity;
})();
