import React, { useState } from "react";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Popconfirm,
  Modal,
  Button,
  Checkbox,
  Form,
  Input,
  Space,
  Tooltip,
  Avatar,
  Card,
} from "antd";

import {
  PlusOutlined,
  DeleteOutlined,
  FileTextOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const { Meta } = Card;
function Dashboard() {

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    onFinish();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          maxHeight: "40px",
          minHeight: "40px",
          background: "#1677ff",
        }}
      >
        <img
          style={{
            display: "block",
            height: "30px",
            left: "50%",
            opacity: 0.5,
            position: "absolute",
            top: "5px",

            width: "80px",
          }}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAA8CAMAAADWtUEnAAAAV1BMVEX///8jHyAjHyD///////////////////////////////////////////////////////////////////////////////////////////////////////98ygg7AAAAHHRSTlMAAQIQIC4wPUBQYHCAgpCcoLDAytDc4Ovw8fP+YuFlbAAAA8hJREFUeF7tmOuSnCAQhWe2CUHoGCSEkMT3f86sM2gfmYlLSqt2K+X5tcyKfPQVvPx/OnXq1Kl+fFXStwGFaRDoI/F1402+wN5kPxJgujPlaaDGu4YPxKeRicvAtUw0WzoO0I/g1VQGqiVwtzX8NY5Nxxxe1esWPlOQIhqw38cnQV2k2LzikjGOhwgTQgNiKEzTo5Tvg/R2Eo8Nwih6VGM22sLH6G1zORaQtx7aFiWxGaRLGyArceGzcUs8+A043JsBb2dqA8RMUvV4y4JxYGuMsWEcs9rmUxmSoiuw3aURsHlMHvmytIiHpbRj5k6oPSZFEgcfBohFU0G4P5eZMhxbrUYHu7WDybLTRwFiPqaW0hVKiQEHU145mG/DoA4CBA/Z7Y6BncKgg1kcDA9HOgzQgG2IYw4QgODBJ1lrIF0yVZuxhwEOsBpDPyVjDElB7gWq/DQgkqvLQjoKUGFw2SVblL9Zxn8uGdAVQ9MSE5keppsRFJiHEAbWOwEZm5SZYTmXZX6XhluoghjQoQE1eDu6caV+F2BZOGJCBx3rzjxT2WqGQob7rKyqfht3AXaFAHMw55pvNk4SAxqcgOncTUkEGmgXoF81ESRDH1EUquJrNCDD3wOeWLK3al+SkKxQH78yF6y4RFovJlewvQTVINPy0s60ZPHWYUH8pR4PDz3NSalnviA10F+giVjIYIup1gooma65AhxW75LciHpxJs98kYRDwYYSdL8grZHbAWs9eNgu5i3ywpKp8GUlTh2wAjiYa+RnvRMQPUxVU7NgXZ75NOzIQAXIJFYL8PNlPyDaAz1s0boJ+S5fsI0NEI6x7tT+EMCMl20lfGBd5KPSkB0+D5ZNkC1mNyBEvHgYts4PfCqujqYOu7A0lCisuwH71bsiNqZVO4i3Leg84hbMD7D318WYTtywHzDKeuIxBMRmZSc+eaSHiwyVZ/F4uB8QiwzENiZQfdQDJg9XYYry4iBz2q+dtaoioyWicK7DryAKHB6QnoFvXCbFGmu7c9R6dlBQuS4OGpZyGZsg8I0d8I3OZNhzrev1Xz994LnEV3dvLG3djPC9bMILrRU+EV+OAcTDZhBrVhEQFuv5T3cARErlv9+qzyYHAjJUnKG6TqFydRL9+QsGkTzE6FGAAQDVk9ghJPRUIrUo6w75JM0H2gT047ZwhwYrgp29jTJhJjCFOcBHEJ1W1yIdJu46/mpAepMwiJmUz/JR1Hj3ZO+qD2PyFpgns6a5X8eJVdru5ifwl5cJ8b11Ap6A76cT8AS8Xk/AfdqJdwL+AZ4nJzaBqOx2AAAAAElFTkSuQmCC"
          alt=""
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "row",
          height: "100%",
          padding: "8px 15px 0",
          whiteSpace: "nowrap",
        }}
      >
        {/* <div
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
        }}
      >
        Content
      </div> */}

        <div className="container">
          <div className="content">
            <div className="ant-card ant-card-bordered cardList css-9ntgx0">
              <div
                className="ant-card-head"
                style={{
                  marginBottom: "-1px",
                  padding: "0 24px",
                  color: "rgba(0, 0, 0, 0.88)",
                  fontWeight: 600,
                  fontSize: "16px",
                  background: "transparent",
                  borderBottom: "1px solid #f0f0f0",
                  borderRadius: "8px 8px 0 0",
                }}
              >
                <div
                  className="ant-card-head-wrapper"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="ant-card-head-title"
                    style={{
                      display: "inline-block",
                      flex: 1,
                      padding: "16px 0",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    List 1
                  </div>
                  <div
                    className="ant-card-extra"
                    style={{
                      marginInlineStart: "auto",
                      fontWeight: "normal",
                      fontSize: "14px",
                    }}
                  >
                    <Tooltip title="Add a card">
                      <Button
                        shape="circle"
                        icon={<PlusOutlined />}
                        onClick={showModal}
                      />
                    </Tooltip>
                    <Tooltip title="Delete this list">
                      <Popconfirm
                        title="Delete the list"
                        description="Are you sure to delete this list?"
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button shape="circle" icon={<DeleteOutlined />} />
                      </Popconfirm>
                    </Tooltip>
                    <Modal
                      title="Basic Modal"
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <Form
                        name="basic"
                        labelCol={{
                          span: 8,
                        }}
                        wrapperCol={{
                          span: 16,
                        }}
                        style={{
                          maxWidth: 600,
                        }}
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                        <Form.Item
                          label="Username"
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          label="Password"
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                        >
                          <Input.Password />
                        </Form.Item>

                        <Form.Item
                          name="remember"
                          valuePropName="checked"
                          wrapperCol={{
                            offset: 8,
                            span: 16,
                          }}
                        >
                          <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                          wrapperCol={{
                            offset: 8,
                            span: 16,
                          }}
                        >
                          <Button type="primary" htmlType="submit">
                            Submitt
                          </Button>
                        </Form.Item>
                      </Form>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="ant-card-body">
                <Card
                  style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <Tooltip title="View">
                      <Button type="primary" onClick={showModal}>
                      <FileTextOutlined key="view" />
      </Button>
                      
                    </Tooltip>,
                    <Tooltip title="Edit">
                      <EditOutlined key="edit" />
                    </Tooltip>,
                    <Tooltip title="Delete">
                      <Popconfirm
                        title="Delete the list"
                        description="Are you sure to delete this list?"
                        okText="Yes"
                        cancelText="No"
                      >
                        <DeleteOutlined key="delete" />
                      </Popconfirm>
                    </Tooltip>,
                  ]}
                >
                  <Meta
                    title="Card title"
                    description="This is the description"
                    avatar={
                      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                    }
                  />
                  {/* <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
                  <div
                    className="ant-avatar-group avatarGroup css-9ntgx0"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <span
                      style={{
                        borderColor: "#ffffff",
                        width: "40px",
                        height: "40px",
                        lineHeight: "38px",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      ></img>
                    </span>
                    <span
                      style={{
                        borderColor: "#ffffff",
                        width: "40px",
                        height: "40px",
                        lineHeight: "38px",
                        borderRadius: "50%",
                        background: "rgb(245, 106, 0)",
                        marginInlineStart: "-8px",
                        margin: 0,
                        padding: 0,
                        color: "#fff",
                        fontSize: "14px",
                        position: "relative",
                        display: "inline-block",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    >
                      <span
                        style={{
                          transform: "scale(1) translateX(-50%)",

                          left: "50%",
                          transformOrigin: "0 center",
                        }}
                      >
                        K
                      </span>
                    </span>
                    <span
                      style={{
                        borderColor: "#ffffff",
                        width: "40px",
                        height: "40px",
                        lineHeight: "38px",
                        borderRadius: "50%",
                        background: "rgb(253, 227, 207)",
                        color: "rgb(245, 106, 0)",
                        marginInlineStart: "-8px",
                        margin: 0,
                        padding: 0,
                        color: "#fff",
                        fontSize: "14px",
                        position: "relative",
                        display: "inline-block",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    >
                      <span
                        style={{
                          transform: "scale(1) translateX(-50%)",

                          left: "50%",
                          transformOrigin: "0 center",
                          color: "rgb(245, 106, 0)",
                        }}
                      >
                        +2
                      </span>
                    </span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default Dashboard;
