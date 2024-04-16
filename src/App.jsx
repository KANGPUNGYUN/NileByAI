import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { Lecturedetailspage } from "./screens/Lecturedetailspage";
import { Login } from "./screens/Login";
import { BulletinBoardEdit } from "./screens/BulletinBoardEdit";
import { SignIn } from "./screens/SignIn";
import { LecturePage } from "./screens/LecturePage";
import { BulletinBoard } from "./screens/BulletinBoard";
import { LecturedetailspageScreen } from "./screens/LecturedetailspageScreen";
import { CertificatePage } from "./screens/CertificatePage";
import { BackofficePayments } from "./screens/BackofficePayments";
import { Element } from "./screens/Element";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomePage />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    path: "/lecturedetailspageu95video",
    element: <Lecturedetailspage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/bulletinboardeditpage",
    element: <BulletinBoardEdit />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/lecturepage",
    element: <LecturePage />,
  },
  {
    path: "/bulletinboarddetailpage",
    element: <BulletinBoard />,
  },
  {
    path: "/lecturedetailspageu95default",
    element: <LecturedetailspageScreen />,
  },
  {
    path: "/certificatepage",
    element: <CertificatePage />,
  },
  {
    path: "/backofficeu95paymentsu95detail",
    element: <BackofficePayments />,
  },
  {
    path: "/x6",
    element: <Element />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
