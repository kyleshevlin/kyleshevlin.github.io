<work-item>
  <div class="work-item">
    <p>
      <strong>{ opts.company }</strong> - { opts.location } - { opts.dates }</br>
      <strong>{ opts.jobtitle }</strong>
    </p>

    <ul>
      <li each={point, i in opts.points}>{ point }</li>
    </ul>
  </div>
</work-item>
