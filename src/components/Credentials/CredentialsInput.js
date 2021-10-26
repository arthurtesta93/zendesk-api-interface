import { Form, Input } from "antd";

function CredentialsInput({ onChangeEmail, onChangePassword }) {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <div
        style={{
          margin: "16px 0",
          fontSize: "32px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Zendesk API Interface
      </div>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your Zendesk agent email" },
        ]}
        style={{
          margin: "16px",
          fontSize: "32px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Input onChange={(e) => onChangeEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Zendesk agent password",
          },
        ]}
        style={{
          margin: "16px 0",
          fontSize: "32px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Input.Password onChange={(e) => onChangePassword(e.target.value)} />
      </Form.Item>
    </Form>
  );
}

export default CredentialsInput;
