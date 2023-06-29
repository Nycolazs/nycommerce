import { useState } from 'react';
import { MenuBarContainer, Logo, MainItens, Link, Itens, Cart, Price, Bag, User, MobileButton, AboutContainer } from './styled';
import MenuMobile from './MobileMenu';
import { useRouter } from 'next/router'
import CartMenu from './CartMenu';

export default function MenuBar(props: any) {
  const router = useRouter()

  props = {
    price: "$0.00",
    itens: "0"
  }
  
  const [menuMobVisible, setMenuMobVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <>
      <MenuBarContainer> 
        <MainItens>
          <Logo onClick={() => router.push('/')}>
            <img alt="Logo" />
          </Logo>
          <Link onClick={() => router.push('/everything')}>Everything</Link>
          <Link onClick={() => router.push('/women')}>Women</Link>
          <Link onClick={() => router.push('/men')}>Men</Link>
          <Link onClick={() => router.push('/accessories')}>Accessories</Link>
        </MainItens>
        <Itens>
          <AboutContainer>
            <Link onClick={() => router.push('/about')}>About</Link>
            <Link onClick={() => router.push('/contact')}>Contact us</Link>
          </AboutContainer>
          <Cart onClick={()=>cartVisible?setCartVisible(false):setCartVisible(true)}>
            <Price>{props.price}</Price>
            <Bag $itens={props.itens}><i className="bi bi-bag-fill" /></Bag>
          </Cart>
          <User><i className="bi bi-person-fill"/></User>
        </Itens>
        <MobileButton onClick={()=>menuMobVisible?setMenuMobVisible(false):setMenuMobVisible(true)}>
          <i className="bi bi-list"></i>
        </MobileButton>
      </MenuBarContainer>
      {/* Cart */}
      <CartMenu cartVisible={[cartVisible, setCartVisible]} />
      {/* Menu Mobile */}
      <MenuMobile menuVisible={[menuMobVisible, setMenuMobVisible]} />
    </>
  )
}