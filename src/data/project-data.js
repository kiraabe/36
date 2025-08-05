// Professional cleaning service images - optimized for performance and quality
const office_cleaning_img = "https://images.pexels.com/photos/6195120/pexels-photo-6195120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900&format=webp";
const window_cleaning_img = "https://images.pexels.com/photos/12741259/pexels-photo-12741259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900&format=webp";
const restroom_sanitizing_img = "https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900&format=webp";
const carpet_cleaning_img = "https://images.pexels.com/photos/8774440/pexels-photo-8774440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900&format=webp";
const medical_cleaning_img = "https://images.pexels.com/photos/25461705/pexels-photo-25461705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900&format=webp";
const car_detailing_img = "https://images.pexels.com/photos/6872152/pexels-photo-6872152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900&format=webp";
const industrial_cleaning_img = "https://images.pexels.com/photos/4487445/pexels-photo-4487445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900&format=webp";
const call_center_cleaning_img = "https://images.pexels.com/photos/8866749/pexels-photo-8866749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900&format=webp";

// Brand icons for different cleaning service categories
const project_brand_1 = "https://images.pexels.com/photos/6196228/pexels-photo-6196228.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop&format=webp";
const project_brand_2 = "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop&format=webp";
const project_brand_3 = "https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop&format=webp";



const project_data = [
    {
        id: 1,
        img_1: office_cleaning_img,
        img_2: project_brand_1,
        title: "Corporate Office Deep Clean",
        description: <>Professional team cleaning and sanitizing corporate headquarters with eco-friendly products and advanced equipment.</>,
        client_name: "TechCorp Industries",
        budget: "15-25",
        budget_simble: "k",
        delay: ".9s"
    },
    {
        id: 2,
        img_1: window_cleaning_img,
        img_2: project_brand_2,
        title: "High-Rise Window Cleaning",
        description: <>Expert window cleaning service for commercial skyscrapers using professional grade equipment and safety protocols.</>,
        client_name: "Downtown Plaza",
        budget: "8-12",
        budget_simble: "k",
        delay: ".5s"
    },
    {
        id: 3,
        img_1: restroom_sanitizing_img,
        img_2: project_brand_3,
        title: "Restroom Deep Sanitization",
        description: <>Comprehensive restroom cleaning and sanitization service ensuring highest hygiene standards for commercial facilities.</>,
        client_name: "Metro Shopping Center",
        budget: "5-8",
        budget_simble: "k",
        delay: ".7s"
    },
    {
        id: 4,
        img_1: carpet_cleaning_img,
        img_2: project_brand_1,
        title: "Industrial Carpet Cleaning",
        description: <>Deep carpet cleaning and restoration service using state-of-the-art equipment for commercial and industrial spaces.</>,
        client_name: "Manufacturing Plus",
        budget: "10-15",
        budget_simble: "k",
        delay: ".9s"
    },
    {
        id: 5,
        img_1: medical_cleaning_img,
        img_2: project_brand_2,
        title: "Medical Facility Sterilization",
        description: <>Specialized cleaning and sterilization for healthcare facilities meeting all medical-grade cleanliness standards.</>,
        client_name: "City General Hospital",
        budget: "20-30",
        budget_simble: "k",
        delay: ".9s"
    },
    {
        id: 6,
        img_1: car_detailing_img,
        img_2: project_brand_3,
        title: "Fleet Vehicle Detailing",
        description: <>Professional vehicle cleaning and detailing service for corporate fleets and luxury automobile collections.</>,
        client_name: "Executive Transport",
        budget: "12-18",
        budget_simble: "k",
        delay: ".5s"
    },
    {
        id: 7,
        img_1: industrial_cleaning_img,
        img_2: project_brand_1,
        title: "Warehouse Deep Cleaning",
        description: <>Comprehensive industrial cleaning service for warehouses and manufacturing facilities with specialized equipment.</>,
        client_name: "LogiCenter Warehouse",
        budget: "18-25",
        budget_simble: "k",
        delay: ".7s"
    },
    {
        id: 8,
        img_1: call_center_cleaning_img,
        img_2: project_brand_2,
        title: "24/7 Office Maintenance",
        description: <>Round-the-clock cleaning and maintenance service for call centers and customer service facilities.</>,
        client_name: "Global Support Center",
        budget: "22-28",
        budget_simble: "k",
        delay: ".9s"
    },
]
export default project_data
