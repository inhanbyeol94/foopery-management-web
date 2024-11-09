import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const selectCookie = {
  setCookie: function ({ name, value, option }: { name: string; value: string; option: any }) {
    cookies.set(name, value, option);
  },
};
