import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const notificationsList = [
  {
    id: 'SUCCESS',
    icon: 'AiFillCheckCircle',
    heading: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    id: 'ERROR',
    icon: 'RiErrorWarningFill',
    heading: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    id: 'WARNING',
    icon: 'MdWarning',
    heading: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 'INFO',
    icon: 'MdInfo',
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => {
  const getIcon = id => {
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
    <div className="alert-notification-container">
      <h1 className="main-heading">Alert Notifications</h1>
      <ul className="notifications-list-container">
        {notificationsList.map(each => (
          <Notification notificationDetails={each} key={each.id}>
            {{
              Icon: getIcon(each.id),
              Heading: each.heading,
              Description: each.description,
            }}
          </Notification>
        ))}
      </ul>
    </div>
  )
}
export default AlertNotifications
