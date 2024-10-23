import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  const {Icon, Heading, Description} = children
  // console.log(props)

  return (
    <li className="notification-item">
      {Icon}
      <div className="details-container">
        <h1 className={`notification-heading ${Heading.toLowerCase()}`}>
          {Heading}
        </h1>
        <p className="notification-description">{Description}</p>
      </div>
      <GrFormClose size={50} className="close-icon" />
    </li>
  )
}

export default Notification
