import React, { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'


// pricingData.js
const pricingData = [
  {
    title: 'Standard',
    monthlyPrice: '29',
    yearlyPrice: '59',
    currency: '$',
    features: [
      'Static responsive website',
      'Video marketing',
      'Keywords research',
      'Facebook campaign',
      'eCommerce solution',
      'Google adword'
    ],
    btnText: 'Purchase Now',
    btnLink: '/'
  },
  {
    title: 'Professional',
    monthlyPrice: '199',
    yearlyPrice: '399',
    currency: '$',
    features: [
      'Static responsive website',
      'Video marketing',
      'Keywords research',
      'Facebook campaign',
      'eCommerce solution',
      'Google adword'
    ],
    btnText: 'Purchase Now',
    btnLink: '/'
  },
  {
    title: 'Ultimate',
    monthlyPrice: '299',
    yearlyPrice: '599',
    currency: '$',
    features: [
      'Static responsive website',
      'Video marketing',
      'Keywords research',
      'Facebook campaign',
      'eCommerce solution',
      'Google adword'
    ],
    btnText: 'Purchase Now',
    btnLink: '/'
  }
];



export default function PricingTableList() {
  const [tab, setTab] = useState('monthly')

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

      <Section className="row">
        {pricingData.map((plan, index) => (
          <Section className="col-lg-4" key={index}>
            <PricingTable
              title={plan.title}
              price={tab === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
              currency={plan.currency}
              timeline={tab}
              features={plan.features}
              btnText={plan.btnText}
              btnLink={plan.btnLink}
            />
            <Spacing lg="25" md="25" />
          </Section>
        ))}
      </Section>
    </Section>
  )
}
