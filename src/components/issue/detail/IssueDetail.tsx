import Body from "../../../_common/Body";
import "@mdxeditor/editor/style.css";
import Editor from "../../../_common/Editor";
import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

export default function IssueDetail() {
  /* UseState */
  const [value, setValue] = useState<any>("**Hello world!!!**");
  // function changeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
  //   setValue(e.target.value);
  // }
  return (
    <Body title={"제목란"} description={`{작성자}가 이슈를 등록했습니다 {0}일 전 · {0}개의 댓글`}>
      {/** BackGround Area Div */}
      <div className={`flex justify-between h-full overflow-auto gap-10`}>
        {/** 내용 && 댓글 부모 Div */}
        <div className={`flex flex-col justify-between h-full w-full `}>
          {/** 내용 Div */}
          <div className={`text-sm bg-white px-2`}>asdsadsad 123213 123ss</div>
          {/** 댓글 배경 Div */}
          <div className={` text-sm px-2 py-2 flex flex-col gap-8`}>
            {/** 댓글 아이템들 Div */}
            <div className={` h-auto flex gap-5`}>
              {/** 댓글 프로필이미지 Div */}
              <div className={`flex-none flex-col items-center justify-center pl-1`}>
                <img
                  className={` w-[2.5rem] aspect-square rounded-full cursor-pointer`}
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSyoumS-w9MICsbUAy3VOMDsecUcgNaqAGA&s"}
                />
              </div>
              {/**  댓글 이름&&등록일&& 내용 부모 Div*/}
              <div className={`flex flex-col gap-1 flex-grow  `}>
                {/** 댓글 이름 && 등록일 Div*/}
                <div className={`flex gap-5 `}>
                  <p className={`text-[#6b7076] font-semibold`}>Jone Wick</p>
                  <p className={`text-[#6b7076] font-semibold`}>3 days ago</p>
                </div>
                {/** 댓글 내용 Div */}
                <div className={`w-[100vh] break-words text-gray-800`}>
                  dasd3asdasdasasdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3sdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdasasdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasda3asdasdasdasd3asdasdasdasdsdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd
                </div>
              </div>
            </div>
            {/*  2번째 댓글 */}
            {/** 댓글 아이템들 Div */}
            <div className={` h-auto flex gap-5 `}>
              {/** 댓글 프로필이미지 Div */}
              <div className={`flex-none flex-col items-center justify-center pl-1`}>
                <img className={` w-[2.5rem] aspect-square rounded-full`} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSyoumS-w9MICsbUAy3VOMDsecUcgNaqAGA&s"} />
              </div>
              {/**  댓글 이름&&등록일&& 내용 부모 Div*/}
              <div className={`flex flex-col gap-1 flex-grow `}>
                {/** 댓글 이름 && 등록일 Div*/}
                <div className={`flex gap-5 `}>
                  <p className={`text-[#6b7076] font-semibold`}>Jone Wick</p>
                  <p className={`text-[#6b7076] font-semibold`}>3 days ago</p>
                </div>
                {/** 댓글 내용 Div */}
                <div className={` w-[100vh] break-words text-gray-800 `}>
                  3asdasdasdasd3asdasdasdasd3asdasdasdasd3ascssdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3sdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdasasdasdasdasd3asdasdasdasd3asdasdassdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasda3asdasdasdasd3asdasdasdasdsdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd3asdasdasdasd
                </div>
              </div>
            </div>
            {/** Editor & Button Div */}
            <div className={`flex flex-col gap-3`}>
              {/* MDX Editor */}
              {/*<Editor />*/}
              <div className="w-full" data-color-mode={"light"}>
                <MDEditor value={value} onChange={setValue} preview={"edit"} />
                {/*<MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />*/}
              </div>
              {/** Button Div */}
              <div className={`flex justify-end items-center`}>
                <button className={`bg-gray-50 w-[5rem] h-[2rem] border rounded-md flex items-center justify-center hover:bg-gray-200 duration-500 `}>작성</button>
              </div>
            </div>
          </div>
        </div>
        {/** 상태창 Div */}
        <div className={`text-gray-700 w-[30rem] h-full pl-5 `}>
          {/** 상태창 아이템들 Div */}
          <div className={`bg-gray-50 p-5 rounded-md shadow-md flex flex-col gap-5`}>
            {/** 요청자 Div */}
            <div className={`px-4 flex flex-col gap-2`}>
              <div className={`font-semibold text-sm`}>Requesters</div>
              <div className={`  border-b px-2 pb-1 text-sm`}>요청자</div>
            </div>
            {/** 처리자 Div */}
            <div className={`px-4 flex flex-col gap-2`}>
              <div className={`font-semibold text-sm`}>Handlers</div>
              <div className={`  border-b px-2 pb-1 text-sm`}>처리자</div>
            </div>
            {/** 태그 Div */}
            <div className={`px-4 flex flex-col gap-2`}>
              <div className={`font-semibold text-sm`}>Tags</div>
              <div className={` border-b px-2 pb-1 text-sm`}>귀멸의 칼날</div>
            </div>
            {/** 프로젝트 Div */}
            <div className={`px-4 flex flex-col gap-2`}>
              <div className={`font-semibold text-sm`}>Project</div>
              <div className={`border-b px-2 pb-1 text-sm`}>Prac</div>
            </div>
            {/** 요청일 Div */}
            <div className={`px-4 flex flex-col gap-2`}>
              <div className={`font-semibold text-sm`}>요청일</div>
              <div className={`border-b px-2 pb-1 text-sm`}>YYYY-MM-DD hh:mm:ss</div>
            </div>
            {/** 마감예상일 Div */}
            <div className={`px-4 flex flex-col gap-2`}>
              <div className={`font-semibold text-sm`}>마감예상일</div>
              <div className={`border-b px-2 pb-1 text-sm`}>YYYY-MM-DD hh:mm:ss</div>
            </div>
            {/** 마감일 Div */}
            <div className={`px-4 flex flex-col gap-2`}>
              <div className={`font-semibold text-sm`}>마감일</div>
              <div className={`border-b px-2 pb-1 text-sm`}>YYYY-MM-DD hh:mm:ss</div>
            </div>
            {/** 상태 Div */}
            <div className={`px-4 flex flex-col gap-2`}>
              <div className={`font-semibold text-sm`}>Status</div>
              <div className={`border-b px-2 pb-1 text-sm`}>진행중</div>
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
}

/** Right Item Div */
