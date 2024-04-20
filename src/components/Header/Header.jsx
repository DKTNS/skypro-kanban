import { useState } from "react";
import * as S from "./Header.style";
import { Container } from "../../Styled/Common/Common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

export default function Header({ addCard }, { user }) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopup() {
    setIsOpened((prev) => !prev);
  }
  return (
    <S.StyledHeader>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogoImg className="_show _light">
            <Link to={appRoutes.MAIN} target="_self">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </S.HeaderLogoImg>
          <S.HeaderLogoImg className="_dark">
            <Link to={appRoutes.MAIN} target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </Link>
          </S.HeaderLogoImg>
          <S.HeaderNav>
            <S.HeaderBtnMainNew onClick={addCard} id="btnMainNew">
              <S.HeaderBtnMainNewText>
                Создать новую задачу
              </S.HeaderBtnMainNewText>
            </S.HeaderBtnMainNew>

            <S.HeaderUser onClick={togglePopup}>Ivan Ivanov</S.HeaderUser>

            {isOpened && (
              <S.HeaderPopUserSet id="user-set-target">
                {/*<!-- <a href="">x</a> -->*/}
                <S.HeaderPopUserSetName>{user.name}</S.HeaderPopUserSetName>
                <S.HeaderPopUserSetMail>{user.login}</S.HeaderPopUserSetMail>
                <S.HeaderPopUserSetTheme>
                  <S.HeaderPopUserSetThemeP>
                    Темная тема
                  </S.HeaderPopUserSetThemeP>
                  <S.HeaderPopUserSetThemeInput
                    type="checkbox"
                    name="checkbox"
                  />
                </S.HeaderPopUserSetTheme>
                <S.HeaderExitButton type="button">
                  <Link to={appRoutes.EXIT}>
                    <S.HeaderPopUserSetBtn>Выйти</S.HeaderPopUserSetBtn>
                  </Link>
                </S.HeaderExitButton>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyledHeader>
  );
}
