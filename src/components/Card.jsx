import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

const Card = ({ props }) => {

    const [copy, setCopy] = useState(false)

    const copyHandle = () => {
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 4000)
    }

    const { short_link, original_link } = props

    return (
        <div className="card">
            <div className="origin">
                {original_link}
            </div>
            <span></span>
            <div className="card-link">
                <a href={original_link} className="short-link" target="_blank">
                    {short_link}
                </a>
                <CopyToClipboard text={short_link}>
                    <button className={!copy ? "btn-copy" : "btn-copy2"} onClick={copyHandle} >{(copy) ? 'Copied!' : 'Copy'}</button>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default Card