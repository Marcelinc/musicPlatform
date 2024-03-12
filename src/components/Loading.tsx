import '../resources/Loading.css';

const Loading = () => {
  return (
    <div id="loading-container">
        <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Loading