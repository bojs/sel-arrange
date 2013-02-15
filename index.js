var type = require('type');

var arrange = module.exports = {
  move: function (args) {
    var to = args.to;
    (type(to).isString() ? args.sel(to) : to).appendChild(args.node);
  },
  del: function (args) {
    var node = args.node;
    node.parentNode.removeChild(node);
  },
  clear: function (args) {
    var node = args.node;
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }
};
