import { appRoutes } from "../../lib/appRoutes";
import { Link, useNavigate } from "react-router-dom";
import * as SI from "./SigninPage.styled";
import "./signin.css";
import { useState } from "react";
import { signIn } from "../../api";
import { useUser } from "../../components/Hooks/useUser";

export default function SigninPage() {
  const {login} = useUser();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ login: "", password: "" });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setLoginData({
      ...loginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };
  const handleLogin = async () => {
    await signIn(loginData)
      .then((data) => {
        login(data.user);
        navigate(appRoutes.MAIN);
      })
/*       .catch((error) => {
        alert(error.message + ": попробуйте повторить запрос");
      }); */
  };

  return (
    <SI.WrapperSigninDiv>
      <SI.ContainerSigninDiv>
        <SI.SigninModal>
          <SI.SigninModalBlock>
            <SI.SigninModalTtl>
              <h2>Вход</h2>
            </SI.SigninModalTtl>

            <SI.SigninModalFormLogin>
              <SI.SigninModalInput
                value={loginData.login}
                onChange={handleInputChange}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <SI.SigninModalInput
                value={loginData.password}
                onChange={handleInputChange}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />

              <SI.SigninModalBtnEnter onClick={handleLogin}>
                Войти
              </SI.SigninModalBtnEnter>

              <SI.SigninModalFormGroup>
                <p>Нужно зарегистрироваться?</p>

                <Link to={appRoutes.SIGNUP}>Регистрируйтесь здесь</Link>
              </SI.SigninModalFormGroup>
            </SI.SigninModalFormLogin>
          </SI.SigninModalBlock>
        </SI.SigninModal>
      </SI.ContainerSigninDiv>
    </SI.WrapperSigninDiv>
  );
}
