riot.tag2('education-item', '<div class="education-item"> <strong>{opts.degree}</strong> <span if="{teaser}">{teaser}</span><br> {school} - {city} - {year} </div>', '', '', function(opts) {
});

riot.tag2('my-education', '<h2>Education</h2> <education-item each="{items}" degree="{degree}" teaser="{teaser}" school="{school}" city="{city}" year="{year}"></education-item>', '', '', function(opts) {
    this.items = [
      {
        degree: 'MA in Theology',
        teaser: '(Yes, you\'re reading that correctly. I\'m a theologian turned programmer)',
        school: 'Fuller Theological Seminary',
        city: 'Pasadena, CA',
        year: 2012
      },
      {
        degree: 'BA in Philosphy & Mathematics',
        school: 'Lenoir-Rhyne University',
        city: 'Hickory, NC',
        year: 2007
      }
    ]
});

riot.tag2('my-overview', '<h2>Overview</h2> <p> Front end web developer with full stack skills. 4 years coding experience; 2.5 years digital agency experience. Expert in Sass, fluent in Ruby on Rails. JavaScript MV* curious with about a year’s experience with Ember frontends with Rails API backends. Recently began learning D3.js and data visualization. Endlessly curious and ready for the next challenge. </p>', '', '', function(opts) {
});

riot.tag2('my-projects', '<h2>Noteworthy Repos and OS Projects</h2> <div class="repos"> <repo-item each="{items}" title="{title}" repopath="{repopath}" desc="{desc}" demopath="{demopath}"></repo-item> </div>', 'my-projects h3,[riot-tag="my-projects"] h3,[data-is="my-projects"] h3,my-projects p,[riot-tag="my-projects"] p,[data-is="my-projects"] p{ margin-bottom: 0; } my-projects p + p,[riot-tag="my-projects"] p + p,[data-is="my-projects"] p + p{ margin-top: 1.8rem; }', '', function(opts) {
    this.items = [
      {
        title: 'Condo',
        repopath: 'https://github.com/kyleshevlin/condo',
        desc: 'A micro Sass grid library.'
      },
      {
        title: 'Ripsum',
        repopath: 'https://github.com/kyleshevlin/ripsum',
        desc: 'Ruby gem for generating random amounts of lorem ipsum with each page load.',
        demopath: '/ripsum'
      },
      {
        title: 'Shevy',
        repopath: 'https://github.com/kyleshevlin/shevy',
        desc: 'A typography/vertical rhythm Sass library.',
        demopath: '/shevy'
      },
      {
        title: 'Resormalize',
        repopath: 'https://github.com/kyleshevlin/resormalize',
        desc: 'A custom combination of reset.css and normalize.css'
      },
      {
        title: 'Susy Snippets',
        repopath: 'https://github.com/kyleshevlin/susy-snippets',
        desc: 'Sublime Text package of snippets for Susy 2'
      }
    ];
});

riot.tag2('my-sites', '<section> <h2>Noteworthy Wesbites I Have Built</h2> <div class="sites"> <site-item each="{items}" title="{title}" path="{path}" award="{award}"></site-item> </div> </section>', '', '', function(opts) {
    this.items = [
      { title: 'TA Associates', path: 'http://ta.com' },
      { title: 'Stag\'s Leap Wine Cellar', path: 'http://cask23.com', award: true },
      { title: 'Frazier Healthcare', path: 'http://frazierhealthcare.com' },
      { title: 'Motto Wines', path: 'http://mottowines.com' },
      { title: 'Darioush', path: 'http://darioush.com', award: true },
      { title: 'Anchor Brewing', path: 'http://anchorbrewing.com' }
    ];
});

riot.tag2('my-skills', '<h2>Skills</h2> <ul> <li each="{skill, i in items}">{skill}</li> </ul>', '', '', function(opts) {
    this.items = [
      'High level of mastery in HTML (and multiple templating languages: Erb, Slim, Handlebars, Twig), CSS (highly skilled with Sass), and JavaScript.',
      'Develops front end systems that are mobile-first, fully responsive, cross-browser supporting and well commented, rigorously following styleguides leaving behind a clean code base for anyone else who might work on the project.',
      'Full stack Ruby on Rails developer, capable of developing and implementing data models and CMSs.',
      'Excellent communicator and teacher. Able to facilitate dialogue across disciplines as well as effectively describe and educate (when necessary) the pain points and challenges of a particular development direction or benefits and opportunities of another.'
    ];
});

riot.tag2('my-social', '<ul> <li each="{items}">{title}: <a href="{path}">{path}</a></li> </ul>', 'my-social ul,[riot-tag="my-social"] ul,[data-is="my-social"] ul{ list-style: none; }', '', function(opts) {
    this.items = [
      { title: 'Github', path: 'https://github.com/kyleshevlin' },
      { title: 'LinkedIn', path: 'https://www.linkedin.com/in/kyleshevlin' }
    ]
});

riot.tag2('my-work', '<h2>Work</h2> <p> <strong>FINE</strong> - Portland, OR - November 2013 to Present<br> Front End Web Developer </p> <ul> <li> Front end engineer and tech lead for numerous projects, all templating, Sass and JavaScript from start to finish </li> <li> Sole Full Stack Ruby on Rails developer for several projects </li> <li> Developed, contributed to, and initiated front end development standards, guidelines and best practices for development team </li> <li> Developed and contributed to internal tools for development team (Private and OS libraries and software) </li> </ul>', '', '', function(opts) {
    this.items = [
      {
        company: 'FINE',
        city: 'Portland, OR',
        dates: 'November 2013 to Present',
        jobtitle: 'Front End Web Developer',
        points: [
          'Front end engineer and tech lead for numerous projects, all templating, Sass and JavaScript from start to finish',
          'Sole Full Stack Ruby on Rails developer for several projects',
          'Developed, contributed to, and initiated front end development standards, guidelines and best practices for development team',
          'Developed and contributed to internal tools for development team (Private and OS libraries and software)'
        ]
      }
    ];
});
riot.tag2('repo-item', '<div class="repo-item"> <h3><a href="{opts.repopath}">{opts.title}</a></h3> <p>{opts.desc}</p> <a if="{opts.demopath}" href="{opts.demopath}">Demo</a> </div>', '', '', function(opts) {
});

riot.tag2('site-item', '<div class="site-item"> <h3 class="site-item-heading"> <a href="{opts.path}">{opts.title}</a> </h3> <span if="{opts.award}">&mdash; CommArts Award Winner</span> </div>', '', '', function(opts) {
});
