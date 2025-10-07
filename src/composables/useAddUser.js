import { ref } from "vue";
import { createUser } from "@/services/UserService";

export function useAddUser() {
  const userNameInput = ref("");
  const userPhoneInput = ref("");
  const userEmailInput = ref("");
  const addUser = async () => {
    console.log("clicked");
    if (
      userNameInput.value !== "" &&
      userEmailInput.value !== "" &&
      userPhoneInput.value !== ""
    ) {
      const newUser = {
        name: userNameInput.value,
        email: userEmailInput.value,
        phone: userPhoneInput.value,
      };
      try {
        const { data, error } = await createUser(newUser);
        console.log("response:", data, error);
        if (!error) {
          userNameInput.value = "";
          userEmailInput.value = "";
          userPhoneInput.value = "";
          alert("user registred");
        } else {
          console.log("error:", error);
        }
      } catch (e) {
        console.log("catch error:", e);
      }
    }
  };
  return { userNameInput, userPhoneInput, userEmailInput, addUser };
}
