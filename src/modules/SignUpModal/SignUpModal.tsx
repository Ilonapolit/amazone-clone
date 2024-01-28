import { Modal, Form, Input, Button } from "antd";
import { publicAxios } from "../../utils/publicAxios";
type SignUpModalProps = {
  onCancel: () => void;
};

type SignUpFormValue = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
  "repeat-password": string;
};

export function SignUpModal({ onCancel }: SignUpModalProps) {
  const [form] = Form.useForm();

  function onFinish(values: SignUpFormValue) {
    if (values.password !== values["repeat-password"]) {
     form.setFields([
      {
        name:"repeat-password",
        errors:["incorrect password"]
      },
     ]);
     return;
    }
  }

  return (
    <Modal
      title="რეგისტრაცია"
      centered={true}
      onCancel={onCancel}
      visible={true} // Use `visible` instead of `open`
      footer={
        <Button form="signup" type="primary" htmlType="submit">
          რეგისტრაცია
        </Button>
      }
    >
      <Form<SignUpFormValue>
        name="signup"
        className="mt-3"
        autoComplete="off"
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          label="Name"
          name="first_name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone_number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Repeat Password"
          name="repeat-password"
          rules={[{ required: true, message: 'Please repeat your password!' }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
}
