import ServiceIconOne from "../svg/service/service-icon-1"
import ServiceIconTwo from "../svg/service/service-icon-2"
import ServiceIconThree from "../svg/service/service-icon-3"
import ServiceIconFoure from "../svg/service/service-icon-4"
import ServiceIconFive from "../svg/service/service-icon-5"
import ServiceIconsix from "../svg/service/service-icon-6"
import ServiceIconSeven from "../svg/service/service-icon-7"

// Cleaning service icons
import HouseCleaningIcon from "../svg/service/house-cleaning-icon"
import OfficeCleaningIcon from "../svg/service/office-cleaning-icon"
import DeepCleaningIcon from "../svg/service/deep-cleaning-icon"
import CarpetCleaningIcon from "../svg/service/carpet-cleaning-icon"
import WindowCleaningIcon from "../svg/service/window-cleaning-icon"

// images import  
import img_1 from "../../public/assets/img/service/sv-icon-1.png";
import img_2 from "../../public/assets/img/service/sv-icon-2.png";
import img_3 from "../../public/assets/img/service/sv-icon-3.png";
import img_4 from "../../public/assets/img/service/sv-icon-4.png";
import img_5 from "../../public/assets/img/service/sv-icon-5.png";
// for home 04
import icon_1 from "../../public/assets/img/service/sv-icon-4-1.png"
import icon_2 from "../../public/assets/img/service/sv-icon-4-2.png"
import icon_3 from "../../public/assets/img/service/sv-icon-4-3.png"
import icon_4 from "../../public/assets/img/service/sv-icon-4-4.png"

// for home 05
import img_6 from "../../public/assets/img/service/sv-icon-5-1.png";
import img_7 from "../../public/assets/img/service/sv-icon-5-2.png";
import img_8 from "../../public/assets/img/service/sv-icon-5-3.png";
import img_9 from "../../public/assets/img/service/sv-icon-5-4.png";

// import img_10 from "../../public/";
// import img_11 from "../../public/";
// import img_12 from "../../public/";
// import img_13 from "../../public/";
// import img_14 from "../../public/";
// import img_15 from "../../public/";




