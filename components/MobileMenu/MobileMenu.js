"use client";
import React, { Fragment, useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
  { id: 1, title: "Home", link: "/" },
  {
    id: 3,
    title: "Pages",
    submenu: [
      { id: 31, title: "Our Portfolio", link: "/portfolio" },
      // { id: 321, title: "Our Pricing", link: "/pricing" },
      { id: 322, title: "About Us", link: "/about" },
    ],
  },
  {
    id: 4, title: "Service",
    submenu: [
      { id: 41, title: "Software Development", link: "/custom-software-development" },
      { id: 42, title: "Mobile App Development", link: "/mobile-app-development" },
      { id: 43, title: "Web Development", link: "/web-development-services" },
      { id: 44, title: "Website Design Development", link: "/website-design-development" },
      { id: 45, title: "eCommerce Development", link: "/ecommerce-website-development" },
      { id: 46, title: "WordPress Development", link: "/wordpress-development-services" },
      { id: 47, title: "Digital Marketing Services", link: "/digital-marketing-services" },
      { id: 48, title: "SEO Services", link: "/seo-services" },
      { id: 49, title: "Game Development", link: "/mobile-game-development" },
   
    ],
  },
  { id: 88, title: "Contact", link: "/contact" },
  // {
  //   id: 5,
  //   title: "Pages",
  //   submenu: [{ id: 52, title: "Team", link: "/team" }],
  // },
];

const MobileMenu = ({ closeMenu, isOpen }) => {
  const [openId, setOpenId] = useState(0);

  // 🔄 Reset accordion when menu reopens
  useEffect(() => {
    if (!isOpen) setOpenId(0);
  }, [isOpen]);

  const handleClick = () => {
    window.scrollTo(10, 0);
    closeMenu(); // close mobile menu on link click
  };

  const toggleSubmenu = (id) => {
    setOpenId((prev) => (prev === id ? 0 : id));
  };

  return (
    <ul className="main_menu_list clearfix">
      {menus.map((item) => (
        <ListItem className={item.id === openId ? "active" : ""} key={item.id}>
          {item.submenu ? (
            <Fragment>
              <p onClick={() => toggleSubmenu(item.id)}>
                {item.title}
                <i
                  className={`fa ${item.id === openId ? "fa-angle-up" : "fa-angle-down"}`}
                ></i>
              </p>
              <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                <List className="subMenu">
                  {item.submenu.map((submenu) => (
                    <div key={submenu.id}>
                      <Link href={submenu.link} onClick={handleClick}>
                        {submenu.title}
                      </Link>
                    </div>
                  ))}
                </List>
              </Collapse>
            </Fragment>
          ) : (
            <Link href={item.link} onClick={handleClick}>
              {item.title}
            </Link>
          )}
        </ListItem>
      ))}
    </ul>
  );
};

export default MobileMenu;
