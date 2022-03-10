import { Form, Input, Button, Checkbox } from "antd";

type LoginFormProps = {
  onFinishFailed: (values: any) => void;
  onFinish: (errorIfo: any) => void;
};

export const LoginForm = ({ onFinish, onFinishFailed }: LoginFormProps) => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Emial"
        name="email"
        style={{width: 500}}
        rules={[
          { required: true, message: "Please input your email!" },
          {
            pattern:
             /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
             message: 'Email is invalid'
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        style={{width: 500}}
        name="password"
        rules={[{ required: true, message: "Please input your password!" },
              {
            pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
             message: 'Password must be 1 uppercase, 1 lowercase, 1 special character and min 8 characters'
          },]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
