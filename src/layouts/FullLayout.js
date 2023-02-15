import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";

import Header from "./Header";
import Sidebar from "./Sidebar";

import Test from "../pages/EAS/Test";
import Test2 from "../pages/EAS/Test2";
import CreateApprovalDocument from "../pages/EAS/CreateApprovalDocument";



const Fulllayout = () => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        <div className="contentArea">
          <Header />
          <Container className="p-4 wrapper" fluid>
            <Routes>
              <Route path="CreateApprovalDocument" element={<CreateApprovalDocument />} />
              <Route path="test" element={<Test />} />
              <Route path="test2" element={<Test2 />} />
            </Routes>
          </Container>
        </div>
      </div>
    </main>
  );
};
export default Fulllayout;
