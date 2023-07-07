import '../resources/MusicTag.css'

type MusicTagProps = {
    tagKey: string,
    tagName: string
}

const MusicTag = ({tagKey,tagName} : MusicTagProps) => {
  return (
    <div className={`musicTag ${tagKey}`}>#{tagName}</div>
  )
}

export default MusicTag