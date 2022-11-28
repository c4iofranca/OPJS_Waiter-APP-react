import { Header } from "./components/Header";
import { Orders } from "./components/Orders";
import { GlobalStyles } from "./styles/GlobalStyles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DashboardControl } from "./components/DashboardControl";
import { useState } from "react";
import { PageDetails } from "./components/PageDetails";
import { Menu } from "./components/Menu";
import { Report } from "./components/Report";

export function App() {
  const [selectedTab, setSelectedTab] = useState("orders");

  function handleSelectTab(tab: string) {
    setSelectedTab(tab);
  }

  return (
    <>
      <GlobalStyles />
      <Header selectedTab={selectedTab} />
      <DashboardControl
        onSelectTab={handleSelectTab}
        selectedTab={selectedTab}
      />

      <PageDetails>
        {selectedTab === "orders" && <Orders />}
        {selectedTab === "menu" && <Menu />}
        {selectedTab === "report" && <Report />}
      </PageDetails>

      <ToastContainer position="bottom-center" />
    </>
  );
}
