(function() {
  var filter;

  filter = require("../../core/methods/filter.coffee");

  module.exports = {
    accepted: [false, Array, Function, Object, String],
    mute: filter(true),
    solo: filter(true),
    value: "keywords"
  };

}).call(this);

//# sourceMappingURL=../../../../../_sourcemaps/vendor/d3plus/src/form/methods/keywords.js.map