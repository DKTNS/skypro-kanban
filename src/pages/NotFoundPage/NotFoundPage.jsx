import { appRoutes } from "../../lib/appRoutes";
import { Link } from "react-router-dom";
import * as NF from "./NotFoundPage.styled";

export default function NotFoundPage() {
  return (
    <NF.BodyNfp>
      <NF.ErrorContainer>
        <NF.H1Font> 404 </NF.H1Font>
        <NF.p>Oops! The page you're looking for is not here.</NF.p>
        <Link to={appRoutes.MAIN}> Go Back to Home</Link>
      </NF.ErrorContainer>
    </NF.BodyNfp>
  );
}
