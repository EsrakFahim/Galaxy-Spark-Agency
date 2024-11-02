import React, { useState } from 'react';
import Section from '../Div';
import Spacing from '../Spacing';
import Div from '../Div';
import PricingTable from '.';

// Sample pricing data
const pricingData = [
  {
    title: 'Business Class',
    monthlyPrice: '29',
    yearlyPrice: '59',
    currency: '$',
    published: true,
    features: [
      "Identity Design",
      "Web Design",
      "Web Development or Rebuild",
      "Website Maintenance",
      "Search Engine Optimization",
      "15 Infographics Content",
      "5 Short Videos & 1 Long Video",
      "Social Media Marketing",
      "Search Engine Marketing",
      "E-mail / SMS Marketing",
    ],
    btnText: 'Purchase Now',
    btnLink: '/contact'
  },
  {
    title: 'Professional',
    monthlyPrice: '199',
    yearlyPrice: '399',
    currency: '$',
    published: false,
    features: [
      'Static responsive website',
      'Video marketing',
      'Keywords research',
      'Facebook campaign',
      'eCommerce solution',
      'Google AdWords'
    ],
    btnText: 'Purchase Now',
    btnLink: '/'
  },
  {
    title: 'Ultimate',
    monthlyPrice: '299',
    yearlyPrice: '599',
    currency: '$',
    published: false,
    features: [
      'Static responsive website',
      'Video marketing',
      'Keywords research',
      'Facebook campaign',
      'eCommerce solution',
      'Google AdWords'
    ],
    btnText: 'Purchase Now',
    btnLink: '/'
  }
];

export default function PricingTableList() {
  const [tab, setTab] = useState('monthly');

  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li
          className={tab === 'monthly' ? "active" : ""}
          onClick={() => setTab('monthly')}
        >
          Monthly
        </li>
        <li
          className={tab === 'yearly' ? "active" : ""}
          onClick={() => setTab('yearly')}
        >
          Yearly
        </li>
      </ul>

      <Section className="row align-items-stretch">
        {pricingData.map((plan, index) => (
          <Section className="col-lg-4 d-flex" key={index}>
            {plan.published ? (
              <PricingTable
                title={plan.title}
                price={tab === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                currency={plan.currency}
                timeline={tab}
                features={plan.features}
                btnText={plan.btnText}
                btnLink={plan.btnLink}
              />
            ) : (
              <Div className="cs-pricing_table cs-style1 d-flex align-items-center justify-content-center">
                <h2 className="cs-coming_soon">Coming Soon</h2>
              </Div>
            )}
          </Section>
        ))}
      </Section>
    </Section>
  );
}
