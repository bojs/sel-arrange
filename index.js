var sel = require('sel');

module.exports = arrange;

var arrange = function (selector) {
  return new Arrange(selector);
};

var Arrange = function (selector) {
  this.nodes = toArray(sel(selector));
};

Arrange.prototype.goto = function (id) {
  var target = sel(id);
  this.nodes.forEach(function (node) {
    target.appendChild(node);
  });
  return this;
};

Arrange.prototype.del = function () {
  this.nodes.forEach(function (node) {
    node.parentNode.removeChild(node);
  });
  return this;
};

Dal.prototype.clear = function () {
  this.nodes.forEach(function (node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  });
  return this;
};

Arrange.prototype.copy = function () {
  var copies = [];
  this.nodes.forEach(function (node) {
    copies.push(node.cloneNode(false));
  });
  this.nodes = copies;
  return this;
};

Arrange.prototype.clone = function () {
  var clones = [];
  this.nodes.forEach(function (node) {
    clones.push(node.cloneNode(true));
  });
  this.nodes = clones;
  return this;
};

var toArray = function (obj) {
  return obj.length ? Array.prototype.slice.call(obj) : [].concat(obj);
};
