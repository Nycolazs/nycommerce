import styled from 'styled-components';

export const MenuBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  width: 100%;
  height: 100px;
  padding: 0 20px;

  background-color: rgba(0,0,0,0.07);

  & > * {
    margin-top: 3px;
  }

  @media (max-width: 768px) {
    position: relative;
    background-color: white;
    height: 50px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 1.5em;
  font-weight: bold;
  color: palevioletred;

  margin-right: 20px;
  margin-left: 15px;
  cursor: pointer;
  
  img {
    width: 140px;
    height: 47px;
    content: url('/logo1.png');
  }

  @media (max-width: 768px) {
    img {
      width: 100px;
      height: 100%;
      content: url('logo.png');
    }

    margin-left: -5px;
  }
`;

export const MainItens = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  a{
    font-weight: 500;
    font-size: 0.9em;
  }

  @media (max-width: 768px) {
    a{
      display: none;
    }
  }
`;

export const Itens = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  color: white;

  a{
    font-weight: inherit;
    font-size: 0.8125rem;
  }

  @media (max-width: 768px) {
    color: black;
    margin-right: 40px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-right: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Link = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  cursor: pointer;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  margin-right: 20px;
  margin-left: 20px;
  cursor: pointer;

  font-family: inherit;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-right: 20px;

  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 10px !important;
  }
`;

export const Bag = styled.div<{ $itens?: string; }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  margin-bottom: 5px;

  i{
    font-size: 1em;
  }

  &::after {
    color: #000000;
    background-color: white;

    content: '${props => props.$itens}';
    position: absolute;
    font-family: 'Lato',sans-serif;
    font-style: normal;
    top: 33px;
    right: 70px;
    font-weight: bold;
    box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.3);
    font-size: 11px;
    padding-left: 0px;
    padding-right: 2px;
    line-height: 17px;
    letter-spacing: -.5px;
    height: 18px;
    min-width: 18px;
    border-radius: 99px;
    text-align: center;
    z-index: 3;

    @media (max-width: 768px) {
      top: 6px !important;
      right: 66px !important;
    }
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-right: 20px;
  cursor: pointer;

  margin-bottom: 7px;

  i{
    color: white;
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileButton = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  background-color: black;

  height: 40px;
  width: 40px;

  color: white;

  top: 2px;
  right: 13px;
  position: absolute;

  i{
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    display: flex !important;
  }
`;

export const MobileMenu = styled.div<{ $visible?: boolean; }>`
  position: fixed;
  transform: translateX(100%);
  opacity: 1;
  width: 90%;
  height: 100%;
  left: 100%;
  transition: transform 0.2s ease-in,opacity 0.2s ease-in;

  ${props => props.$visible && `
    left: 100%;
    opacity: 1;
    z-index: 9999;
    width: 90%;
    height: 100%;
    transform: translateX(-100%);
    transition: transform 0.4s ease-in,opacity 0.4s ease-in;
  `}

  background-color: white;

  @media (min-width: 768px) {
    display: none;

    & > * {
      display: none;
    }
  }
`;

export const CloseButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;

  top: 2px;
  right: 13px;
  position: absolute;

  i{
    font-size: 2em;
    color: black;
  }
`;