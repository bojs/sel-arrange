module.exports = arrange;

var arrange = {
  moveTo: function (args) {
    args.sel(args.id).appendChild(args.node);
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
  },
  copy: function (args) {
    args.nodes[args.index] = node.cloneNode(false);
  },
  clone: function (args) {
    args.nodes[args.index] = node.cloneNode(true);
  }
};
