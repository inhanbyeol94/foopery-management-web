import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";
import MainDashBoard from "./components/main_dashBoard/DashBoard";
import Container from "./components/container/Container";
import Admin from "./components/admin/Admin";
import Comment from "./components/Comment";
import Editor from "./components/Editor";
import Member from "./components/Member";
import ContainerDetail from "./components/container/detail/ContainerDetail";
import Issue from "./components/issue/Issue";
import IssueDetail from "./components/issue/detail/IssueDetail";
import CreateAdmin from "./components/admin/create/CreateAdmin";

export default function Router() {
  const routers: { path: string; element: React.ReactNode; key: string }[] = [
    {
      path: "/auth", // 관리자 로그인경로
      element: <Auth />,
      key: "auth",
    },
    {
      path: "/",
      element: <MainDashBoard />,
      key: "dashboard",
    },
    {
      path: "/container",
      element: <Container />,
      key: "container",
    },
    {
      path: "/admin",
      element: <Admin />,
      key: "/admin",
    },
    {
      path: "/comment",
      element: <Comment />,
      key: "comment",
    },
    {
      path: "/editor",
      element: <Editor />,
      key: "editor",
    },
    {
      path: "/member",
      element: <Member />,
      key: "member",
    },
    {
      path: "/container/:id",
      element: <ContainerDetail />,
      key: "container-detail",
    },
    {
      path: "/issue",
      element: <Issue />,
      key: "issue",
    },
    {
      path: "/issue/:id",
      element: <IssueDetail />,
      key: "issue-detail",
    },
    {
      path: "/admin/management/create",
      element: <CreateAdmin />,
      key: "/admin/management/create",
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        {routers.map(({ path, element, key }) => (
          <Route path={path} element={element} key={key} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
