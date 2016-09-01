<my-references>
  <h2>
    References
  </h2>

  <ul>
    <li each={person, i in people}>
      <strong>{ person.name }</strong> &mdash; { person.title }<br/>
      <a href="mailto:{ person.email }">{ person.email }</a><br/>
      <a href="http://twitter.com/{ person.twitter }">@{ person.twitter }</a><br/>
    </li>
  </ul>

  <p>If you would like references who are not developers, I have plenty of those, too. Send me an <a href="mailto:kyle.a.shevlin@gmail.com">email</a> and I'd be happy to connect you with them.</p>

  <style scoped>
    ul {
      list-style: none;
    }

    li {
      margin-bottom: 1.8rem;
    }
  </style>

  <script>
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
      }
    ];
  </script>
</my-references>
