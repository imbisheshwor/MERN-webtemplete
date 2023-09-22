import React, { useState } from 'react'
import logo from "../image/Logo.png"
import option from "../image/icon/option.png"
import dropdown from "../image/icon/dropdown.png"
import logout from "../image/icon/logout.png"

import { menu } from "../../data"
import { ReactComponent as Logout } from "../image/icon/logout.svg"


const Sideabr = () => {
  const [show, setShow] = useState("");

  return (
    <div className='SidebarContainer w-72 h-full  px-5 bg-white'>
      <div className="logoContainer flex justify-between items-center py-10">
        <img src={logo} alt="" />
        <div className="option cursor-pointer">
          <img src={option} alt="" />
        </div>
      </div>
      
      {/* thi is items  */}

      <div className="menu mt-10 ">
        {menu.map((item) => (
          item.drop == false ? (
            <div className="item flex gap-5 hover:bg-[#FEF5ED] h-16 cursor-pointer items-center pl-4">
              <img src={item.icon} alt="" />
              <span>{item.title}</span>
            </div>
          ) : (
            <div className="ItemContainer" data-id={item.id} onClick={() => setShow(selectedId => selectedId != item.id ? item?.id : "")}>
              <div className="item flex justify-between  hover:bg-[#FEF5ED] h-16 cursor-pointer items-center px-4">
                <div className="item flex gap-5 items-center">
                  <img src={item.icon} alt="" />
                  <span>{item.title}</span>
                </div>
                <div className={`drop-down ${show == item.id && "rotate-180"}`}>
                  <img src={dropdown} alt="" />
                </div>
              </div>
              {
                show == item.id && <div className="subItem ml-20 ">
                  <ul style={{ listStyleType: "circle" }}>
                    {item.data.map((d) => (
                      <li className='justify-between hover:bg-[#FEF5ED]  cursor-pointer items-center px-4'>{d.title}</li>
                    ))}
                  </ul>
                </div>
              }

            </div>
          )
        ))}
      </div>

      <div className="logout-section border-[#FD6625] border-[1.5px] hover:bg-[#FD6625] text-[#FD6625] rounded-lg mb-10 mt-10 py-4 hover:text-red-50 hover:fill-white fill-orange-500 cursor-pointer">
        <div className="logoutContainer flex gap-5 items-center justify-center">
          <Logout />
          <span className='text-xl'>logout</span>
        </div>
      </div>

    </div>

  )
}

export default Sideabr
