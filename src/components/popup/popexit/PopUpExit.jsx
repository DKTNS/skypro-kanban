import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../Styleds/lib/appRoutes";
import { useUser } from "../../../hooks/useUser";
import {
  Container,
  PopExitBlock,
  PopExites,
  PopExitFormGroup,
  PopExitNo,
  PopExitTtl,
  PopExitYes,
} from "./PopUpExit.styled";

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
              <PopExitYes
                onClick={() => {
                  logout();
                  navigate(appRoutes.SIGNIN);
                }}
              >
                Да, выйти{" "}
              </PopExitYes>
              <PopExitNo>
                <Link to={appRoutes.MAIN}>Нет, остаться </Link>
              </PopExitNo>
            </PopExitFormGroup>
          </span>
        </PopExitBlock>
      </Container>
    </PopExites>
  );
}
