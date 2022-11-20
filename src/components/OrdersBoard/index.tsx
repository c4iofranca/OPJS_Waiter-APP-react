import { useState } from "react";
import { Order } from "../../types/Order";
import { api } from "../../utils/api";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";

import { toast } from "react-toastify";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order["status"]) => void;
}

export function OrdersBoard({
  icon,
  title,
  orders,
  onCancelOrder,
  onChangeOrderStatus,
}: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const newStatus =
      selectedOrder?.status === "WAITING" ? "IN_PRODUCTION" : "DONE";

    await api.patch(`orders/${selectedOrder?._id}`, { status: newStatus });

    toast.success(
      `O pedido da mesa ${selectedOrder?.table} teve o status alterado!`
    );
    setIsLoading(false);
    setIsModalVisible(false);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    onChangeOrderStatus(selectedOrder!._id, newStatus);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 300));
    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);
    setIsLoading(false);
    setIsModalVisible(false);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    onCancelOrder(selectedOrder!._id);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
        onChangeOrderStatus={handleChangeOrderStatus}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenModal(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
