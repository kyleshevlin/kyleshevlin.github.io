const markdownpdf = require('markdown-pdf')
const path = require('path')

try {
  const resumePath = path.resolve(__dirname, '../src/resume.mdx')
  const pdfPath = path.resolve(__dirname, '../src/assets/KyleShevlinResume.pdf')

  markdownpdf({
    phantomPath: '/Users/kyleshevlin/.nvm/versions/node/v16.6.1/bin/phantomjs',
  })
    .from(resumePath)
    .to(pdfPath, () => {
      console.log('done')
    })
} catch (err) {
  console.log(err)
}
