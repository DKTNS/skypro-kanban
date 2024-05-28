import { useState } from "react";
import { signUp } from "../../api";
import { appRoutes } from "../../lib/appRoutes";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../components/Hooks/useUser";
import * as SUP from "./SignupPage.styled"

export default function SignupPage() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    login: "",
    name: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRegData({
      ...regData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    await signUp(regData)
      .then((data) => {
        login(data.user);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        alert(error.message + ": попробуйте повторить запрос");
      });
  };
  return (
    <SUP.WrapperSignupDiv>
      <SUP.ContainerSignup>
        <SUP.SignupModal>
          <SUP.SignupModalBlock>
            <SUP.SignupModalTtl>
              <h2>Регистрация</h2>
            </SUP.SignupModalTtl>
            <SUP.SignupModalFormLogin id="formLogUp" action="#">
              <SUP.SignupModalInput
                type="text"
                onChange={handleInputChange}
                name="name"
                id="first-name"
                value={regData.name}
                placeholder="Имя"
              />
              <SUP.SignupModalInput
                type="text"
                onChange={handleInputChange}
                name="login"
                id="loginReg"
                value={regData.login}
                placeholder="Эл. почта"
              />
              <SUP.SignupModalInput
                type="password"
                onChange={handleInputChange}
                name="password"
                value={regData.password}
                id="passwordFirst"
                placeholder="Пароль"
              />
              <SUP.SignupModalBtnEnter onClick={handleRegister}>
                Зарегистрироваться{" "}
              </SUP.SignupModalBtnEnter>
              <SUP.SignupModalFormGroup>
                <p>
                  Уже есть аккаунт?{" "}
                  <Link to={appRoutes.SIGNIN}><span>Войдите здесь</span></Link>
                </p>
              </SUP.SignupModalFormGroup>
            </SUP.SignupModalFormLogin>
          </SUP.SignupModalBlock>
        </SUP.SignupModal>
      </SUP.ContainerSignup>
    </SUP.WrapperSignupDiv>
  );
}
