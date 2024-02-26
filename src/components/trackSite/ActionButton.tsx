import '../../resources/TrackSite/actionButton.css'
import { Fa1 } from 'react-icons/fa6'
type ActionButtonProps = {
    title: string,
    icon: typeof Fa1
}

const ActionButton = ({title,icon}: ActionButtonProps) => {
  return (
    <div className="action-bttn">
      {icon}
      {title}
    </div>
  )
}

export default ActionButton