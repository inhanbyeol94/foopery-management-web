export const authApi = {
  signIn: async function (loginId: string, password: string) {
    if (loginId && password) {
      return { loginId, password };
    } else {
      throw new Error("Not Exception Error");
    }
  },
};
