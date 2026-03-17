import "./Header.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const navMenuRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setIsProductDropdownOpen(false);
  };
  const toggleProductDropdown = () => {
    setIsProductDropdownOpen((prev) => !prev);
    setIsDropdownOpen(false);
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // dropdown 영역 밖을 클릭했으면 닫기
      if (navMenuRef.current && !navMenuRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
        setIsProductDropdownOpen(false);
      }
    };

    // 캡처 단계로 잡아두면(옵션 true) 더 안정적인 경우가 많음
    document.addEventListener("mousedown", handleOutsideClick, true);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick, true);
    };
  }, []);
  return (
    <>
      <nav className="custom-navbar">
        <div className="nav-container">
          <div className="nav-left" ref={navMenuRef}>
            <Link to="/" className="nav-link">
              MAIN
            </Link>
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>

            {/* 드롭다운 영역 */}
            <div className="nav-dropdown">
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                TODO <span className="arrow">▾</span>
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/todo/list">LIST</Link>
                  </li>
                  <li>
                    <Link to="/todo/read/20">READ</Link>
                  </li>
                  <li>
                    <Link to="/todo/add">ADD</Link>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#">예비용</a>
                  </li>
                </ul>
              )}
            </div>
            <div className="nav-dropdown">
              <button
                className="dropdown-toggle"
                onClick={toggleProductDropdown}
              >
                PRODUCT <span className="arrow">▾</span>
              </button>
              {isProductDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/product/list">LIST</Link>
                  </li>
                  <li>
                    <Link to="/product/add">ADD</Link>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#">예비용</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="nav-right">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
