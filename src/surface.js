import {constant} from './constant.js';

export function surface() {
  var x = function(d) { return d[0]; },
      y = function(d) { return d[1]; },
      z = function(d) { return d[2]; },
      color = constant('white');
  
  function surface(data) {
    var ny = data.length;
    var nx = data[0].length;

    var coordIndex = Array.apply(0, Array(ny - 1)).map(function(_, j) {
      return Array.apply(0, Array(nx - 1)).map(function(_, i) {
        var start = i + j * nx;
        return [start, start + nx, start + nx + 1, start + 1, start, -1];
      });
    });
      
    var coordIndexBack = Array.apply(0, Array(ny - 1)).map(function(_, j) {
      return Array.apply(0, Array(nx - 1)).map(function(_, i) {
        var start = i + j * nx;
        return [start, start + 1, start + nx + 1, start + nx, start, -1];
      });
    });
  
    return array2dToString(coordIndex.concat(coordIndexBack));
  }

  surface.coordinates = function(data) {
   var coordinates = data.map(function(X, i) { return X.map(function(d, j) {
     return [x(d, i, j), y(d, i, j), z(d, i, j)];
   })})
   return array2dToString(coordinates);
  }
      
  surface.colors = function(data) {
    var colors = data.map(function(X, i) { return X.map(function(d, j) {
      var col = color(d, i, j);
      return '' + Math.round(col.r/2.55)/100 +' ' + Math.round(col.g/2.55)/100 + ' ' + Math.round(col.b/2.55)/100;
    })})
    return array2dToString(colors);
  }

  surface.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : constant(+_), surface) : x;
  };

  surface.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : constant(+_), surface) : y;
  };

  surface.z = function(_) {
    return arguments.length ? (z = typeof _ === "function" ? _ : constant(+_), surface) : z;
  };

  surface.color = function(_) {
    return arguments.length ? (color = typeof _ === "function" ? _ : constant(+_), surface) : color;
  };
  return surface;
}

function array2dToString(arr) {
  return arr.reduce(function(a, b) {return a.concat(b);}, [])
     .reduce(function(a, b) {return a.concat(b);}, [])
     .join(' ');
}
