import { useNavigate } from "react-router-dom";
import * as S from "./PopUpExit.styled";
import { appRoutes } from "../../../lib/appRoutes";
import { useUser } from "../../../Hooks/useUser";



export default function PopUpExit() {
  const { logout } = useUser();
  const navigate = useNavigate();
  return (
    <PopExites>
    <Container>
        <PopExitBlock>
            <PopExitTtl>
                <h2>Выйти из аккаунта?</h2>
            </PopExitTtl>
            <span>
                <PopExitFormGroup>
                    <PopExitYes onClick={() => {
                        logout();
                        navigate(appRoutes.SIGNIN);
                    }}>
                        Да, выйти{" "}
                    </PopExitYes>
                    <PopExitNo >
                        <Link to={appRoutes.MAIN}>
                            Нет, остаться{" "}
                        </Link>
                    </PopExitNo>
                </PopExitFormGroup>
            </span>
        </PopExitBlock>
    </Container>
</PopExites>
  );
}
