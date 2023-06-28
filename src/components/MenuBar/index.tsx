import { useState } from 'react';
import { MenuBarContainer, Logo, MainItens, Link, Itens, Cart, Price, Bag, User, MobileButton, 
  AboutContainer } from './styled';
import MenuMobile from './MobileMenu';

export default function MenuBar(props: any) {
  props = {
    price: "$0.00",
    itens: "0"
  }
  
  const [menuMobVisible, setMenuMobVisible] = useState(false);

  return (
    <>
      <MenuBarContainer> 
        <MainItens>
          <Logo onClick={() => window.location.href = '/'}>
            <img alt="Logo" />
          </Logo>
          <Link href="/everything">Everything</Link>
          <Link href="/women">Women</Link>
          <Link href="/men">Men</Link>
          <Link href="/accessories">Accessories</Link>
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
        <MobileButton onClick={()=>menuMobVisible?setMenuMobVisible(false):setMenuMobVisible(true)}>
          <i className="bi bi-list"></i>
        </MobileButton>
      </MenuBarContainer>
      {/* Menu Mobile */}
      <MenuMobile menuVisible={[menuMobVisible, setMenuMobVisible]} />
    </>
  )
}