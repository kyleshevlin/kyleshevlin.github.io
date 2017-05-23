import React from 'react'
import PropTypes from 'prop-types'
import ReferenceItem from './ReferenceItem'

const References = (props) => {
  return (
    <section>
      <h2>References</h2>

      <div className='references-list'>
        {props.references.map((item, index) => {
          return <ReferenceItem key={index} {...item} />
        })}
      </div>

      <p>
        If you would like references who are not developers, I have plenty of those, too. Send me an <a href='mailto:kyle.a.shevlin@gmail.com'>email</a> and I'd be happy to connect you with them.
      </p>
    </section>
  )
}

References.propTypes = {
  references: PropTypes.array
}

export default References
