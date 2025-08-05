const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title_key: "home",
    link: "/",
    active: "active",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title_key: "about",
    link: "/about",
    active: "",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title_key: "services",
    link: "/service",
    active: "",
    sub_menus: [
      {
        link: "/service",
        title_key: "allServices",
      },
      {
        link: "/house-cleaning",
        title_key: "houseCleaning",
      },
      {
        link: "/office-cleaning",
        title_key: "officeCleaning",
      },
      {
        link: "/carpet-cleaning",
        title_key: "carpetCleaning",
      },
      {
        link: "/window-cleaning",
        title_key: "windowCleaning",
      },
      {
        link: "/deep-cleaning",
        title_key: "deepCleaning",
      },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title_key: "portfolio",
    link: "/project",
    active: "",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title_key: "contact",
    link: "/contact",
    active: "",
  },
];
export default menu_data;
