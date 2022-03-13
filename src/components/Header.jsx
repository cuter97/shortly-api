import Working from '../images/illustration-working.svg'
import Button from './Button'

const Header = () => {
  return (
    <div className='intro'>
            <div className='description'>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <Button/>
            </div>

            <div className='img'>
                <img src={Working} alt='img of a person working' />
            </div>
        </div>
  )
}

export default Header