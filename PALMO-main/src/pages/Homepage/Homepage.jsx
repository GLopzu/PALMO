import React from 'react';
import { HomeBanner } from '../../components/HomeBanner/HomeBanner';
import { ServicesTape } from '../../components/ServicesTape/ServicesTape';
import { HomeSlider } from '../../components/HomeBanner/HomeBanner';
import { MembersSection } from '../../components/AccountCard/AccountCard';


export default function HomePage() {
  return (
    <>
      <HomeBanner/>
      <ServicesTape className='services-tape'/>
      <HomeSlider/>
      <MembersSection/>
    </>
  );
}

