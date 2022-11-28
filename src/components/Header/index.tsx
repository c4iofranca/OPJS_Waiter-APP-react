import logo from "../../assets/images/logo.svg";
import { setPageDetails } from "../../utils/setPageDetails";
import { Container, Content } from "./styles";

interface HeaderProps {
  selectedTab: string;
}

export function Header({ selectedTab }: HeaderProps) {
  const headerInfo = setPageDetails(selectedTab);
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>{headerInfo.h1}</h1>
          <h2>{headerInfo.h2}</h2>
        </div>

        <img src={logo} alt="WAITERAPP" />
      </Content>
    </Container>
  );
}
