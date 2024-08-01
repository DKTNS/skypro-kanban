
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../Hooks/useUser";
import * as S from "./PopUpExit.styled";
import { appRoutes } from "../../../lib/appRoutes";


export default function PopUpExit() {
  const { logout } = useUser();
  const navigate = useNavigate();
  return (
    <div className="pop-exit" id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitYes
                onClick={() => {
                  logout();
                  navigate(appRoutes.SIGNIN);
                }}
                id="exitYes"
              >
                Да, выйти
              </S.PopExitYes>
              <Link to={appRoutes.MAIN}>
                <S.ButtonNo>
                  <S.PopExitNo id="exitNo">Нет, остаться</S.PopExitNo>
                </S.ButtonNo>
              </Link>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </div>
  );
}
