// AppName Object
var AppName = {

  // Init Function
  init: function() {
    this.getData();
  },

  getData: function() {
    var colorOne = '#0a2029',
        colorTwo = '#33a1cc';

    d3.json('experience.json', function(err, experience) {
      var data = experience.experience;

      data.forEach(function(d) {
        d.months = months(d.months);
      });

      var display = d3.select('.js-display');

      var visual = d3.chart.visual()
        .data(data)
        .colorOne(colorOne)
        .colorTwo(colorTwo)
      visual(display);

      var tabletVisual = d3.chart.mobileVisual()
        .data(data)
        .klass('tablet_visual')
        .width(500)
        .colorOne(colorOne)
        .colorTwo(colorTwo)
      tabletVisual(display);

      var mobileVisual = d3.chart.mobileVisual()
        .data(data)
        .colorOne(colorOne)
        .colorTwo(colorTwo)
      mobileVisual(display);
    });
  }
};

// Ready Function
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(AppName.init());
