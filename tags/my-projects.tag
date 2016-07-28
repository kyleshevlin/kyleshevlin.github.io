<my-projects>
  <h2>Noteworthy Repos</h2>
  <div class="repos">
    <repo-item each={my_projects}
      title={title}
      repopath={repopath}
      desc={desc}
      demopath={demopath}
    ></repo-item>
  </div>

  <h2>Open Source Projects I Contribute To</h2>
  <div class="repos">
    <repo-item each={os_projects}
      title={title}
      repopath={repopath}
      desc={desc}
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
        desc: 'A vanilla JavaScript plugin for... well... matching the height of boxes.',
        demopath: '/matchbox'
      },
      {
        title: 'Componentize',
        repopath: 'https://github.com/kyleshevlin/componentize',
        desc: "Rails generator for inline and block components; similar to Ember-CLI's component generator"
      },
      {
        title: 'Condo',
        repopath: 'https://github.com/kyleshevlin/condo',
        desc: 'A micro Sass grid library.',
        demopath: '/condo'
      },
      {
        title: 'Ripsum',
        repopath: 'https://github.com/kyleshevlin/ripsum',
        desc: 'Ruby gem for generating random amounts of lorem ipsum with each page load.',
        demopath: '/ripsum'
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
  </script>
</my-projects>
