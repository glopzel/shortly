import Card from "./Card"
import brandIcon from "../assets/images/icon-brand-recognition.svg"
import detailedIcon from "../assets/images/icon-detailed-records.svg"
import customizeIcon from "../assets/images/icon-fully-customizable.svg"

const headings = ['Brand Recognition', 'Detailed Records', 'Fully Customizable']
const content = [
  "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.", "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.", "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
]
const imgs = [brandIcon, detailedIcon, customizeIcon]

const CTA = () => {
  return (
    <>
    <div className="cards__block">
      <section className="small-container">
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
      </section>
      <div className="container cards">
        {headings.map((item, index) => {
          return (
            <Card heading={item} content={content[index]} src={imgs[index]} id={`card-${index}`} key={index}/>
          )
        })}
      </div>
    </div>
    <div className='cta-block'>
        <section className="container">
            <h4>Boost your links today</h4>
            <button className='btn cyan-btn'>Get Started</button>
        </section>
    </div>
    </>
  )
}

export default CTA