import { useNavigate } from "react-router-dom";
import { useUser } from "../../components/Hooks/useUser";
import * as EP from "./ExitPage.styled";

export default function ExitPage() {
  const {logout} = useUser();
  const navigate = useNavigate();
    return (
        <div className="pop-exit" id="popExit">
        <EP.PopExitContainer>
          <EP.PopExitBlock>
            <EP.PopExitTtl>
              <h2>Выйти из аккаунта?</h2>
            </EP.PopExitTtl>
            <form className="pop-exit__form" id="formExit" action="#">
              <EP.PopExitFormGroup>
                <EP.PopExitYes
                  onClick={() => {
                    logout();
                    navigate(appRoutes.SIGNIN);
                  }}
                  id="exitYes"
                >
                  Да, выйти
                </EP.PopExitYes>
                <Link to={appRoutes.MAIN}>
                  <EP.ButtonNo>
                    <EP.PopExitNo id="exitNo">Нет, остаться</EP.PopExitNo>
                  </EP.ButtonNo>
                </Link>
              </EP.PopExitFormGroup>
            </form>
          </EP.PopExitBlock>
        </EP.PopExitContainer>
      </div>
    )
}