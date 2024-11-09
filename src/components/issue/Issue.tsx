import Body from "../../_common/Body";
import { Link } from "react-router-dom";

export default function Issue() {
  return (
    <Body title={"issue"} description={"버그, 개선 사항, 기능 추가 등 특정 문제를 추적하고 해결하기 위한 채널입니다."}>
      <div className={`py-5 h-full`}>
        <div className={`absolute top-[50%] left-[50%] text-blue-500 animate-spin text-[2rem]`}></div>
        <div className={`absolute bg-gray-100 opacity-30`}></div>
        <table className={`w-full text-sm rounded-md overflow-hidden`}>
          <thead>
            {/*아이디, 카테고리, 제목, 요청자, 처리자, 수정일 (모두 영어로)*/}
            <tr className={`text-gray-700 text-left border-b`}>
              <th className={`p-3 font-semibold`}>ID</th>
              <th className={`p-3 font-semibold`}>Category</th>
              <th className={`p-3 font-semibold `}>Title</th>
              <th className={`p-3 font-semibold sm:hidden`}>Requesters</th>
              <th className={`p-3 font-semibold sm:hidden`}>Handlers</th>
              <th className={`p-3 font-semibold sm:hidden`}>Modification Date</th>
              <th className={`p-3 font-semibold lg:hidden`}>Status</th>
            </tr>
            <tr className={`hover:bg-gray-50 transition duration-200`}>
              <td className={`p-3 text-gray-700`}>아이디</td>
              <td className={`p-3 text-gray-700`}>카테고리</td>
              <td className={`p-3 text-gray-700 cursor-pointer`}>
                <Link to={`/issue/:id`}>제목란</Link>
              </td>
              <td className={`p-3 text-gray-700 sm:hidden`}>요청자</td>
              <td className={`p-3 text-gray-700 sm:hidden`}>처리자</td>
              <td className={`p-3 text-gray-700 sm:hidden`}>2024-12-31</td>
              <td className={`p-3 text-gray-700 lg:hidden`}>상태</td>
            </tr>
          </thead>
        </table>
      </div>
    </Body>
  );
}
