<my-skills>
  <h2>Skills</h2>
  <ul>
    <li each={skill, i in items}>{ skill }</li>
  </ul>

  <script>
    this.items = [
      'High level of mastery in HTML (and multiple templating languages: Erb, Slim, Handlebars, Twig), CSS (highly skilled with Sass), and JavaScript.',
      'Develops front end systems that are mobile-first, fully responsive, cross-browser supporting and well commented, rigorously following styleguides leaving behind a clean code base for anyone else who might work on the project.',
      'Full stack Ruby on Rails developer, capable of developing and implementing data models and CMSs.',
      'Excellent communicator and teacher. Able to facilitate dialogue across disciplines as well as effectively describe and educate (when necessary) the pain points and challenges of a particular development direction or benefits and opportunities of another.'
    ];
  </script>
</my-skills>
