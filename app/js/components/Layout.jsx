import React from 'react'
import Header from './Header'
import Footer from './Footer'
import DisplayContainer from '../containers/DisplayContainer'
import Overview from './Overview'
import EducationContainer from '../containers/EducationContainer'
import ProjectsContainer from '../containers/ProjectsContainer'
import ReferencesContainer from '../containers/ReferencesContainer'
import SitesContainer from '../containers/SitesContainer'
import SkillsContainer from '../containers/SkillsContainer'
import SocialContainer from '../containers/SocialContainer'
import WorkContainer from '../containers/WorkContainer'

const Layout = () => {
  return (
    <div className='layout'>
      <Header />

      <div className='container'>
        <DisplayContainer />

        <section>
          <SocialContainer />
          <Overview />
        </section>

        <SkillsContainer />
        <WorkContainer />
        <EducationContainer />
        <ReferencesContainer />
        <ProjectsContainer />
        <SitesContainer />
      </div>

      <Footer />
    </div>
  )
}

export default Layout
