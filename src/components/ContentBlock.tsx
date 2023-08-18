import { useNavigate } from "react-router-dom"
import '../resources/ContentBlock.css'

type ContentBlockType = {
  contentType: string,
  imgUrl: string,
  contentName: string,
  contentId: number,
}

const ContentBlock = ({contentType,imgUrl,contentName,contentId}: ContentBlockType) => {
  
  const navigate = useNavigate()
  const onClickHandler = () => {
    if(contentType === 'track'){
      navigate('/track/' + contentId)
    }
    if(contentType === 'playlist'){
      navigate('/playlist/' + contentId)
    }
  }

  return (
    <div className="content-block scroller" onClick={onClickHandler}>
      <img src={imgUrl}/>
      <p>{contentName}</p>
    </div>
  )
}

export default ContentBlock