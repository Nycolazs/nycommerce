import styled from 'styled-components';

export const MenuContainer = styled.div<{ $visible?: boolean; }>`
  position: fixed;
  transform: translateX(100%);
  opacity: 0;
  top: 0;
  width: 90%;
  height: 100%;
  left: 100%;
  transition: transform 0.25s ease-in,opacity 0.25s ease-in;

  ${props => props.$visible && `
    left: 100%;
    opacity: 1;
    top: 0;
    z-index: 9999;
    width: 90%;
    height: 100%;
    transform: translateX(-100%);
    transition: transform 0.25s ease-in,opacity 0.25s ease-in;
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

export const UserIcon = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 60px;
  margin-top: 80px;
  i{
    font-size: 1.5em;
    margin: 10px 0px 0px 20px;
  }
`;

export const MainItensMenuMobile = styled.div`
`;

export const UlLinkMobile = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
  position: relative;
`;

export const LinkMobile = styled.li`
  padding: 0 20px;
  display: inline-block;
  width: 100%;
  border: 0;
  border-bottom-width: 1px;
  background-color: #fafafa;
  border-style: solid;
  border-color: #e2e2e2;

  &:first-child {
    border-top-width: 1px;
  }
  
  text-transform: uppercase;
  
  font-family: 'Lato',sans-serif;
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;

  line-height: 4;

  display: flex;
  align-items: center;

  &:active {
    transition: all 0.1s ease-in-out;
    background-color: #e2e2e2;
    color: blue;
  }
`;

export const BreakLine = styled.div`
  width: 100%;
  height: 60px;
`;

export const ItensMenuMobile = styled.div`
  li{
    font-weight: 300 !important;
  }
`;