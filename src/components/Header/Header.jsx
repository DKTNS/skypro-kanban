import { useState, useEffect  } from "react";
import * as S from "./Header.style";
import { Container } from "../../Styled/Common/Common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { userHost } from "../../api";

//return user list
export async function getUserList(token) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.status === 200) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" }); // Состояние для хранения данных пользователя

  function togglePopup() {
    setIsOpened((prev) => !prev);
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getUserList(); // Получаем данные пользователя
        setUser({ name: userData.name, email: userData.email }); // Устанавливаем данные в состояние
      } catch (error) {
        console.error("Ошибка при получении данных пользователя:", error);
      }
    }

    fetchUser();
  }, []);

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
            <Link to={appRoutes.TASK}>
              <S.HeaderBtnMainNew id="btnMainNew">
                {/* <S.HeaderBtnMainNewText> */}
                Создать новую задачу
                {/* </S.HeaderBtnMainNewText> */}
              </S.HeaderBtnMainNew>
            </Link>
            <S.HeaderUser onClick={togglePopup}> {user.name} Имя </S.HeaderUser>

            {isOpened && (
              <S.HeaderPopUserSet id="user-set-target" >
                <S.HeaderPopUserSetName>  </S.HeaderPopUserSetName>
                <S.HeaderPopUserSetMail>
                {user.email} Е-маил
                </S.HeaderPopUserSetMail>
                {/* <S.HeaderPopUserSetTheme>
                  <S.HeaderPopUserSetThemeP>
                    Темная тема
                  </S.HeaderPopUserSetThemeP>
                  <S.HeaderPopUserSetThemeInput
                    type="checkbox"
                    name="checkbox"
                  />
                </S.HeaderPopUserSetTheme> */}
                <S.HeaderExitButton type="button">
                  <Link to={appRoutes.SIGNIN}>
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
