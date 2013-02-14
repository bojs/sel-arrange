var arrange = module.exports = {
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
  }
};
