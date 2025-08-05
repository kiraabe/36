import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import menu_data from "./menu-data";

const NavMenu = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

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

  return (
    <>
      <ul>
        {menu_data.map((menu_item, i) => (
          <li key={i} className={isParentActive(menu_item) ? 'active' : ''}>
            <Link href={menu_item.link} className={isActive(menu_item.link) ? 'active' : ''}>
              {t(`navigation.${menu_item.title_key}`)}
              {menu_item.has_dropdown && (
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: '8px', transition: 'transform 0.3s ease' }}
                >
                  <path
                    d="M1 1L4 4L7 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Link>
            {menu_item.has_dropdown && (
              <ul className="submenu">
                {menu_item.sub_menus.map((sub_menu, i) => (
                  <li key={i} className={router.pathname === sub_menu.link ? 'active' : ''}>
                    <Link href={sub_menu.link} className={router.pathname === sub_menu.link ? 'active' : ''}>
                      {t(`navigation.${sub_menu.title_key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
