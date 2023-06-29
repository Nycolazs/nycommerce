import { MenuContainer, CloseButton, UserIcon, MainItensMenuMobile, LinkMobile, BreakLine, ItensMenuMobile, UlLinkMobile } from './styled';
import { useRouter } from 'next/router';

export default function MobileMenu(props: any) {
  const router = useRouter();

  const [menuVisible, setMenuVisible] = props.menuVisible;
  
  return (
    <>
      <MenuContainer $visible={menuVisible}>
          <CloseButton onClick={()=>menuVisible?setMenuVisible(false):setMenuVisible(true)}>
            <i className="bi bi-x"/>
          </CloseButton>
          <UserIcon><i className="bi bi-person-fill"/></UserIcon>
          <MainItensMenuMobile>
            <UlLinkMobile>
              <LinkMobile onClick={() => router.push('/everything')}>Everything</LinkMobile>
              <LinkMobile onClick={() => router.push('/women')}>Women</LinkMobile>
              <LinkMobile onClick={() => router.push('/men')}>Men</LinkMobile>
              <LinkMobile onClick={() => router.push('/accessories')}>Accessories</LinkMobile>
            </UlLinkMobile>
          </MainItensMenuMobile>
          <BreakLine />
          <ItensMenuMobile>
            <UlLinkMobile>
              <LinkMobile onClick={() => router.push('/about')}>About</LinkMobile>
              <LinkMobile onClick={() => router.push('/contact')}>Contact Us</LinkMobile>
            </UlLinkMobile>
          </ItensMenuMobile>
      </MenuContainer>
    </>
  );
}