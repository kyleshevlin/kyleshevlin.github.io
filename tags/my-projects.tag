<my-projects>
  <h2>Noteworthy Repos and OS Projects</h2>
  <div class="repos">
    <repo-item each={items}
      title={title}
      repopath={repopath}
      desc={desc}
      demopath={demopath}
    ></repo-item>
  </div>

  <style scoped>
    h3,
    p {
      margin-bottom: 0;
    }

    p + p {
      margin-top: 1.8rem;
    }
  </style>

  <script>
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
  </script>
</my-projects>
