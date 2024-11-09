/* eslint-disable */

import Body from "../../_common/Body";

export default function DashBoardView() {
  return (
    <Body title={"321"} description={"321"}>
      <div className={`py-5 h-full `}>
        <div className={`absolute top-[50%] left-[50%] text-blue-500 animate-spin text-[2rem]`}></div>
        <div className={`absolute bg-gray-100 opacity-30`}></div>
      </div>
    </Body>
  );
}
