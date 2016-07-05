<my-work>
  <h2>Work</h2>

  <work-item each={ items }
    company={ company }
    location={ location }
    dates={ dates }
    jobtitle={ jobtitle }
    points={ points }
  ></work-item>

  <script>
    this.items = [
      {
        company: 'FINE',
        location: 'Portland, OR',
        dates: 'November 2013 to July 2016',
        jobtitle: 'Front End Web Developer',
        points: [
          'Front End Developer and Tech Lead for numerous projects. Crafted templates and views, built CSS/Sass from the ground up, scaffolded models, wired controllers, and wrote all JavaScript from start to finish',
          'Sole developer on several projects. Full stack Ruby on Rails development.',
          'Initiated and crafted front end standards for company.',
          'Developed and contributed to company\'s open source projects.',
          'Built internal tools and processes to maximize personal and team efficiency and increase developer happiness.'
        ]
      }
    ];
  </script>
</my-work>
