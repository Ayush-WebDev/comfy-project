import React from "react";
import styled from "styled-components";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrap>
      <footer>
        <p>
          ©️ <span className="company">Comfy Sloth</span> {year} All rights
          reserved{" "}
        </p>
      </footer>
    </FooterWrap>
  );
};

/// styled component

const FooterWrap = styled.footer`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 40px;
  background-color: var(--clr-black);
  p {
    color: white;
    margin-bottom: 0;
  }
  .company {
    color: var(--clr-primary-6);
  }
`;

export default Footer;
