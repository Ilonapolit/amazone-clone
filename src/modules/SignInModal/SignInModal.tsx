import { Modal } from "antd"

type SignInModalProps = {
    onCancel:() => void;
}

export  function SignInModal( {onCancel}: SignInModalProps) {
  return (
    <Modal onCancel={onCancel} open={true}>
SignInModal
    </Modal>
  )
}
