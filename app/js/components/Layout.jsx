import { h } from 'preact'
import Header from './Header'
import Footer from './Footer'
import DownloadButton from './DownloadButton'
import Overview from './Overview'
import EducationContainer from '../containers/EducationContainer'
import ProjectsContainer from '../containers/ProjectsContainer'
import SitesContainer from '../containers/SitesContainer'
import SkillsContainer from '../containers/SkillsContainer'
import SocialContainer from '../containers/SocialContainer'
import WorkContainer from '../containers/WorkContainer'

const Layout = () => (
  <div className="layout">
    <Header />

    <div className="container">
      <section>
        <SocialContainer />
        <DownloadButton
          path="/dist/Kyle_Shevlin_Resume.pdf"
          text="Download Resume PDF"
        />
        <Overview />
      </section>

      <SkillsContainer />
      <WorkContainer />
      <EducationContainer />
      <ProjectsContainer />
      <SitesContainer />
    </div>

    <Footer />
  </div>
)

export default Layout
