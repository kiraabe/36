import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
// internal
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  const router = useRouter();
  const { t } = useTranslation('common');

  const isActive = (path) => {
    if (path === '/' && router.pathname === '/') return true;
    if (path !== '/' && router.pathname.startsWith(path)) return true;
    return false;
  };

  const isParentActive = (menu_item) => {
    // Check if current page link matches
    if (isActive(menu_item.link)) return true;

    // Special handling for Services menu
    if (menu_item.title_key === 'services') {
      const servicePages = ['/service'];
      return servicePages.includes(router.pathname);
    }

    // Check dropdown submenu items
    if (menu_item.has_dropdown) {
      return menu_item.sub_menus.some(sub => router.pathname === sub.link);
    }

    return false;
  };

  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <>
      <nav className="mean-nav">
        <ul>
          {menu_data.map((menu, i) => (
            <React.Fragment key={i}>
              {menu.has_dropdown && (
                <li className={`has-dropdown ${isParentActive(menu) ? 'active' : ''}`}>
                  <Link href={menu.link} className={isActive(menu.link) ? 'active' : ''}>{t(`navigation.${menu.title_key}`)}</Link>
                  <ul
                    className="submenu"
                    style={{
                      display: navTitle === t(`navigation.${menu.title_key}`) ? "block" : "none",
                    }}
                  >
                    {menu.sub_menus.map((sub, i) => (
                      <li key={i} className={router.pathname === sub.link ? 'active' : ''}>
                        <Link href={sub.link} className={router.pathname === sub.link ? 'active' : ''}>{t(`navigation.${sub.title_key}`)}</Link>
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`mean-expand ${
                      navTitle === t(`navigation.${menu.title_key}`) ? "mean-clicked" : ""
                    }`}

                    onClick={() => openMobileMenu(t(`navigation.${menu.title_key}`))}
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <i className="fal fa-plus"></i>
                  </a>
                </li>
              )}
              {!menu.has_dropdown && (
                <li className={isActive(menu.link) ? 'active' : ''}>
                  <Link href={menu.link} className={isActive(menu.link) ? 'active' : ''}>{t(`navigation.${menu.title_key}`)}</Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;
