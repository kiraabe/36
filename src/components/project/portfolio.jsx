import { useTranslatablePortfolioData } from '@/src/hooks/useTranslatablePortfolioData';
import Image from 'next/image';
import Link from 'next/link';
import React,{useState, useMemo} from 'react';
import { useTranslation } from 'next-i18next';


// Categories are now defined in the component with translations

// Helper function to map portfolio items to service pages
const getServiceLink = (itemId) => {
  const serviceMapping = {
    1: "/project",      // Dunkin Donuts
    2: "/service",      // Hannekes Boom
    3: "/service",      // Burger Fabriek
  };

  return serviceMapping[itemId] || "/service";
};
const Portfolio = () => {
    const { t } = useTranslation(['portfolio']);
    const portfolio_data = useTranslatablePortfolioData();

    // Memoize portfolio data to prevent unnecessary re-renders
    const memoizedPortfolioData = useMemo(() => portfolio_data, [portfolio_data]);

    const [activeCategory, setActiveCategory] = useState("all");
    const [items, setItems] = useState(() => memoizedPortfolioData);

    // Define categories for portfolio filtering with translation keys
    const categoryKeys = ["all", "foodBeverage", "restaurantBar", "fastFood"];
    const categoryMapping = useMemo(() => ({
      "all": t('filter.all'),
      "foodBeverage": "Food & Beverage",
      "restaurantBar": "Restaurant & Bar",
      "fastFood": "Fast Food"
    }), [t]); 
  
    const filterItems = (cateKey) => {
      const cateValue = categoryMapping[cateKey];
      setActiveCategory(cateKey);

      if (cateKey === "all") {
        return setItems(memoizedPortfolioData);
      } else {
        const findItems = memoizedPortfolioData.filter((findItem) => {
          return findItem.category === cateValue;
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
                            {categoryKeys.map((cateKey, i) => {
                                return (
                                    <button
                                    onClick={() => filterItems(cateKey)}
                                    key={i}
                                    className={`${cateKey === activeCategory ? "active" : ""}`}
                                    >
                                    <span>{categoryMapping[cateKey]}</span>
                                    </button>
                                )
                            })}
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
                                    style={{ objectFit: 'cover', height: '300px' }}
                                    unoptimized
                                />
                            </div>
                            <div className="inner-project-content">
                                <span className="inner-project-category-title">{item.job_title}</span>
                                <h4 className="inner-project-title"><Link href={getServiceLink(item.id)}>{item.title}</Link></h4>
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
