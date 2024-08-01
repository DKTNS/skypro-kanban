import { appRoutes } from "../../lib/appRoutes";
import { Link, useNavigate } from "react-router-dom";
import * as SI from "./SigninPage.styled";
import "./signin.css";
import { useState } from "react";
import { signIn } from "../../api";
import { useUser } from "../../Hooks/useUser";

export default function SigninPage() {
  const {login} = useUser();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ login: "", password: "" });
  const [error, setError] = useState(null); // Состояние для хранения ошибок
  
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setLoginData({
      ...loginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null); // Сбрасываем ошибку перед новым запросом
  
    try {
      const response = await signIn(loginData); // Используем loginData для входа
      console.log("Response:", response); // Логируем ответ для отладки
      if (response && response.user && response.user.token) { // Проверяем наличие токена
        localStorage.setItem('token', response.user.token); // Сохраняем токен
        console.log("Токен успешно сохранен:", response.user.token);
        login(response.user.token); // Вызываем функцию login из useUser, если она есть
        navigate(appRoutes.MAIN); // Перенаправляем на главную страницу
      } else {
        setError("Не удалось получить токен."); // Устанавливаем сообщение об ошибке
      }
    } catch (error) {
      console.error("Ошибка при входе:", error);
      setError(error.message); // Устанавливаем сообщение об ошибке
    }
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

              <SI.SigninModalBtnEnter to={appRoutes.MAIN} onClick={handleLogin}>
              Войти
              </SI.SigninModalBtnEnter>
              {error && <p style={{ color: 'red' }}>{error}</p>} {/* Отображаем ошибку, если она есть */}
              <SI.SigninModalFormGroup>
                Нужно зарегистрироваться?

                <Link to={appRoutes.SIGNUP}>Регистрируйтесь здесь</Link>
              </SI.SigninModalFormGroup>
            </SI.SigninModalFormLogin>
          </SI.SigninModalBlock>
        </SI.SigninModal>
      </SI.ContainerSigninDiv>
    </SI.WrapperSigninDiv>
  );
}
