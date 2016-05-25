<my-social>
  <ul>
    <li each={ items }>{title}: <a href={path}>{path}</a></li>
  </ul>

  <style scoped>
    ul {
      list-style: none;
    }
  </style>

  <script>
    this.items = [
      { title: 'Github', path: 'https://github.com/kyleshevlin' },
      { title: 'LinkedIn', path: 'https://www.linkedin.com/in/kyleshevlin' }
    ]
  </script>
</my-social>
