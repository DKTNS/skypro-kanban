import { useState } from "react";
import { signUp } from "../../api";
import { appRoutes } from "../../lib/appRoutes";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../components/Hooks/useUser";

export default function SignupPage() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [data, setData] = useState({
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
    await signUp(data)
      .then((data) => {
        login(data.user);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        alert(error.message + ": попробуйте повторить запрос");
      });
  };
  return (
    <div>
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" action="#">
              <input
                className="modal__input first-name"
                type="text"
                onChange={handleInputChange}
                name="first-name"
                id="first-name"
                value={regData.name}
                placeholder="Имя"
              />
              <input
                className="modal__input login"
                type="text"
                onChange={handleInputChange}
                name="login"
                id="loginReg"
                value={regData.login}
                placeholder="Эл. почта"
              />
              <input
                className="modal__input password-first"
                type="password"
                onChange={handleInputChange}
                name="password"
                value={regData.password}
                id="passwordFirst"
                placeholder="Пароль"
              />
              <button
                onClick={handleRegister}
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter"
              >
                <a href="../main.html">Зарегистрироваться</a>{" "}
              </button>
              <div className="modal__form-group">
                <p>
                  Уже есть аккаунт?{" "}
                  <Link to={appRoutes.SIGNIN}>Войдите здесь</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
