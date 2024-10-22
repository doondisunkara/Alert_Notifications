import Notification from '../Notification'

import './index.css'

const notificationsList = [
  {
    id: 'SUCCESS',
    heading: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    id: 'ERROR',
    heading: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    id: 'WARNING',
    heading: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 'INFO',
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => (
  <div className="alert-notification-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <ul className="notifications-list-container">
      {notificationsList.map(each => (
        <Notification notificationDetails={each} key={each.id} />
      ))}
    </ul>
  </div>
)

export default AlertNotifications
