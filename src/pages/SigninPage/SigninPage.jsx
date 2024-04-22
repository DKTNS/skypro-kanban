import { appRoutes } from "../../lib/appRoutes";
import { Link } from "react-router-dom";
import * as SI from "./SigninPage.styled";
import "./signin.css";

export default function SigninPage({ login }) {
  return (
    <SI.WrapperSigninDiv>
      <SI.ContainerSigninDiv>
        <SI.SigninModal>
          <SI.SigninModalBlock>
            <SI.SigninModalTtl>
              <h2>Вход</h2>
            </SI.SigninModalTtl>

            <SI.SigninModalFormLogin>
              <input
                className="modal__input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <input
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />

              <SI.SigninModalBtnEnter onClick={login}>
                Войти
              </SI.SigninModalBtnEnter>

              <SI.SigninModalFormGroup>
                <p>Нужно зарегистрироваться?</p>

                <span>Регистрируйтесь здесь</span>
              </SI.SigninModalFormGroup>
            </SI.SigninModalFormLogin>
          </SI.SigninModalBlock>
        </SI.SigninModal>
      </SI.ContainerSigninDiv>
    </SI.WrapperSigninDiv>
  );
}
