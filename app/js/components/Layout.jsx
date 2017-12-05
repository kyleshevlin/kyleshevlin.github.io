import { h } from 'preact'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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

const Layout = ({ isNightMode }) => (
  <div className={isNightMode ? 'layout is-night-mode' : 'layout'}>
    <Header />

    <div className="container">
      <section>
        <DownloadButton
          path="/dist/Kyle_Shevlin_Resume.pdf"
          text="Download Resume PDF"
        />
        <SocialContainer />
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

Layout.propTypes = {
  isNightMode: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isNightMode: state.isNightMode
})

export default connect(mapStateToProps)(Layout)
