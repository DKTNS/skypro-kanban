import { Container } from "../../Styled/Common/Common.styled";
import * as MC from "./MainContent.style";

export default function MainContent({ children }) {
  return (
    <MC.MainContentMain>
      <Container>
        <MC.MainContentMainBlock>
          <MC.MainContentMainContent>{children}</MC.MainContentMainContent>
        </MC.MainContentMainBlock>
      </Container>
    </MC.MainContentMain>
  );
}
