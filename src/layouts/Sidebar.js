import { Button, Nav, NavItem } from "reactstrap";
import { Link , useLocation} from "react-router-dom";

const sidebarMenu = [
  {
    title: "결재문서 작성",
    href: "/CreateApprovalDocument",
    icon: "bi bi-speedometer2",
  },
  {
    title: "발신 결재내역",
    href: "/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "수신 결재내역",
    href: "/badges",
    icon: "bi bi-patch-check",
  },
  {
    title: "결재선 관리",
    href: "/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Cards",
    href: "/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Grid",
    href: "/grid",
    icon: "bi bi-columns",
  },
  {
    title: "Table",
    href: "/table",
    icon: "bi bi-layout-split",
  },
  {
    title: "Forms",
    href: "/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Breadcrumbs",
    href: "/breadcrumbs",
    icon: "bi bi-link",
  },
  {
    title: "About",
    href: "/about",
    icon: "bi bi-people",
  },
];
const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        
        {/* 세연로고  */}

      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {sidebarMenu.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
