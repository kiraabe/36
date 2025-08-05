// thumb img URLs from uploaded images
const thumb_img_1 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2Fe0fddf1ca6e0480f89fb2c1d28e381eb?format=webp&width=800";
const thumb_img_2 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2Ff0504ebc4add48c49ef2443b11d13ea4?format=webp&width=800";
const thumb_img_3 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2F4adbbe42fb4d46b8b53b2a9433acdb4f?format=webp&width=800";
const thumb_img_4 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2F6e3fb2276f3649cb91f9bfb7889d04bb?format=webp&width=800";
const thumb_img_5 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2F632457f0d2a34ea8b7c10c167adc37e4?format=webp&width=800";
const thumb_img_6 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2F6d60060380d9475bbb24ed6de2efcbf6?format=webp&width=800";
const thumb_img_7 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2Fd7395483b46d48639039cae0f96b6a74?format=webp&width=800";
const thumb_img_8 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2F9a6261e143544bdab8e86af24dac24ca?format=webp&width=800";
const thumb_img_9 = "https://cdn.builder.io/api/v1/image/assets%2Fd7701853856d420aadf279a375a55b37%2Fe1bf502f191c4bf5ae0d8e7fe6ebbc1d?format=webp&width=800";
// brand logo URL - OMG logo
const omg_logo = "https://cdn.builder.io/api/v1/image/assets%2F15a9843d46ba40d3acd34b8ee9003f5f%2F62fb575782e3438cb19ee4ffb46aa818?format=webp&width=800";


const portfolio_data = [
    {
        id: 1,
        thumb_img: thumb_img_1,
        brand_logo: omg_logo,
        job_title: "Residential, Surface Cleaning",
        title: <>Living Room Deep Clean</>,
        des: <>Professional team in pink uniforms providing comprehensive table and surface cleaning services.</>,
        delay: ".5s",
        category: "Residential",
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 2,
        thumb_img: thumb_img_2,
        brand_logo: omg_logo,
        job_title: "Residential, Window & Floor",
        title: <>Complete Home Service</>,
        des: <>Blue-uniformed team providing window cleaning, vacuuming, and floor mopping services.</>,
        delay: ".5s",
        category: "Residential",
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 3,
        thumb_img: thumb_img_3,
        brand_logo: omg_logo,
        job_title: "Residential, Window & Vacuum",
        title: <>Window & Carpet Care</>,
        des: <>Professional window cleaning and carpet vacuuming for pristine home environments.</>,
        delay: ".5s",
        category: "Residential",
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 4,
        thumb_img: thumb_img_4,
        brand_logo: omg_logo,
        job_title: "Specialized, Kitchen Care",
        title: <>Kitchen Deep Cleaning</>,
        des: <>Professional kitchen cleaning and dishwashing services by certified cleaning staff.</>,
        delay: ".5s",
        category: "Specialized",
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 5,
        thumb_img: thumb_img_5,
        brand_logo: omg_logo,
        job_title: "Specialized, Kitchen Service",
        title: <>Professional Dishwashing</>,
        des: <>Expert kitchen cleaning team in yellow uniforms providing thorough dishwashing services.</>,
        delay: ".5s",
        category: "Specialized",
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 6,
        thumb_img: thumb_img_6,
        brand_logo: omg_logo,
        job_title: "Specialized, Dish Care",
        title: <>Professional Dish Service</>,
        des: <>Dedicated dish cleaning and kitchen maintenance with professional cleaning techniques.</>,
        delay: ".5s",
        category: "Specialized",
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 7,
        thumb_img: thumb_img_7,
        brand_logo: omg_logo,
        job_title: "Specialized, Bathroom Care",
        title: <>Bathroom Sanitization</>,
        des: <>Professional bathroom cleaning and toilet maintenance with hygiene-focused approach.</>,
        delay: ".5s",
        category: "Specialized",
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 8,
        thumb_img: thumb_img_8,
        brand_logo: omg_logo,
        job_title: "Deep Cleaning, Team Service",
        title: <>Professional Vacuum Team</>,
        des: <>Coordinated team of three professionals providing comprehensive vacuum cleaning services.</>,
        delay: ".5s",
        category: "Deep Cleaning",
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    },
    {
        id: 9,
        thumb_img: thumb_img_9,
        brand_logo: omg_logo,
        job_title: "Commercial, Office Care",
        title: <>Office Cleaning Services</>,
        des: <>Professional office cleaning including desk sanitization and workspace maintenance.</>,
        delay: ".5s",
        category: "Commercial",
        filter_id: ["all", "Commercial", "Residential", "Specialized", "Deep Cleaning", "Eco-Friendly" ],
    }, 

    
]
export default portfolio_data
