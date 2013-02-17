var type = require('type');

var arrange = module.exports = {
  move: function (args) {
    args.to.first().appendChild(args.node);
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
