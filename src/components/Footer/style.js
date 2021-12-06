import styled from "styled-components"

const FooterWrapper = styled.footer`
  height: 7rem;
  text-align: center;
  background: var(--clr-black);
  display: grid;
  place-items: center;
  p {
    margin-bottom: 0;
    color: var(--clr-white);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
`

export default FooterWrapper
