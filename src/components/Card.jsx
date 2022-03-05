import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

const Card = ({props}) => {

    const [copy, setCopy] = useState({
        copySuccess: false,
        buttonText: 'Copy'
      })
    
      const copyTrue = () => {
        setCopy({
          copySuccess: !copy.copySuccess,
          buttonText: 'Copied!',
        })
    
      }

    const {short_link, original_link} = props

  return (
    <div>
        {original_link} ------ {short_link}
        <CopyToClipboard text = {short_link}>
                  <button onClick={copyTrue} >{(copy.copySuccess) ? 'copy' : 'copied'}</button>
        </CopyToClipboard>
    </div>
  )
}

export default Card