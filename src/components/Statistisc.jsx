import brand from '../images/icon-brand-recognition.svg'
import detailed from '../images/icon-detailed-records.svg'
import fully from '../images/icon-fully-customizable.svg'

const Statistisc = () => {
  return (
    <div className='container-statistics'>
        <div className="statistics">
            <p className="statistics-title">Advanced Statistics</p>
            <p className="statistics-text">
                Track how your are performing across the web with
                our advanced statistics dashboard
            </p>
        </div>

        <div className="cards">
            
            <span className='span-card'></span>

            <div className="style">
                <div className='img-container'>
                    <img src={brand} alt="icon-card" />
                </div>
                <div className='text-container'>
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
            </div>

            <div className="style card-two">
                <div className='img-container'>
                    <img src={detailed} alt="icon-card" />
                </div>
                <div className='text-container'>
                    <h3>Detailed Records</h3>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
            </div>

            <div className="style card-tree">
                <div className='img-container'> 
                    <img src={fully} alt="icon-card" />
                </div>
                <div className='text-container'>
                    <h3>Fully Customizable</h3>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Statistisc