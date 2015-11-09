var Case = require('Case');
var TableAxisHasCorrespondingId = function (quail, test) {
  test.get('$scope').find('[axis]').each(function () {
    var _case = Case({
      element: this
    });
    test.add(_case);
    if ($(this).parents('table').first().find('th#' + $(this).attr('axis')).length === 0) {
      _case.set({
        status: 'failed'
      });
    }
    else {
      _case.set({
        status: 'passed'
      });
    }
  });
};
module.exports = TableAxisHasCorrespondingId;
