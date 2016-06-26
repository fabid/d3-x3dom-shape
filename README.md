# d3-x3dom-shape

[x3dom](http://www.x3dom.org/) version of [d3-shape](https://github.com/d3/d3-shape). Create 3d primitive shapes in x3dom such as lines and surfaces.


[![Build Status](https://travis-ci.org/fabid/d3-x3dom-shapes.svg?branch=master)](https://travis-ci.org/fabid/d3-x3dom-shapes)

## Installing

If you use NPM, `npm install d3-x3dom-shape`. Otherwise, download the [latest release](https://github.com/d3/d3-x3dom-shapes/releases/latest).

## Demo

[Demo on blockbuilder](http://blockbuilder.org/fabid/a2be7d647d0f8b820e5e42e16942c471)

## API Reference


### Utilities


<a href="#makeSolid" name="makeSolid">#</a> <b>makeSolid</b>(selection, [color])

Append an appearance and material to the given `selection` with a `diffuseColor` set to `color` which default to black if not provided.


### Line

The line generator produces a [polyline](https://en.wikipedia.org/wiki/Polygonal_chain) in 3d space.

<a href="#line" name="line">#</a> <b>line</b>()

Constructs a new 3d line generator with the default settings. The line is created by extruding a cylinder going through the data points, the size of the line at each point can be specified.


<a name="_line" href="#_line">#</a> <i>line</i>(<i>data</i>)

Generates the line `spine` for the given array of *data*.

```js
scene.append('shape')
  .datum(data)
  .call(makeSolid, 'red')
  .append('Extrusion')
  .attr('crossSection', circleSection)
  .attr('spine', line);
```

<a name="line_scale" href="#line_scale">#</a> <i>line</i>.<b>scale</b>(<i>data</i>)

Generates the line `scale` for the given array of *data*.

```js
scene.append('shape')
  .datum(data)
  .call(makeSolid, 'red')
  .append('Extrusion')
  .attr('crossSection', line.circleSection)
  .attr('scale', lineX.scale)
  .attr('spine', line);
```

<a name="line_x" href="#line_x">#</a> <i>line</i>.<b>x</b>([<i>x</i>])

If *x* is specified, sets the x accessor to the specified function or number and returns this line generator. If *x* is not specified, returns the current x accessor, which defaults to:

```js
function x(d) {
  return d[0];
}
```

When a line is [generated](#_line), the x accessor will be invoked for each [defined](#line_defined) element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. The default x accessor assumes that the input data are three-element arrays of numbers. If your data are in a different format, or if you wish to transform the data before rendering, then you should specify a custom accessor.


<a name="line_y" href="#line_y">#</a> <i>line</i>.<b>y</b>([<i>y</i>])

If *y* is specified, sets the y accessor to the specified function or number and returns this line generator. If *y* is not specified, returns the current y accessor, which defaults to:

```js
function y(d) {
  return d[1];
}
```

When a line is [generated](#_line), the y accessor will be invoked for each [defined](#line_defined) element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. The default y accessor assumes that the input data are three-element arrays of numbers. See [*line*.x](#line_x) for more information.

<a name="line_z" href="#line_z">#</a> <i>line</i>.<b>z</b>([<i>z</i>])

If *z* is specified, sets the z accessor to the specified function or number and returns this line generator. If *z* is not specified, returns the current z accessor, which defaults to:

```js
function z(d) {
  return d[1];
}
```

When a line is [generated](#_line), the z accessor will be invoked for each [defined](#line_defined) element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. The default z accessor assumes that the input data are three-element arrays of numbers. See [*line*.x](#line_x) for more information.

<a name="line_s" href="#line_s">#</a> <i>line</i>.<b>s</b>([<i>s</i>])

If *s* is specified, sets the s accessor to the specified function or number and returns this line generator. If *s* is not specified, returns the current s accessor, which defaults to:

```js
function s(d) {
  return [1, 1];
}
```

The s accessor specified the size of the line at the data point d.

When a line is [generated](#_line), the s accessor will be invoked for each [defined](#line_defined) element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. The default s accessor assumes that the input data are three-element arrays of numbers. See [*line*.x](#line_x) for more information.

<a name="line_circleSection" href="#line_circleSection">#</a> <i>line</i>.<b>circleSection</b>

A circle `crossSection` for the x3dom extrusion.

### Surface

The surface generator produces a quadrilateral [polyhderal surface](https://en.wikipedia.org/wiki/Polyhedron) in 3d space. In particular, it is made for for quadritlateral [polyhedral terrain](https://en.wikipedia.org/wiki/Polyhedral_terrain), which is equivalent to plotting a function of the form `z= f(x, y)`.

<a href="#surface" name="surface">#</a> <b>surface</b>()

Constructs a new 3d surface generator with the default settings. The surface is created by extruding a cylinder going through the data points, the size of the surface at each point can be specified.

```js
scene.selectAll('.surface')
  .data(data);
  .enter()
  .append('shape')
  .attr('class', 'surface')
  .append('indexedfaceset')
  .attr('coordIndex', surfac)
  .append("coordinate")
  .attr('point', surface.coordinates);


d3.selectAll('indexedFaceSet')
  .append('color')
  .attr('color', surface.color);
```

<a name="_surface" href="#_surface">#</a> <i>surface</i>(<i>data</i>)

Generates the surface `coordIndex` for the given 2d array of *data*.


<a name="surface_coordinates" href="#surface_coordinates">#</a> <i>surface</i>.<b>coordinates</b>(<i>data</i>)

Generates the surface `coordinates` for the given array of *data*.


<a name="surface_color" href="#surface_color">#</a> <i>surface</i>.<b>color</b>(<i>data</i>)

Generates the surface `color` for the given array of *data*.


<a name="surface_x" href="#surface_x">#</a> <i>surface</i>.<b>x</b>([<i>x</i>])

If *x* is specified, sets the x accessor to the specified function or number and returns this surface generator. If *x* is not specified, returns the current x accessor, which defaults to:

```js
function x(d) {
  return d[0];
}
```

When a surface is [generated](#_surface), the x accessor will be invoked for each [defined](#surface_defined) element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. The default x accessor assumes that the input data are three-element arrays of numbers. If your data are in a different format, or if you wish to transform the data before rendering, then you should specify a custom accessor.


<a name="surface_y" href="#surface_y">#</a> <i>surface</i>.<b>y</b>([<i>y</i>])

If *y* is specified, sets the y accessor to the specified function or number and returns this surface generator. If *y* is not specified, returns the current y accessor, which defaults to:

```js
function y(d) {
  return d[1];
}
```

When a surface is [generated](#_surface), the y accessor will be invoked for each [defined](#surface_defined) element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. The default y accessor assumes that the input data are three-element arrays of numbers. See [*surface*.x](#surface_x) for more information.

<a name="surface_z" href="#surface_z">#</a> <i>surface</i>.<b>z</b>([<i>z</i>])

If *z* is specified, sets the z accessor to the specified function or number and returns this surface generator. If *z* is not specified, returns the current z accessor, which defaults to:

```js
function z(d) {
  return d[1];
}
```

When a surface is [generated](#_surface), the z accessor will be invoked for each [defined](#surface_defined) element in the input data array, being passed the element `d`, the index `i`, and the array `data` as three arguments. The default z accessor assumes that the input data are three-element arrays of numbers. See [*surface*.x](#surface_x) for more information.

<a name="surface_color" href="#surface_color">#</a> <i>surface</i>.<b>color</b>([<i>color</i>])

If *color* is specified, sets the s accessor to the specified function or number and returns this surface generator. If *s* is not specified, returns the current s accessor, which defaults to:

```js
function color(d) {
  return 'white';
}
```

