import React from 'react'
import {BsFacebook,BsLinkedin, BsGithub, BsInstagram} from "react-icons/bs"
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.facebook.com/phursang.dong.33" target='_blank'><BsFacebook/></a>
        <a href="https://www.linkedin.com/in/phursang-dong-0b248720b/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Phursang45" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/phursang_t/" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials
