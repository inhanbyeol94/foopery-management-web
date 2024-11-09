import React, { useState } from "react";
import { IoLockClosed, IoPerson } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { inputValidator } from "../../../_functions/loginForm-validator";
import { authQuery } from "../_core/auth.query";

export default function AuthView() {
  /** useForm */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data: any) => console.log(data);

  /** useState */
  const [data, setData] = useState<{ loginId: string; password: string }>({ loginId: "", password: "" });
  /** Functions */
  const { mutate: signIn } = authQuery.useSignIn();
  function signInHandler() {
    signIn(data);
  }
  function eventHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setData((e) => ({ ...e, [name]: value }));
  }

  return (
    /** Div - All BackGround */
    <form className={"bg-[#f8fafb] lg:min-h-screen flex items-center justify-center"} onSubmit={handleSubmit(onSubmit)}>
      {/** Div - Login Box */}
      <div className={"flex sm:flex-col sm:h-[100svh] sm:w-full sm:rounded-none bg-[#ffffff] h-[28rem] w-[45rem] rounded-2xl overflow-hidden shadow-md"}>
        {/** Left Item Div */}
        <div className={"sm:w-full sm:py-5 bg-[#3c81f4] min-w-[17rem] flex items-center justify-center flex-col lg:gap-[0.5rem]"}>
          <img src="/logo.png" alt="GitHub Logo" className="w-[9rem]" />
          <p style={{ fontSize: "25px", fontWeight: "800", color: "white" }} className={"tracking-[0.3rem] uppercase"}>
            foopery
          </p>
          <p style={{ color: "#83b9ff" }}>Management App</p>
        </div>
        {/** Right Item Div */}
        <div className={"flex flex-col justify-between w-full sm:h-full py-[2rem] sm:py-[1rem] "}>
          {/** Right Item Top Div */}
          <div className={"flex flex-col items-center gap-[0.5rem]"}>
            <p className={"font-bold text-[23px] text-[#4f545d] "}>관리자 로그인</p>
            <p className={"text-[#b0b3ba] font-medium text-[0.8rem] "}>로그인 정보 입력</p>
          </div>
          {/** Right Item Middle Div */}
          <div className={"flex flex-col gap-4 px-10 h-[42rem] justify-center sm:h-[15rem]"}>
            {/**  ID Div */}
            <div className={"flex flex-col gap-[0.5rem] "}>
              <p style={{ fontWeight: "500" }}>아이디</p>
              {/** Icon Div */}
              <div className={"relative"}>
                <IoPerson className={"absolute left-[0.3rem] top-[0.7rem] w-[1.5rem]"} />
                <input
                  className={`h-[2.3rem] w-full rounded-[0.5rem] shadow-md bg-[#e8f0fd] pl-[2rem] ${errors.loginId ? "border-red-500" : ""}`}
                  type={"text"}
                  onInput={eventHandler}
                  {...register("loginId", inputValidator.loginId)}
                />
              </div>
              <div className={`h-[1rem]`}>{errors.loginId && <p className="text-red-500 text-xs">{(errors.loginId as { message: string }).message}</p>}</div>
            </div>
            {/**  Password Div */}
            <div className={"flex flex-col gap-[0.5rem]"}>
              <p style={{ fontWeight: "500" }}>패스워드</p>
              {/** Icon Div */}
              <div className={"relative"}>
                <IoLockClosed className={"absolute left-[0.3rem] top-[0.6rem] w-[1.5rem]"} />
                <input
                  type={"password"}
                  onInput={eventHandler}
                  className={`h-[2.3rem] w-full rounded-[0.5rem] pl-[2rem] bg-[#e8f0fd] shadow-md ${errors.password ? "border-red-500" : ""}`}
                  {...register("password", inputValidator.password)}
                />
              </div>
              <div className={`h-[1rem]`}>{errors.password && <p className="text-red-500 text-xs">{(errors.password as { message: string }).message}</p>}</div>
            </div>
          </div>
          {/** Button Div */}
          <div className={"flex items-end justify-center px-10 lg:flex lg:w-full lg:h-[20vh] sm:h-full sm:items-center"}>
            <input
              className={"bg-[#3c81f4] w-full h-[2.5rem] rounded-[0.5rem] font-bold text-[#ffffff] hover:bg-blue-700 transition-colors duration-500 shadow-md cursor-pointer"}
              type={"submit"}
              value={"로그인"}
              onClick={signInHandler}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
