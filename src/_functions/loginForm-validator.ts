export const inputValidator = {
  loginId: {
    required: "아이디를 입력해주세요.",
    pattern: {
      value: /^[a-z0-9]{5,}$/,
      message: "아이디는 영문 소문자와 숫자를 조합하여 최소 5자 이상 입력해주세요.",
    },
  },
  password: {
    required: "비밀번호를 입력해주세요.",
    pattern: {
      value: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@%*#^?&\\\-_=+]).{8,16}$/,
      message: "비밀번호는 영문, 숫자, 그리고 특수문자를 포함하여 최소 8자 이상으로 설정해주세요.",
    },
  },
};
