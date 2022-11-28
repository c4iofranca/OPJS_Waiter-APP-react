import { Container } from "./styles";

interface DashboardControlProps {
  onSelectTab: (tab: string) => void;
  selectedTab: string;
}

export function DashboardControl({
  onSelectTab,
  selectedTab,
}: DashboardControlProps) {
  return (
    <Container>
      <button
        className={selectedTab === "orders" ? "active" : ""}
        onClick={() => onSelectTab("orders")}
      >
        Pedidos
      </button>
      <button
        className={selectedTab === "menu" ? "active" : ""}
        onClick={() => onSelectTab("menu")}
      >
        Cardápio
      </button>

      <button
        className={selectedTab === "report" ? "active" : ""}
        onClick={() => onSelectTab("report")}
      >
        Relatório de Vendas
      </button>
    </Container>
  );
}
