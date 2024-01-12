import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";

const BadgeCart = ({ cartState, showDrawer }) => {
  return (
    <Badge count={cartState.cartItems.length}>
      <ShoppingCartOutlined style={{ fontSize: "30px" }} onClick={showDrawer} />
    </Badge>
  );
};

export default BadgeCart;
