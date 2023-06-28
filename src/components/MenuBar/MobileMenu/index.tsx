import { MenuContainer, CloseButton, UserIcon, MainItensMenuMobile, LinkMobile, BreakLine, ItensMenuMobile, UlLinkMobile } from './styled';

export default function MobileMenu(props: any) {

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
              <LinkMobile>Everything</LinkMobile>
              <LinkMobile>Women</LinkMobile>
              <LinkMobile>Men</LinkMobile>
              <LinkMobile>Accessories</LinkMobile>
            </UlLinkMobile>
          </MainItensMenuMobile>
          <BreakLine />
          <ItensMenuMobile>
            <UlLinkMobile>
              <LinkMobile>About</LinkMobile>
              <LinkMobile>Contact Us</LinkMobile>
            </UlLinkMobile>
          </ItensMenuMobile>
      </MenuContainer>
    </>
  );
}