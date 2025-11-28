import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem"; // ✅ fix ListItem import
import Collapse from "@mui/material/Collapse";
import { Link as ScrollLink } from "react-scroll";

const menus = [
  { id: 1, title: "Home", link: "home" },
  { id: 2, title: "About Us", link: "about" },
  { id: 3, title: "Service", link: "services" },
  { id: 4, title: "Why Choose Us", link: "why" },
  { id: 5, title: "Portfolio", link: "portfolio" },
  { id: 6, title: "Contact", link: "contact" },
];

const MobileHeader = ({ closeMenu }) => {
  const [openId, setOpenId] = useState(0);

  const handleScrollClick = () => {
    window.scrollTo(10, 0);
    closeMenu(); // ✅ Close mobile menu on click
  };

  return (
    <ul className="main_menu_list clearfix mobile-head">
      {menus.map((item) => (
        <ListItem
          key={item.id}
          className={item.id === openId ? "active" : ""}
          sx={{ display: "block" }}
        >
          {item.submenu ? (
            <Fragment>
              <p
                onClick={() =>
                  setOpenId(item.id === openId ? 0 : item.id)
                }
                style={{ cursor: "pointer" }}
              >
                {item.title}
                <i
                  className={`fa ${
                    item.id === openId ? "fa-angle-up" : "fa-angle-down"
                  }`}
                ></i>
              </p>
              <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                <List className="subMenu">
                  {item.submenu.map((submenu) => (
                    <ListItem key={submenu.id}>
                      <ScrollLink
                        to={submenu.link}
                        smooth={true}
                        duration={600}
                        offset={-70}
                        onClick={handleScrollClick} // ✅ close on submenu click
                        style={{ cursor: "pointer" }}
                      >
                        {submenu.title}
                      </ScrollLink>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Fragment>
          ) : (
            <ScrollLink
              to={item.link}
              smooth={true}
              duration={600}
              offset={-70}
              onClick={handleScrollClick} // ✅ close on main menu click
              style={{ cursor: "pointer" }}
            >
              {item.title}
            </ScrollLink>
          )}
        </ListItem>
      ))}
    </ul>
  );
};

export default MobileHeader;
