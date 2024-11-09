import Body from "../../../_common/Body";

export default function IssueDetail() {
  return (
    <Body title={"제목란"} description={`{작성자}가 이슈를 등록했습니다 {0}일 전 · {0}개의 댓글`}>
      {/** BackGround Area Div */}
      <div className={`flex justify-between h-full overflow-scroll`}>
        {/** 내용 && 댓글 부모 Div */}
        <div className={`flex flex-col justify-between h-full w-full`}>
          {/** 내용 Div */}
          <div className={`text-sm bg-gray-100 border rounded-md px-2`}>asdsadsad 123213 123ss</div>
          {/** 댓글 Div */}
          <div className={`bg-gray-100 text-sm h-[30rem] rounded-md px-2 py-2 flex flex-col gap-8`}>
            {/** 댓글 아이템 Div */}
            <div className={`bg-gray-200 rounded-md  py-3 px-2 flex justify-between relative border-gray-300`}>
              {/** 닉네임 && 내용 부모 Div */}
              {/** 관리자 말풍선 */}
              <div>
                <div className={`font-semibold`}>{`닉네임: 처리자`}</div>
                <div className={`font-semibold`}>{`내용: 해결되었습니다.`}</div>
              </div>
              {/** 등록일 */}
              <div className={` flex flex-col items-center`}>
                등록일
                <p className={`text-gray-300 italic`}>2023-12-31</p>
              </div>
              <div className="absolute right-[-1.5px] bottom-[-15px] w-0 h-0 border-l-[20px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-gray-200"></div>
            </div>
            {/** 일반 유저 말풍선 */}
            <div className={`bg-white rounded-md  py-3 px-2 flex justify-between relative border-gray-300`}>
              {/** 닉네임 && 내용 부모 Div */}
              <div>
                <div className={`font-semibold`}>{`닉네임: 요청자`}</div>
                <div className={`font-semibold`}>{`내용: 감사합니다.`}</div>
              </div>
              {/** 등록일 */}
              <div className={` flex flex-col items-center`}>
                등록일
                <p className={`text-gray-300 italic`}>2023-12-31</p>
              </div>
              {/** 일반 유저 말풍선 */}
              <div className="absolute  left-[-1.5px] bottom-[-15px] w-2 h-2 border-l-[20px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-white"></div>
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
