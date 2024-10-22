import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {notificationDetails} = props
  const {id, heading, description} = notificationDetails

  const getIcon = () => {
    switch (id) {
      case 'SUCCESS':
        return <AiFillCheckCircle size={50} className="success" />
      case 'ERROR':
        return <RiErrorWarningFill size={50} className="error" />
      case 'WARNING':
        return <MdWarning size={50} className="warning" />
      default:
        return <MdInfo size={50} className="info" />
    }
  }

  return (
    <li className="notification-item">
      {getIcon()}
      <div className="details-container">
        <h1 className={`notification-heading ${heading.toLowerCase()}`}>
          {heading}
        </h1>
        <p className="notification-description">{description}</p>
      </div>
      <GrFormClose size={50} className="close-icon" />
    </li>
  )
}

export default Notification
