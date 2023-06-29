import styled from 'styled-components';

export const CartContainer = styled.div<{ $visible?: boolean; }>`
  background-color: white;
  height: 100%;
  width: 30em;
  position: absolute;
  right: 0;
  top: 0;
  display: none;

  opacity: 0;

  ${props => props.$visible && `
    opacity: 1;
    display: block;
    z-index: 3;
  `}
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