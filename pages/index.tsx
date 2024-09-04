import React from 'react';
import Aboutus from '../components/bibaho-bondhon/Aboutus';
import Footer from '../components/bibaho-bondhon/Footer';
import HeroSection from '../components/bibaho-bondhon/HeroSection';
import Services from '../components/bibaho-bondhon/Services';
import Valuation from '../components/bibaho-bondhon/Valuation';
import WhyChooseUs from '../components/bibaho-bondhon/WhyChooseUs';

const Index = () => {

    const [displayRequirements, setDisplayRequirements] = React.useState(false);

    return (
    <main className='bg-slate-900' >
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <Valuation />
      <Aboutus />
      <Footer />
    </main>
    );
};

export default Index;
