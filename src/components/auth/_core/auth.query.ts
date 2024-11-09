import { useMutation } from "@tanstack/react-query";
import { authApi } from "./auth.api";
import { selectCookie } from "./auth.cookies";

export const authQuery = {
  useSignIn: function () {
    const token = "Token321";
    return useMutation({
      mutationFn: (data: { loginId: string; password: string }) => authApi.signIn(data.loginId, data.password),
      onSuccess: (v) => {
        console.log(v);
        selectCookie.setCookie({
          name: "Token",
          value: token,
          option: "http://localhost:3000/auth",
        });
      },
      onError: (error: any) => {
        console.log(error);
      },
    });
  },
};
