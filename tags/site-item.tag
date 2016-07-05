<site-item>
  <div class={ this.siteItemClass }>
    <h3 class="site-item-heading">
      <span class="site-item-heading-span" show={ opts.comingsoon }>{ opts.title }</span>
      <a class="site-item-heading-link" href={ opts.path } hide={ opts.comingsoon }>{ opts.title }</a>
    </h3>
    <span class="site-item-coming_soon" if={ opts.comingsoon }>&mdash; Coming Soon</span>
    <span class="site-item-award" if={ opts.award }>&mdash; CommArts Award Winner</span>
  </div>

  <script>
    this.siteItemClass = opts.comingsoon ? 'site-item is-coming-soon' : 'site-item'
  </script>
</site-item>
