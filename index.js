var type = require('type');

var arrange = module.exports = {
  move: function (args) {
    (function (target) {
      if (type(target).isString()) {
        return args.sel(target).first();
      } else if (target instanceof Sel) {
        return target.first();
      } else return target;
    })(args.to).appendChild(args.node);
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
