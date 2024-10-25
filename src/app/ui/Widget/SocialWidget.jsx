import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href='https://www.facebook.com/GalaxySparkBD9' target='_blank' className="cs-center">
        <Icon icon="fa6-brands:facebook" />
      </Link>
      <Link href='https://www.linkedin.com/in/galaxy-spark-797090312/' target='_blank' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href='https://www.instagram.com/galaxysparkbd/ ' target='_blank' className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link href='https://www.pinterest.com/galaxyspark_/' target='_blank' className="cs-center">
        <Icon icon="fa6-brands:pinterest" />
      </Link>
    </Div>
  )
}
