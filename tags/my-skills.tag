<my-skills>
  <h2>Skills</h2>
  <ul>
    <li each={skill, i in items}>{ skill }</li>
  </ul>

  <script>
    this.items = [
      'Expert front-end developer: HTML and templating languages, CSS/Sass, JavaScript (including ES6)',
      'JavaScript engineer and full stack Ruby on Rails developer',
      'Strong experience with Ember and React',
      'Experience with Test Driven Development',
      'Experience with Git and SVN version control, code reviews, pull requests, pair programming and more',
      'Creator and maintainer of several Ruby gems and Bower packages',
      'Contributor to several open source projects',
      'Highly skilled in creating front-end systems that are responsive, mobile-first, cross browser compatible applications',
      'Code is always well documented, styleguides always followed, and kept clean for the next developer on the project',
      'Excellent communicator and teacher; Able to facilitate dialogue across disciplines'
    ];
  </script>
</my-skills>
