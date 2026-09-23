import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <h2> Connect With Me</h2>
            <div className="social-links">
                <a href="https://t.me/Tim_Savvy"><FaTelegram className="icons"/> <br />Telegram</a>
                <a href="https://discord.gg/UwTqwfSe"><FaDiscord className="icons" />  <br /> Discord</a>
                <a href="https://wa.me/qr/ZWQJ32XYBSTCC1"><FaWhatsapp className="icons" /> <br /> Whatsapp</a>
                <a href="https://github.com/TimoSavvy"><FaGithub className="icons" />  <br />Github</a>
                     
                     
                     
                     
    
            </div>
            <p> Copyright 2026 TimSavvy</p>
        </div>
    </div>
  )
}

export default Footer    