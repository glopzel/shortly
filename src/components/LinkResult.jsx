// when you click to shorten it this shows up with the result
const Link = ({original, short}) => {
  return (
    <div className="link-result-container">
      <div className="link-result container">
      <p className="original-url">{original}</p>
        <div className="short-url-copy">
            <span className="cyan-text">{short}</span>
            {/* add copy to clipboard function */}
            <button className="btn copy-btn">Copy</button>
        </div>
      </div>
    </div>
  )
}

export default Link