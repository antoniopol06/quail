var Case = require('Case');
var HeadingLevelComponent = require('HeadingLevelComponent');
var HeaderH1 = function (quail, test) {
  HeadingLevelComponent(quail, test, Case, {
    headingLevel: 1
  });
};
module.exports = HeaderH1;
