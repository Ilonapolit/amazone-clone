// import { Modal,Form,Input,Button } from "antd"

// type SignInModalProps = {
//     onCancel:() => void;
// }

// export  function SignInModal( {onCancel}: SignInModalProps) {
//   return (
//     <Modal title="შესვლა" centered={true} 
//     onCancel={onCancel} 
//     open={true}
//      footer={
//       <Button form="signin" type="primary" htmlType="submit">შესვლა</Button>
//      }
//      >
//   <Form name="signin"  className="mt-3" autoComplete="off"
//   >
//     <Form.Item
//       label="Username"
//       name="username"
//       rules={[{ required: true, message: 'Please input your username!' }]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//       rules={[{ required: true, message: 'Please input your password!' }]}
//     >
//       <Input.Password />
//     </Form.Item>
//   </Form>
//     </Modal>
//   )
// }
import { Modal, Form, Input, Button } from "antd";

type SignInModalProps = {
  onCancel: () => void;
};

export function SignInModal({ onCancel }: SignInModalProps) {
  const onFinish = (values: any) => {
 
    console.log('Received values:', values);
  };

  return (
    <Modal
      title="შესვლა"
      centered={true}
      onCancel={onCancel}
      visible={true} 
      footer={null} 
    >
      <Form name="signin" className="mt-3" autoComplete="off" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            შესვლა
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

