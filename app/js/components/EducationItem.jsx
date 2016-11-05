import React from 'react'

const { string, number } = React.PropTypes

const EducationItem = (props) => {
  let teaser = null

  if (props.teaser) {
    teaser = <span> { props.teaser }</span>
  }

  return (
    <div className='education-item'>
      <strong>{props.degree}</strong>{teaser}<br />
      { props.school } - { props.city } - { props.year }
    </div>
  )
}

EducationItem.propTypes = {
  city: string,
  degree: string,
  school: string,
  teaser: string,
  year: number
}

export default EducationItem
