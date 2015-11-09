'use strict';

var Case = require('Case');
var TableNotUsedForLayout = function TableNotUsedForLayout(quail, test) {
  test.get('$scope').find('table').each(function () {
    if (!quail.isDataTable($(this))) {
      test.add(Case({
        element: this,
        status: 'failed'
      }));
    } else {
      test.add(Case({
        element: this,
        status: 'passed'
      }));
    }
  });
};
module.exports = TableNotUsedForLayout;