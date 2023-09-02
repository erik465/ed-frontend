import React, {useState, useEffect} from 'react'
import { StyledHeader, Logo, StyledLink } from './Nav.styled'
import { HiAcademicCap} from 'react-icons/hi2'

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <StyledHeader scrolled={scrolled}>
        <StyledLink href="">Lorem</StyledLink>
        <StyledLink href="">Lorem</StyledLink>
        <HiAcademicCap style={{height: 50, width: 50, color: '#eee'}}/>
        <StyledLink href="">Lorem</StyledLink>
        <StyledLink href="">Lorem</StyledLink>
    </StyledHeader>
  )
}

export default Nav
