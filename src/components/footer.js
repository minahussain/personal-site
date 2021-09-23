import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  padding-top: 100px;
  text-align: center;
`;

const StyledCredit = styled.div`
  line-height: 1;
  a {
    padding: 10px;
    font-family: courier new;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCredit tabindex="-1">
        <div className="footer"><a href="https://github.com/minahussain/personal-site">
          <div>Designed &amp; Built by Mina Hussain</div>
        </a></div>
      </StyledCredit>
    </StyledFooter>
  );
}

export default Footer;