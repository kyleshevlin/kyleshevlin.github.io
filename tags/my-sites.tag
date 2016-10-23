<my-sites>
  <section>
    <h2>Noteworthy Wesbites I Have Built</h2>
    <div class="sites">
      <site-item each={ items }
        title={ title }
        path={ path }
        award={ award }
        comingsoon={ comingsoon }
      ></site-item>
    </div>
  </section>

  <script>
    this.items = [
      { title: 'McKibbon Hotels', path: 'http://www.mckibbon.com/' },
      { title: 'Global Gourmet', path: 'http://ggcatering.com', award: true},
      { title: 'TA Associates', path: 'http://ta.com' },
      { title: 'Stag\'s Leap Wine Cellar', path: 'http://cask23.com', award: true },
      { title: 'Frazier Healthcare', path: 'http://frazierhealthcare.com' },
      { title: 'Eroica Wine', path: 'http://www.eroicawine.com/'},
      { title: 'Motto Wines', path: 'http://mottowines.com' },
      { title: 'Darioush', path: 'http://darioush.com', award: true },
      { title: 'Anchor Brewing', path: 'http://anchorbrewing.com' }
    ];
  </script>
</my-sites>
