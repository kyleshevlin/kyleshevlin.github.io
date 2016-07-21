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

riot.tag2('my-overview', '<h2>Overview</h2> <p> Expert front-end developer with full stack chops. 4 years coding experience; 3 years client agency experience. Expert in Sass, fluent in Ruby on Rails and Ember. Experienced in building and consuming RESTful APIs. Experienced in building data visualizations with d3.js. </p> <blockquote> I am endlessly curious and always ready for a new challenge. </blockquote> <p> Specifically, I would like to become a front-end engineer working with APIs and a JavaScript MV* (especially if it\'s Ember). I would like to work on a great product, especially if that product is a helpful tool. I love to build tools, whether it\'s for myself, my team, or my organization. </p>', '', '', function(opts) {
});

riot.tag2('my-projects', '<h2>Noteworthy Repos</h2> <div class="repos"> <repo-item each="{my_projects}" title="{title}" repopath="{repopath}" desc="{desc}" demopath="{demopath}"></repo-item> </div> <h2>Open Source Projects I Contribute To</h2> <div class="repos"> <repo-item each="{os_projects}" title="{title}" repopath="{repopath}" desc="{desc}"></repo-item> </div>', 'my-projects h3,[riot-tag="my-projects"] h3,[data-is="my-projects"] h3,my-projects p,[riot-tag="my-projects"] p,[data-is="my-projects"] p{ margin-bottom: 0; } my-projects p + p,[riot-tag="my-projects"] p + p,[data-is="my-projects"] p + p{ margin-top: 1.8rem; }', '', function(opts) {
    this.my_projects = [
      {
        title: 'Shevy',
        repopath: 'https://github.com/kyleshevlin/shevy',
        desc: 'A typography/vertical rhythm Sass library.',
        demopath: '/shevy'
      },
      {
        title: 'Matchbox',
        repopath: 'https://github.com/kyleshevlin/matchbox',
        desc: 'A vanilla JavaScript plugin for... well... matching the height of boxes.'
      },
      {
        title: 'Componentize',
        repopath: 'https://github.com/kyleshevlin/componentize',
        desc: "Rails generator for inline and block components; similar to Ember-CLI's component generator"
      },
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

    this.os_projects = [
      {
        title: 'ShipShapeCode / Ember-3D-Nav',
        repopath: 'https://github.com/shipshapecode/ember-3d-nav',
        desc: 'Ember addon for a simple, yet configurable, 3d navigation'
      },
      {
        title: 'Rails API / Active Model Serializers',
        repopath: 'https://github.com/rails-api/active_model_serializers',
        desc: 'ActiveModel::Serializer implementation and Rails hooks'
      },
      {
        title: 'WeAreFINE / FAE',
        repopath: 'https://github.com/wearefine/fae',
        desc: 'A flexible CMS for Rails'
      },
      {
        title: 'WeAreFINE / Frob Core',
        repopath: 'https://github.com/wearefine/frob-core',
        desc: 'A framework for front (frob) enders (tenders) everywhere'
      }
    ];
});

riot.tag2('my-references', '<h2> References </h2> <ul> <li each="{person, i in people}"> <strong>{person.name}</strong> &mdash; {person.title}<br> <a href="mailto:{person.email}">{person.email}</a><br> <a href="http://twitter.com/{person.twitter}">@{person.twitter}</a><br> </li> </ul> <p>If you would like references who are not developers, I have plenty of those, too. Send me an <a href="mailto:kyle.a.shevlin@gmail.com">email</a> and I\'d be happy to connect you with them.</p>', 'my-references ul,[riot-tag="my-references"] ul,[data-is="my-references"] ul{ list-style: none; } my-references li,[riot-tag="my-references"] li,[data-is="my-references"] li{ margin-bottom: 1.8rem; }', '', function(opts) {
    this.people = [
      {
        name: 'James Kurczodyna',
        title: 'Director of Technology',
        email: 'james@wearefine.com',
        twitter: 'jamesmk'
      },
      {
        name: 'Mark Hoffman',
        title: 'Director of Interactive Development',
        email: 'mark@wearefine.com',
        twitter: 'code_mischief'
      },
      {
        name: 'Niles McGiver',
        title: 'Back End Developer',
        email: 'niles@wearefine.com',
        twitter: 'nilesvm'
      },
      {
        name: 'Tim Shedor',
        title: 'Full Stack Developer',
        email: 'tim@wearefine.com',
        twitter: 'tshedor'
      }
    ];
});

riot.tag2('my-sites', '<section> <h2>Noteworthy Wesbites I Have Built</h2> <div class="sites"> <site-item each="{items}" title="{title}" path="{path}" award="{award}" comingsoon="{comingsoon}"></site-item> </div> </section>', '', '', function(opts) {
    this.items = [
      { title: 'McKibbon Hotels', path: 'http://www.mckibbon.com/', comingsoon: true },
      { title: 'Global Gourmet', path: 'http://ggcatering.com', comingsoon: true },
      { title: 'TA Associates', path: 'http://ta.com' },
      { title: 'Stag\'s Leap Wine Cellar', path: 'http://cask23.com', award: true },
      { title: 'Frazier Healthcare', path: 'http://frazierhealthcare.com' },
      { title: 'Eroica Wine', path: 'http://www.eroicawine.com/'},
      { title: 'Motto Wines', path: 'http://mottowines.com' },
      { title: 'Darioush', path: 'http://darioush.com', award: true },
      { title: 'Anchor Brewing', path: 'http://anchorbrewing.com' }
    ];
});

riot.tag2('my-skills', '<h2>Skills</h2> <ul> <li each="{skill, i in items}">{skill}</li> </ul>', '', '', function(opts) {
    this.items = [
      'Expert front-end developer: HTML and templating languages, CSS/Sass, JavaScript (including ES6)',
      'Full Stack Ruby on Rails developer working to become a JavaScript engineer',
      'Experience with Ember; Primarily focused on building up experience and skills with this framework',
      'Experience with Test Driven Development',
      'Experience with Git and SVN version control, code reviews, pull requests, pair programming and more',
      'Creator and maintainer of several Ruby gems and Bower packages',
      'Contributor to several open source projects',
      'Highly skilled in creating front-end systems that are responsive, mobile-first, cross browser compatible applications',
      'Code is always well documented, styleguides always followed, and kept clean for the next developer on the project',
      'Excellent communicator and teacher; Able to facilitate dialogue across disciplines'
    ];
});

riot.tag2('my-social', '<ul> <li each="{items}">{title}: <a href="{path}">{path}</a></li> </ul>', 'my-social ul,[riot-tag="my-social"] ul,[data-is="my-social"] ul{ list-style: none; }', '', function(opts) {
    this.items = [
      { title: 'Github', path: 'https://github.com/kyleshevlin' },
      { title: 'LinkedIn', path: 'https://www.linkedin.com/in/kyleshevlin' },
      { title: 'Twitter', path: 'https://twitter.com/kyleshevlin'}
    ]
});

riot.tag2('my-work', '<h2>Work</h2> <work-item each="{items}" company="{company}" location="{location}" dates="{dates}" jobtitle="{jobtitle}" points="{points}"></work-item>', '', '', function(opts) {
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
});

riot.tag2('repo-item', '<div class="repo-item"> <h3><a href="{opts.repopath}">{opts.title}</a></h3> <p>{opts.desc}</p> <a if="{opts.demopath}" href="{opts.demopath}">Demo</a> </div>', '', '', function(opts) {
});

riot.tag2('site-item', '<div class="{this.siteItemClass}"> <h3 class="site-item-heading"> <span class="site-item-heading-span" show="{opts.comingsoon}">{opts.title}</span> <a class="site-item-heading-link" href="{opts.path}" hide="{opts.comingsoon}">{opts.title}</a> </h3> <span class="site-item-coming_soon" if="{opts.comingsoon}">&mdash; Coming Soon</span> <span class="site-item-award" if="{opts.award}">&mdash; CommArts Award Winner</span> </div>', '', '', function(opts) {
    this.siteItemClass = opts.comingsoon ? 'site-item is-coming-soon' : 'site-item'
});

riot.tag2('work-item', '<div class="work-item"> <p> <strong>{opts.company}</strong> - {opts.location} - {opts.dates}</br> <strong>{opts.jobtitle}</strong> </p> <ul> <li each="{point, i in opts.points}">{point}</li> </ul> </div>', '', '', function(opts) {
});
