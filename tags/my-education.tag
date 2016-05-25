<my-education>
  <h2>Education</h2>
  <education-item each={items} degree={degree} teaser={teaser} school={school} city={city} year={year}></education-item>

  <script>
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
  </script>
</my-education>
