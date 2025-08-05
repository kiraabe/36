import React from 'react';
import { useTranslation } from 'next-i18next';
import Count from './count';
// fun fact data will be generated with translations

const CountArea = () => {
    const { t } = useTranslation(['common', 'about']);

    const fun_fact_data = [
        {
            id: 1,
            cls: "1",
            count: 23,
            simble: "+",
            description: t('page.experienceYears', { ns: 'about' })
        },
        {
            id: 2,
            cls: "2",
            count: 300,
            simble: "%",
            description: t('page.yearGrowth', { ns: 'about' })
        },
        {
            id: 3,
            cls: "3",
            count: 12,
            simble: "+",
            description: t('page.countriesOperation', { ns: 'about' })
        },
    ];

    return (
      <>
        {fun_fact_data.map((item, i) => (
          <div
            key={i}
            className="col-xl-4 col-lg-4 col-md-4 mb-60 tp-counter-br"
          >
            <div
              className={`tp-fun-fact-item tp-fun-fact-space-${item.cls} d-flex align-items-center`}
            >
              <h4>
                <span
                  data-purecounter-duration="1"
                  data-purecounter-end="300"
                  className="purecounter"
                >
                  <Count number={item.count} text={item.simble} />
                </span>
              </h4>
              <p dangerouslySetInnerHTML={{__html: item.description}}></p>
            </div>
          </div>
        ))}
      </>
    );
};

export default CountArea;
