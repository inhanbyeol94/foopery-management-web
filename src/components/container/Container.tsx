/*eslint-disable*/
import Body from "../../_common/Body";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Command() {
  return (
    <Body title={"container"} description={"상현의 3 아카자"}>
      <div className={`py-5 h-full`}>
        <div className={`absolute top-[50%] left-[50%] text-blue-500 animate-spin text-[2rem]`}></div>
        <div className={`absolute bg-gray-100 opacity-30`}></div>
        <table className={`w-full text-sm rounded-md overflow-hidden`}>
          <thead>
            <tr className={`text-gray-700 text-left border-b`}>
              <th className={`p-3 font-semibold`}>Type</th>
              <th className={`p-3 font-semibold`}>Name</th>
              <th className={`p-3 font-semibold sm:hidden`}>API Docs</th>
              <th className={`p-3 font-semibold sm:hidden`}>Management</th>
              <th className={`p-3 font-semibold sm:hidden`}>Service</th>
              <th className={`p-3 font-semibold sm:hidden`}>GitHub</th>
              <th className={`p-3 font-semibold sm:hidden`}>Developer</th>
              <th className={`p-3 font-semibold sm:hidden`}>Health Check</th>
              <th className={`p-3 font-semibold`}>Status</th>
            </tr>
            <tr className={`hover:bg-gray-50 transition duration-200`}>
              <td className={`p-3 text-gray-700`}>
                <img className={`w-5`} src={`https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png`} />
              </td>
              <td className={`p-3 text-gray-700 cursor-pointer`}>
                <Link to={`/container/:id`}>보일러플레이트</Link>
              </td>
              <td className={`p-3 sm:hidden`}>
                <a href={`https://boilerplate-dev-api.foopery.com/api-docs`} className={`text-blue-500 underline`}>
                  https://boilerplate-dev-api.foopery.com/api-docs
                </a>
              </td>
              <td className={`p-3 sm:hidden`}>https://boilerplate-dev-admin.foopery.com</td>
              <td className={`p-3 sm:hidden`}>https://boilerplate-dev.foopery.com</td>
              <td className={`p-3 sm:hidden`}>https://github.com/inhanbyeol94/test-project</td>
              <td className={`p-3 sm:hidden`}>inhanbyeol</td>
              <td className={`p-3 flex gap-1 justify-center items-center pt-6 sm:hidden`}>
                <FaCircle className={`text-green-500 text-xs`} /> <span>200</span>
              </td>
              <td className={`p-3 px-1`}>
                <button className={`p-3`}>command</button>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </Body>
  );
}

export default Command;
