import styled from 'styled-components'

export const StyledHeader = styled.header`
    background: #1E1E24;
    box-shadow: 0px 10px 10px #7E8287;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: ${(props) => (props.scrolled ? '10px' : '20px')};
    transition: all 0.3s ease;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`

export const Logo = styled.div`
    width: 40px;
    height: 40px;
`

export const StyledLink = styled.a`
    color: #fff;
    text-decoration: none;
`