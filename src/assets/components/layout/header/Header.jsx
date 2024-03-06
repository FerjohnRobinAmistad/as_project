import React, { useState } from "react";
import Button from "../../Button";
import "../../../scss/layout/header/header.scss";
// import Logo from "../../../images/header/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <header id="top-head">
        <div className={`header--container ${isActive ? "active" : ""}`}>
          <div class="header--left">
            <a href="/">
              <svg
                width="145"
                height="42.677"
                viewBox="0 0 145 42.677"
                fill="#000"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_5"
                      data-name="Rectangle 5"
                      width="145"
                      height="42.677"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_408"
                  data-name="Group 408"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M15.382,7.218l4.672,12.34H10.628ZM13.2.793,0,31.13H6.044l2.737-6.942H21.935l2.827,6.942h6.174L17.865.793Z"
                    transform="translate(0 1.265)"
                  />
                  <rect
                    id="Rectangle_3"
                    data-name="Rectangle 3"
                    width="5.139"
                    height="32.394"
                    transform="translate(33.937 0)"
                  />
                  <g
                    id="Group_3"
                    data-name="Group 3"
                    transform="translate(0 0)"
                  >
                    <g
                      id="Group_2"
                      data-name="Group 2"
                      clip-path="url(#clip-path)"
                    >
                      <path
                        id="Path_4"
                        data-name="Path 4"
                        d="M20.352.678A3.158,3.158,0,0,1,23.691,3.76a3.157,3.157,0,0,1-3.338,3.084A3.168,3.168,0,0,1,17.1,3.76,3.17,3.17,0,0,1,20.352.678m-2.527,10.07h5.141V31.313H17.826Z"
                        transform="translate(27.253 1.082)"
                      />
                      <path
                        id="Path_5"
                        data-name="Path 5"
                        d="M33.739,10.571a4.681,4.681,0,0,0-4.028-2.1c-1.375,0-3,.646-3,2.187,0,3.686,11.092.69,11.092,8.7,0,4.887-4.667,6.6-8.861,6.6-3.17,0-5.917-.812-8.013-3.17l3.422-3.209c1.333,1.453,2.7,2.527,4.887,2.527,1.5,0,3.429-.734,3.429-2.355,0-4.241-11.1-.905-11.1-8.742,0-4.581,4.114-6.641,8.262-6.641,2.747,0,5.663.856,7.336,3.131Z"
                        transform="translate(33.363 6.953)"
                      />
                      <path
                        id="Path_6"
                        data-name="Path 6"
                        d="M28.049,12.587V8.221H32.29V2.263h5.139V8.221h5.655v4.366H37.429v9c0,2.054.6,3.338,2.872,3.338a5.294,5.294,0,0,0,2.783-.643v4.335a10.954,10.954,0,0,1-4.07.682c-5.434,0-6.724-2.441-6.724-7.279V12.587Z"
                        transform="translate(44.71 3.608)"
                      />
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M34.323,4.56h5.66l5.738,14.264h.086L50.945,4.56H56.3L46.582,29.535c-1.5,3.857-3.3,5.873-7.847,5.873a15.449,15.449,0,0,1-3.938-.514l.641-4.63a7.586,7.586,0,0,0,2.612.514c2.534,0,3.217-.895,4.075-3.04l.983-2.438Z"
                        transform="translate(54.711 7.27)"
                      />
                      <rect
                        id="Rectangle_4"
                        data-name="Rectangle 4"
                        width="5.141"
                        height="32.394"
                        transform="translate(114.149)"
                      />
                      <path
                        id="Path_8"
                        data-name="Path 8"
                        d="M53,16.958a5.344,5.344,0,0,0,5.536,4.879,6.757,6.757,0,0,0,5.528-2.783l3.684,2.783a10.7,10.7,0,0,1-8.7,4.114c-6.215,0-11.18-4.324-11.18-10.791s4.965-10.8,11.18-10.8c5.738,0,9.642,4.028,9.642,11.183v1.414ZM63.549,13.1c-.039-2.993-2.01-4.887-5.222-4.887-3.045,0-4.936,1.935-5.326,4.887Z"
                        transform="translate(76.307 6.953)"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="header--right">
            <div className="burger" onClick={handleClick}>
              <span></span>
            </div>
            <div className="menu--hidden">
              <div className="header--menu">
                <nav>
                  <ul className="menu">
                    <li>
                      <a className="noto-san" href="">
                        システム開発
                      </a>
                    </li>
                    <li>
                      <a className="noto-san" href="">
                        Webマーケティング
                      </a>
                    </li>
                    <li>
                      <a className="noto-san" href="">
                        当社の強み
                      </a>
                    </li>
                    <li>
                      <a className="noto-san" href="">
                        実績紹介
                      </a>
                    </li>
                    <li>
                      <a className="noto-san" href="">
                        企業情報
                      </a>
                    </li>
                    <li>
                      <a className="noto-san" href="">
                        採用情報
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="btnH">
                <Button label={"お問い合わせ"} />
              </div>
              <nav className="nav--hidden">
                <ul className="menu">
                  <li>
                    <a className="noto-san" href="">
                      お知らせ
                    </a>
                  </li>
                  <li>
                    <a className="noto-san" href="">
                      チャネル
                    </a>
                  </li>
                  <li>
                    <a className="noto-san" href="">
                      パートナー募集
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
