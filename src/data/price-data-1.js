import PriceList from "../svg/price-list"

import pric_img_1 from "../../public/assets/img/price/price-icon-1.png";
import pric_img_2 from "../../public/assets/img/price/price-icon-2.png";
import pric_img_3 from "../../public/assets/img/price/price-icon-3.png";


const price_data_home_one = [
    //  monthly price here 1 to 3
    {
        id: 1,
        img: pric_img_1,
        title: "Essential Clean",
        desctiption: <>Perfect for regular home maintenance</>,
        cls: "",
        pric: "89.00",
        price_feature: [
            {
                list: "Standard Room Cleaning",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Kitchen & Bathroom Sanitization",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Interior Windows & Mirrors",
                icon: <PriceList />,
                cls: "inactive"
            },
            {
                list: "Deep Carpet & Upholstery Care",
                icon: <PriceList />,
                cls: "inactive"
            }
        ],

    }, 
    {
        id: 2,
        img: pric_img_2,
        title: "Complete Clean",
        desctiption: <>Thorough cleaning for busy households</>,
        cls: "active",
        pric: "149.00",
        price_feature: [
            {
                list: "Standard Room Cleaning",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Kitchen & Bathroom Sanitization",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Interior Windows & Mirrors",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Deep Carpet & Upholstery Care",
                icon: <PriceList />,
                cls: ""
            }
        ],

    }, 
    {
        id: 3,
        img: pric_img_3,
        title: "Deluxe Service",
        desctiption: <>Luxury cleaning with premium care</>,
        cls: "",
        pric: "229.00",
        price_feature: [
            {
                list: "Standard Room Cleaning",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Kitchen & Bathroom Sanitization",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Interior Windows & Mirrors",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Deep Carpet & Upholstery Care",
                icon: <PriceList />,
                cls: ""
            }
        ],

    },   
    
    
    //  yearly price here  4 to 6
    {
        id: 4,
        img: pric_img_1,
        title: "Essential Clean",
        desctiption: <>Perfect for regular home maintenance</>,
        cls: "",
        pric: "69.00",
        price_feature: [
            {
                list: "Standard Room Cleaning",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Kitchen & Bathroom Sanitization",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Interior Windows & Mirrors",
                icon: <PriceList />,
                cls: "inactive"
            },
            {
                list: "Deep Carpet & Upholstery Care",
                icon: <PriceList />,
                cls: "inactive"
            }
        ],

    }, 
    {
        id: 5,
        img: pric_img_2,
        title: "Complete Clean",
        desctiption: <>Thorough cleaning for busy households</>,
        cls: "active",
        pric: "119.00",
        price_feature: [
            {
                list: "Standard Room Cleaning",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Kitchen & Bathroom Sanitization",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Interior Windows & Mirrors",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Deep Carpet & Upholstery Care",
                icon: <PriceList />,
                cls: ""
            }
        ],

    }, 
    {
        id: 6,
        img: pric_img_3,
        title: "Deluxe Service",
        desctiption: <>Luxury cleaning with premium care</>,
        cls: "",
        pric: "189.00",
        price_feature: [
            {
                list: "Standard Room Cleaning",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Kitchen & Bathroom Sanitization",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Interior Windows & Mirrors",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Deep Carpet & Upholstery Care",
                icon: <PriceList />,
                cls: ""
            }
        ],

    },  
]
export default price_data_home_one
