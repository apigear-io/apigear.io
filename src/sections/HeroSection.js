import React from 'react';
import Hero from '../components/Hero';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  const item = {
    title: siteConfig.title,
    tagline: siteConfig.tagline,
    link: 'https://docs.apigear.io/docs/intro',
    message: 'Get Started',
  };
  return (
    <Hero item={item} />
  );
}
