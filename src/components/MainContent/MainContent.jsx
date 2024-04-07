import { Container } from "../../Styled/Common/Common.styled";


export default function MainContent({ children }) {
  return (
    <main className="main">
      <Container>
        <div className="main__block">
          <div className="main__content">{children}</div>
        </div>
      </Container>
    </main>
  );
}
