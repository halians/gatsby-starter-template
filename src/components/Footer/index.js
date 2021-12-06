import React from "react"
import SocialLinks from "../../constants/socialLinks"
import FooterWrapper from "./style"

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <SocialLinks styleClass="footer-icons" />
        <p>&copy;{new Date().getFullYear()} [APP-NAME]. All rights reserved.</p>
      </div>
    </FooterWrapper>
  )
}

export default Footer
