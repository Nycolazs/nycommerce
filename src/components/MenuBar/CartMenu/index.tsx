import { CartContainer, CloseButton } from './styled';

export default function CartMenu(props: any) {

  const [cartVisible, setCartVisible] = props.cartVisible;

  return (
    <>
      <CartContainer $visible={cartVisible}>
        <CloseButton onClick={()=>cartVisible?setCartVisible(false):setCartVisible(true)}>
          <i className="bi bi-x"/>
        </CloseButton>
      </CartContainer>
    </>
  );
}