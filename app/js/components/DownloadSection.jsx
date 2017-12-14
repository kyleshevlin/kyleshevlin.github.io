import { h } from 'preact'
import DownloadButton from './DownloadButton'

const DownloadSection = () => (
  <section className="download_section">
    <span className="download_section-text">
      Download a PDF of my resume here:
    </span>
    <DownloadButton path="/dist/Kyle_Shevlin_Resume.pdf" text="Resume PDF" />
  </section>
)

export default DownloadSection
