import {
  // AppstoreOutlined,
  AccountBookFilled,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Monitor",
            icon: <AccountBookFilled />,
            key: "/dashboard",
          },
          {
            label: "Serie de tiempo",
            key: "/dashboard2",
            icon: <ShopOutlined />,
          },
          {
            label: "Producción",
            key: "/dashboard3",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Riego",
            key: "/dashboard4",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;