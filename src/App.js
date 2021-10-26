import "./App.css";
import { useState } from "react";
import Interface from "./components/Interface/Interface";
import CredentialsInput from "./components/Credentials/CredentialsInput";

import logo from "./Horizontal_White.png";

import { Layout, Menu } from "antd";
import { LaptopOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  const [selectedBrand, setSelectedBrand] = useState("opendock");
  const [selectedInterface, setSelectedInterface] = useState("update");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (input) => {
    setEmail(input);
  };
  const onChangePassword = (input) => {
    setPassword(input);
  };
  return (
    <Layout>
      <Header className="header">
        <img className="logo" src={logo} alt={"logo"} />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedInterface}
          onClick={(e) => setSelectedInterface(e.key)}
        >
          <Menu.Item key="update">Ticket Update</Menu.Item>
          <Menu.Item key="delete">Ticket Delete</Menu.Item>
          <Menu.Item key="info">Ticket Information</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            selectedKeys={selectedBrand}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            onClick={(e) => setSelectedBrand(e.key)}
          >
            <SubMenu key="sub1" icon={<LaptopOutlined />} title="Product list">
              <Menu.Item key="opendock">Opendock</Menu.Item>
              <Menu.Item key="rfpguide">RFP Guide</Menu.Item>
              <Menu.Item key="kamion">Kamion</Menu.Item>
              <Menu.Item key="saas-support">Saas Support</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <CredentialsInput
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
          />
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Interface
              selectedBrand={selectedBrand}
              selectedInterface={selectedInterface}
              email={email}
              password={password}
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
