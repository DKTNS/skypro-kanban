import * as SI from "./SigninPage.styled";
import "./SignIn.css";
import { appRoutes } from "../../lib/appRoutes";

export default function SigninPage() {
  return (
    <SI.WrapperSigninDiv>
      <SI.ContainerSigninDiv>
        <SI.SigninModal>
          <SI.SigninModalBlock>
            <SI.SigninModalTtl>
              <h2>Вход</h2>
            </SI.SigninModalTtl>
            <SI.ModalFormLogin>
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

              <SI.SigninModalBtnEnter>Войти</SI.SigninModalBtnEnter>

              <SI.SigninModalFormGroup>
                <p>Нужно зарегистрироваться?</p>

                <span>Регистрируйтесь здесь</span>
              </SI.SigninModalFormGroup>
            </SI.ModalFormLogin>
          </SI.SigninModalBlock>
        </SI.SigninModal>
      </SI.ContainerSigninDiv>
    </SI.WrapperSigninDiv>
  );
}
