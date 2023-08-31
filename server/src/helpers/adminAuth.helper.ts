import { adminDetails } from "../config/admin.config";
import { adminAuth } from "../types/adminAuth";

export const doLogin = (details: adminAuth) => {
  if (details.email && details.password) {
    if (
      details.email === adminDetails.email &&
      details.password === adminDetails.password
    ) {
      return {
        email: details.email,
        accessToken: "",
        message: "logged In successfully",
      };
    } else {
      throw { error: " Invalid username or passowrd " };
    }
  } else {
    throw { error: "'Invalid credentials'" };
  }
};
