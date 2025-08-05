import  feature_img_1 from "../../public/assets/img/feature/fea-icon-5-1.png"
import  feature_img_2 from "../../public/assets/img/feature/fea-icon-5-2.png"
import  feature_img_3 from "../../public/assets/img/feature/fea-icon-5-3.png"
import  feature_img_4 from "../../public/assets/img/feature/fea-icon-5-4.png"

// Cleaning feature icons
import EcoFriendlyIcon from "../svg/features/eco-friendly-icon"
import ProfessionalTeamIcon from "../svg/features/professional-team-icon"
import SatisfactionGuaranteeIcon from "../svg/features/satisfaction-guarantee-icon"
import FlexibleSchedulingIcon from "../svg/features/flexible-scheduling-icon"

const feature_data = [
    {
        id: 1,
        color: "1",
        img: <EcoFriendlyIcon />,
        title: <span>Eco-Friendly <br /> Products</span>,
        description: <span>Safe cleaning products that <br />
        protect your family and pets</span>,

    },
    {
        id: 2,
        color: "2",
        img: <ProfessionalTeamIcon />,
        title: <span>Professional <br /> Team</span>,
        description: <span>Trained and insured cleaning <br />
        professionals you can trust</span>,

    },
    {
        id: 3,
        color: "3",
        img: <SatisfactionGuaranteeIcon />,
        title: <span>Satisfaction <br /> Guarantee</span>,
        description: <span>100% satisfaction guarantee <br />
        on all our cleaning services</span>,

    },
    {
        id: 4,
        color: "4",
        img: <FlexibleSchedulingIcon />,
        title: <span>Flexible <br /> Scheduling</span>,
        description: <span>Book cleaning services that <br />
        fit your busy schedule</span>,

    },
]
export default feature_data
