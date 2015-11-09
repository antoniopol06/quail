var Case = require('Case');
var TableLayoutHasNoSummary = function (quail, test) {
  test.get('$scope').each(function () {
    var $local = $(this);
    $local.find('table[summary]').each(function () {
      var _case = test.add(Case({
        element: this
      }));
      if (!quail.isDataTable($(this)) && !quail.isUnreadable($(this).attr('summary'))) {
        _case.set({status: 'failed'});
      }
      else {
        _case.set({status: 'passed'});
      }
    });
  });
};
module.exports = TableLayoutHasNoSummary;