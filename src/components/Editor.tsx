import Body from "../_common/Body";
import { LiveEditor, LiveProvider } from "react-live";
import { themes } from "prism-react-renderer";
import React, { useEffect, useState } from "react";

function Editor() {
  /** useState */
  const [data, setData] = useState<{ title: string; code: string }>({ title: "", code: "" });
  useEffect(() => {
    document.title = `You Click ${data} times`;
  });
  /** Functions */
  const eventHandler = (title: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, title: title.target.value });
    console.log(title.target.value);
  };
  function buttonHandler() {
    console.log(`Button Click Console :`, data.title);
  }

  function codeHandler(code: string) {
    setData({ ...data, code: code });
    console.log(code);
  }

  return (
    <Body title={"editor"} description={"this Editor"}>
      {/** 라벨태그와 에디터 영역 Div */}
      <div className={"flex flex-col h-full flex-1 gap-4 overflow-hidden"}>
        {/** Label Tag 와 Button Tag 의 부모 Div */}
        <div className={`flex flex-col gap-2`}>
          <h5 className={`text-sm font-semibold text-gray-600 uppercase`}>command</h5>
          <div className={"flex justify-between items-center gap-3"}>
            <input value={data.title} onChange={(title) => eventHandler(title)} type={"text"} className={"rounded-[0.5rem] w-full text-sm px-5 py-[0.5rem] border-[1px]"} />
            <button
              onClick={() => buttonHandler()}
              className={"bg-blue-500 text-white rounded-[0.5rem] text-sm py-[0.5rem] hover:bg-gray-400 transition duration-500 min-w-[5rem] border-[1px]"}
            >
              생성
            </button>
          </div>
        </div>
        {/** React - Live Code Editor Div */}
        <div className={`flex flex-col gap-2 h-full overflow-hidden  flex-1`}>
          <h5 className={`text-sm font-semibold text-gray-600 uppercase`}>code editor</h5>
          <div className={`flex flex-col overflow-hidden h-full flex-1 `}>
            <LiveProvider code={data.code} theme={themes.oneLight}>
              <LiveEditor onChange={(code) => codeHandler(code)} className={"live-editor h-full overflow-auto flex-1"} style={{ fontSize: "12px" }} />
            </LiveProvider>
          </div>
        </div>
      </div>
    </Body>
  );
}

export default Editor;
