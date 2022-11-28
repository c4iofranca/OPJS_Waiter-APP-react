interface HeaderInfo {
  h1: string;
  h2: string;
}

export function setPageDetails(tab: string) {
  const info: Record<string, HeaderInfo> = {
    orders: {
      h1: "Pedidos",
      h2: "Acompanhe os pedidos dos clientes",
    },
    menu: {
      h1: "Cardápio",
      h2: "Gerencie os produtos do cardápio",
    },
    report: {
      h1: "Relatório de Vendas",
      h2: "Consulte o seu histórico de vendas por períodos"
    }
  };

  return info[tab] ?? info["orders"];
}
