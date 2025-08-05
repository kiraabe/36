import portfolio_data from '@/src/data/portfolio-data';
import { useTranslatablePortfolioData } from '@/src/hooks/useTranslatablePortfolioData';
import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';
import { useTranslation } from 'next-i18next';


// data
const categories = [
    "All",
    ...new Set(portfolio_data.map((item) => item.category)),
  ];

// Helper function to map portfolio items to service pages
const getServiceLink = (itemId) => {
  const serviceMapping = {
    1: "/house-cleaning",      // Living Room Deep Clean
    2: "/house-cleaning",      // Complete Home Service
    3: "/window-cleaning",     // Window & Carpet Care
    4: "/deep-cleaning",       // Kitchen Deep Cleaning
    5: "/deep-cleaning",       // Professional Dishwashing
    6: "/deep-cleaning",       // Professional Dish Service
    7: "/deep-cleaning",       // Bathroom Sanitization
    8: "/deep-cleaning",       // Professional Vacuum Team
    9: "/office-cleaning",     // Office Cleaning Services
  };

  return serviceMapping[itemId] || "/service";
};
const Portfolio = () => {
    const { t } = useTranslation('portfolio');
    const portfolioData = useTranslatablePortfolioData();

    // Create translated categories
    const categories = [
        t('projects.categories.all'),
        t('categories.residential'),
        t('categories.commercial'),
        t('categories.specialized'),
        t('categories.deepCleaning'),
    ];

    const [activeCategory, setActiveCategory] = useState(t('projects.categories.all'));
    const [items, setItems] = useState(portfolioData); 
  
    const filterItems = (cateItem) => {
      setActiveCategory(cateItem);

      if (cateItem === t('projects.categories.all')) {
        return setItems(portfolioData);
      } else {
        const findItems = portfolioData.filter((findItem) => {
          return findItem.category == cateItem;
        });
        setItems(findItems);
      }
    };


    return (
        <>
            <div className="portfolio-area pt-100 pb-90">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="portfolio-filter masonary-menu text-center mb-35">
                            {categories.map((cate, i) => (
                                <button
                                onClick={() => filterItems(cate)}
                                key={i}
                                className={`${cate === activeCategory ? "active" : ""}`}
                                >
                                <span>{cate}</span>
                                </button>
                            ))}    
                        </div>
                     </div>
                  </div>
                  <div className="row grid">
                    {items.map((item, i)  => 
                        <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item  cat1 cat4 cat3 cat5">
                            <div className="inner-project-item mb-30">
                            <div className="inner-project-img fix p-relative">
                                <Image
                                    className="w-100"
                                    src={item.thumb_img}
                                    alt="cleaning service gallery"
                                    width={800}
                                    height={600}
                                    style={{ objectFit: 'cover' }}
                                    unoptimized
                                />
                            </div>
                            <div className="inner-project-content">
                                <span className="inner-project-category-title">{item.job_title}</span>
                                <h4 className="inner-project-title"><Link href={getServiceLink(item.id)}>{item.title}</Link></h4>
                                <p>{item.des}</p>
                            </div>
                            </div>
                        </div>
                    )} 
                  </div>
               </div>
            </div>
        </>
    );
};

export default Portfolio;
