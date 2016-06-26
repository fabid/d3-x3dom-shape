var tape = require("tape"),
    scale = require("d3-scale"),
    x3domShape = require("../");

tape("x3domShape.line has the expected defaults.", function(test) {
  var line = x3domShape.line();
  var data = [
    [0, 0, 1],
    [0, 1, 2]
    [1, 0, 4],
    [1, 1, 3]
  ];
  test.equal(line.x()([0, 1, 2]), 0);
  test.equal(line.y()([0, 1, 2]), 1);
  test.equal(line.z()([0, 1, 2]), 2);
  test.end();
});

tape("x3domShape.surface has the expected defaults.", function(test) {
  var surface = x3domShape.surface();
  var data = [
    [
     [0, 0, 1],
     [0, 1, 2]
    ],
    [
      [1, 0, 4],
      [1, 1, 3]
    ]
  ];
  test.equal(surface.x()([0, 1, 2]), 0);
  test.equal(surface.y()([0, 1, 2]), 1);
  test.equal(surface.z()([0, 1, 2]), 2);
  test.equal(surface.coordinates(data).length, 23);
  test.end();
});


