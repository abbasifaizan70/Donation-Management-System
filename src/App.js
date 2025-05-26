import React, { useState } from "react";
import { Layout, Typography, Divider, Row, Col, Card } from "antd";
import DonationList from "./components/DonationList";
import DonationForm from "./components/DonationForm";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#001529", padding: "0 2rem" }}>
        <Title level={3} style={{ color: "white", margin: 0, lineHeight: "64px", textAlign: "center" }}>
          🌍 Donation Management
        </Title>
      </Header>

      <Content style={{ padding: "2rem" }}>
        <Row justify="center" gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            <Card title="Add a New Donation Item">
              <DonationForm onSuccess={() => setRefreshKey((prev) => prev + 1)} />
            </Card>

            <Divider />

            <Card title="All Donation Items" >
              <DonationList key={refreshKey} />
            </Card>
          </Col>
        </Row>
      </Content>

      <Footer style={{ textAlign: "center", background: "#f0f2f5" }}>
        © {new Date().getFullYear()} Donation Portal | Built By Faizan Abbasi
      </Footer>
    </Layout>
  );
}

export default App;
