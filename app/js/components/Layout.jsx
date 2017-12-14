import { h } from 'preact'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from './Header'
import NightModeToggle from './NightModeToggle'
import Footer from './Footer'
import DownloadSection from './DownloadSection'
// import Overview from './Overview'
import AccomplishmentsContainer from '../containers/AccomplishmentsContainer'
import EducationContainer from '../containers/EducationContainer'
import ProjectsContainer from '../containers/ProjectsContainer'
import SitesContainer from '../containers/SitesContainer'
import SkillsContainer from '../containers/SkillsContainer'
import SocialContainer from '../containers/SocialContainer'
import WorkContainer from '../containers/WorkContainer'

const Layout = ({ isNightMode }) => (
  <div className={isNightMode ? 'layout is-night-mode' : 'layout'}>
    <Header />
    <NightModeToggle />

    <div className="container">
      {/* <Overview /> */}
      <SkillsContainer />
      <AccomplishmentsContainer />
      <EducationContainer />
      <WorkContainer />
      <ProjectsContainer />
      <SitesContainer />
      <section>
        <SocialContainer />
      </section>
      <DownloadSection />
    </div>

    <Footer />
  </div>
)

Layout.propTypes = {
  isNightMode: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isNightMode: state.isNightMode
})

export default connect(mapStateToProps)(Layout)
