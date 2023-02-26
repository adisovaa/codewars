
var query = function () {
    var self = {};
  
    var tables = [];
    var selector = null;
  
    var whereClauses = [];
    var havingClauses = [];
  
    var order = [];
    var group = [];
  
    var selectorAll = function (row) {
      return row;
    };
  
    self.select = function (e) {
      if (selector != null) throw new Error("Duplicate SELECT");
      selector = e || false;
      return self;
    };
  
    self.from = function () {
      if (tables.length > 0) throw new Error("Duplicate FROM");
      tables = Array.from(arguments);
      return self;
    };
  
    self.where = function () {
      whereClauses.push(Array.from(arguments));
      return self;
    };
  
    self.having = function () {
      havingClauses.push(Array.from(arguments));
      return self;
    };
  
    self.orderBy = function () {
      if (order.length > 0) throw new Error("Duplicate ORDERBY");
      order = Array.from(arguments);
      return self;
    };
  
    self.groupBy = function () {
      if (group.length > 0) throw new Error("Duplicate GROUPBY");
      group = Array.from(arguments);
      return self;
    };
  
    self.execute = function () {
      var tmpdata = [];
      var gdata = [];
  
      var data = [];
      var t = 0;
  
      // JOIN
  
      if (tables.length > 1) {
        tables.forEach(function () {
          data.push([]);
        });
  
        tables[0].forEach(function (row, i) {
          for (t = 0; t < tables.length; t++) {
            data[t].push(tables[t][i]);
          }
        });
  
        tmpdata = [];
        (function traverseTable(D, t) {
          if (D.length === 0) {
            tmpdata.push(t.slice(0));
          } else {
            for (var i = 0; i < D[0].length; i++) {
              t.push(D[0][i]);
              traverseTable(D.slice(1), t);
              t.splice(-1, 1);
            }
          }
        })(data, []);
  
        data = [];
        tmpdata.forEach(function (row, i) {
          if (
            whereClauses.every(function (orWhereClauses) {
              return orWhereClauses.some(function (whereClause) {
                return whereClause(row);
              });
            })
          ) {
            data.push(row);
          }
        });
      } else if (tables.length === 1) {
        tables[0].forEach(function (row, i) {
          if (
            whereClauses.every(function (orWhereClauses) {
              return orWhereClauses.some(function (whereClause) {
                return whereClause(row);
              });
            })
          ) {
            data.push(row);
          }
        });
      } else {
        data = [];
      }
  
      // Group
  
      if (group.length > 0) {
        var T = {};
  
        data.forEach(function (row) {
          var t = T;
          group.forEach(function (groupCallback) {
            var k = groupCallback(row);
            t[k] = t[k] || {};
            t = t[k];
          });
          t._data = t._data || [];
          t._data.push(row);
        });
  
        (function traverse(node, R) {
          if (node._data != null) {
            node._data.forEach(function (e) {
              R.push(e);
            });
          } else {
            for (var k in node) {
              k = /\d+/.test(k) ? Number(k) : k;
              var row = [k, []];
              traverse(node[k], row[1]);
              R.push(row);
            }
          }
        })(T, gdata);
  
        gdata.forEach(function (grow) {
          if (
            havingClauses.every(function (orHavingClauses) {
              return orHavingClauses.some(function (havingClause) {
                return havingClause(grow);
              });
            })
          ) {
            tmpdata.push(grow);
          }
        });
        data = tmpdata;
      }
  
      order.forEach(function (orderCallback) {
        data = data.sort(orderCallback);
      });
  
      return data.map(selector || selectorAll);
    };
  
    return self;
  };