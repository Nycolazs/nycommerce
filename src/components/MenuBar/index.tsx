import { useState } from 'react';
import { MenuBarContainer, Logo, MainItens, Link, Itens, Cart, Price, Bag, User, MobileButton, 
  AboutContainer, MobileMenu, CloseButton } from './styled'

export default function MenuBar(props: any) {
  props = {
    price: "$0.00",
    itens: "0"
  }
  
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <MenuBarContainer> 
        <MainItens>
          <Logo onClick={() => window.location.href = '/'}>
            <img alt="Logo" />
          </Logo>
          <Link onClick={() => window.location.href = '/everything'}>Everything</Link>
          <Link onClick={() => window.location.href = '/women'}>Women</Link>
          <Link onClick={() => window.location.href = '/men'}>Men</Link>
          <Link onClick={() => window.location.href = '/accessories'}>Accessories</Link>
        </MainItens>
        <Itens>
          <AboutContainer>
            <Link>About</Link>
            <Link>Contact us</Link>
          </AboutContainer>
          <Cart>
            <Price>{props.price}</Price>
            <Bag $itens={props.itens}><i className="bi bi-bag-fill" /></Bag>
          </Cart>
          <User><i className="bi bi-person-fill"/></User>
        </Itens>
        <MobileButton onClick={()=>menuVisible?setMenuVisible(false):setMenuVisible(true)}><i className="bi bi-list"></i></MobileButton>
        <MobileMenu $visible={menuVisible}>
          <CloseButton onClick={()=>menuVisible?setMenuVisible(false):setMenuVisible(true)}><i className="bi bi-x"/></CloseButton>
        </MobileMenu>
      </MenuBarContainer>
    </>
  )
}