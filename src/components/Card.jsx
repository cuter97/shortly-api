import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

const Card = ({props}) => {

    const [copy, setCopy] = useState({
        copySuccess: false,
        buttonText: 'Copy'
      })
    
      const copyTrue = () => {
        setCopy({
          copySuccess: true,
          buttonText: 'Copied!',
        })
    
      }

    const {short_link, original_link} = props

  return (
    <div>
        {original_link} ------ {short_link}
        <CopyToClipboard text = {short_link}>
                  <button onClick={copyTrue} >{copy.buttonText}</button>
        </CopyToClipboard>
    </div>
  )
}

export default Card