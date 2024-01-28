import { SignUpFormValue } from "../SignUpModal";
import { publicAxios } from "../../../utils/publicAxios";

export function useSignUpModal() {
  async function SignUpUser(values: SignUpFormValue) {
    const response = await publicAxios.post("/auth/register", values);
    console.log(response.data)
  }
  return {SignUpUser};
}
