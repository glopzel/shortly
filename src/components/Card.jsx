const Card = ({heading, content, src}) => {
  return (
    <div className="card">
        <div className="card-img">
            <img src={src} alt="" />
        </div>
        <div className="card-text">
            <h3 className="text-align">{heading}</h3>
            <p className="text-align">{content}</p>
        </div>
    </div>
  )
}

export default Card