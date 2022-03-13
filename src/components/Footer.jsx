import { Features } from "./Footer_Items"
import { Resources } from "./Footer_Items"
import { Company } from "./Footer_Items"
import Logo from "../images/logo.svg"

import { FaTwitter } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="logo-footer">
                <img src={Logo} alt="logo" />
            </div>

            <div className="items-footer">
                <div className="items">
                    <h3>Features</h3>
                    {
                        Features.map((item, index) => (
                            <a key={index} href={item.url}>{item.title}</a>
                        ))
                    }
                </div>
                <div className="items">
                    <h3>Resources</h3>
                    {
                        Resources.map((item, index) => (
                            <a key={index} href={item.url}>{item.title}</a>
                        ))
                    }
                </div>
                <div className="items">
                    <h3>Company</h3>
                    {
                        Company.map((item, index) => (
                            <a key={index} href={item.url}>{item.title}</a>
                        ))
                    }
                </div>
            </div>

            <div className="iconos">
                <FaFacebookSquare className="redes" />
                <FaTwitter className="redes" />
                <FaPinterest className="redes" />
                <FaInstagram className="redes" />
            </div>
        </div>
    )
}

export default Footer