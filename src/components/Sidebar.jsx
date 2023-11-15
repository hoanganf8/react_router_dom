/* eslint-disable react/prop-types */
import "./Sidebar.css";
import { useResolvedPath, useMatch, Link } from "react-router-dom";

const Sidebar = () => {
  const CustomLink = ({ children, to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname });
    return (
      <li className={match ? "current" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  };

  return (
    <div>
      <h2>Menu</h2>
      <ul className="nav flex-column">
        <CustomLink to={"/"}>Trang chủ</CustomLink>
        <CustomLink to={"/gioi-thieu"}>Giới thiệu</CustomLink>
        <CustomLink to={"/san-pham"}>Sản phẩm</CustomLink>
        <CustomLink to={"/dat-hang"}>Đặt hàng</CustomLink>
      </ul>
    </div>
  );
};

export default Sidebar;
