import { useState } from "react";

// when you click to shorten it this shows up with the result
const Link = ({original, short}) => {
  const [isCopied, setIsCopied] = useState(false)
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(short);
      setIsCopied(!isCopied)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="link-result-container">
      <div className="link-result container">
      <p className="original-url">{original}</p>
        <div className="short-url-copy">
            <span className="cyan-text">{short}</span>
            <button onClick={() => copyToClipboard()} className="btn copy-btn">Copy</button>
        </div>
      </div>
    </div>
  )
}

export default Link