const  service_data = [
    // for home 01
    {
        id: 1,
        icon: <HouseCleaningIcon />,
        img: <HouseCleaningIcon />,
        title: "House Cleaning",
        description: <>Complete residential cleaning services <br /> to keep your home spotless</>,
        link: "/service-details",
        delay: ".4s",
    },
    {
        id: 2,
        icon: <OfficeCleaningIcon />,
        img: <OfficeCleaningIcon />,
        title: "Office Cleaning",
        description: <>Professional commercial cleaning <br /> for productive workspaces</>,
        link: "/service",
        delay: ".6s",
    },
    {
        id: 3,
        icon: <DeepCleaningIcon />,
        img: <DeepCleaningIcon />,
        title: "Deep Cleaning",
        description: <>Intensive top-to-bottom cleaning <br /> for exceptional results</>,
        link: "/service",
        delay: ".7s",
    },
    {
        id: 4,
        icon: <CarpetCleaningIcon />,
        img: <CarpetCleaningIcon />,
        title: "Carpet Cleaning",
        description: <>Expert carpet cleaning with <br /> advanced stain removal techniques</>,
        link: "/carpet-cleaning",
        delay: ".8s",
    },
    {
        id: 5,
        icon: <WindowCleaningIcon />,
        img: <WindowCleaningIcon />,
        title: "Window Cleaning",
        description: <>Streak-free window cleaning <br /> for maximum natural light</>,
        link: "/window-cleaning",
        delay: ".9s",
    },

    // for home 03
    {
        id: 6,
        icon: <ServiceIconOne />,
        img: <ServiceIconOne />,
        title: "Project management jamil",
        description: <>Automate Workflows <br /> and Monitor your Sales.</>,
        delay: ".9s",
    },
    {
        id: 7,
        icon: <ServiceIconTwo />,
        img: <ServiceIconTwo />,
        title: "Sales analytics",
        description: <>Track your Marketing to see the best Results.</>,
        delay: ".9s",
    },
    {
        id: 8,
        icon: <ServiceIconThree />,
        img: <ServiceIconThree />,
        title: "Easy Invoicing",
        description: <>Automate recurring invoices and save time.</>,
        delay: ".9s",
    },
    {
        id: 9,
        icon: <ServiceIconFoure/>,
        img: <ServiceIconFoure />,
        title: "Complete Visibility",
        description: <>Get real-time visibility into every expense.</>,
        delay: ".9s",
    },
    
    // for home 04
    {
        id: 10,
        icon: icon_1,
        img: icon_1,
        title: "Cyber Security Solustions jamil",
        sub_title: "Cloud Backup",
        cls: "1",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },
    {
        id: 11,
        icon: icon_2,
        img: icon_2,
        title: "AI Data Cloud Solution",
        sub_title: "Cloud Backup",
        cls: "2",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },
    {
        id: 12,
        icon: icon_3,
        img: icon_3,
        title: <>Managed <br /> Web Application</>,
        sub_title: "Cloud Backup",
        cls: "3",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },
    {
        id: 13,
        icon: icon_4,
        img: icon_4,
        title: "24//7 Customer Support",
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
    },

    // for home 05
    {
        id: 14,
        icon: img_6,
        img: img_6,
        title: <>Live Inventory <br /> Management</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Track materials and stock for outsourced purchase orders</>,
        delay: ".9s",
    },
    {
        id: 15,
        icon: img_7,
        img: img_7,
        title: <>Real-time Master <br />  Planning</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Track materials and stock for outsourced purchase orders</>,
        delay: ".9s",
    },
    {
        id: 16,
        icon: img_8,
        img: img_8,
        title: <>Easy Contract <br /> Manufacturing</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Track materials and stock for outsourced purchase orders</>,
        delay: ".9s",
    },
    {
        id: 17,
        icon: img_9,
        img: img_9,
        title: <>Omnichannel <br /> Order Management</>,
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Track materials and stock for outsourced purchase orders</>,
        delay: ".9s",
    },

    // service page
    {
        id: 18,
        icon: <HouseCleaningIcon />,
        img: <HouseCleaningIcon />,
        title: "Residential Cleaning",
        description: <>Professional home cleaning <br /> services for every room</>,
        delay: ".9s",
    },
    {
        id: 19,
        icon: <OfficeCleaningIcon />,
        img: <OfficeCleaningIcon />,
        title: "Commercial Cleaning",
        description: <>Complete office and business <br /> space cleaning solutions</>,
        delay: ".9s",
    },
    {
        id: 20,
        icon: <DeepCleaningIcon />,
        img: <DeepCleaningIcon />,
        title: "Deep Cleaning",
        description: <>Thorough sanitization and <br /> detailed cleaning service</>,
        delay: ".9s",
    },
    {
        id: 21,
        icon: <CarpetCleaningIcon/>,
        img: <CarpetCleaningIcon />,
        title: "Carpet & Upholstery",
        description: <>Expert cleaning for carpets <br /> and furniture restoration</>,
        delay: ".9s",
    },

    {
        id: 22,
        icon: <WindowCleaningIcon/>,
        img: <WindowCleaningIcon />,
        title: "Window Cleaning",
        description: <>Crystal clear windows <br /> inside and outside</>,
        delay: ".9s",
    },

    {
        id: 23,
        icon: <ServiceIconsix/>,
        img: <ServiceIconsix />,
        title: "Post-Construction",
        description: <>Specialized cleaning after <br /> construction or renovation</>,
        delay: ".9s",
    },

    {
        id: 24,
        icon: <ServiceIconSeven/>,
        img: <ServiceIconSeven />,
        title: "Move-In/Out Cleaning",
        description: <>Complete cleaning for <br /> property transitions</>,
        delay: ".9s",
    },


]
export default service_data
