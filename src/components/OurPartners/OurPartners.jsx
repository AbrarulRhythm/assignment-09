import React from 'react';
import Marquee from 'react-fast-marquee';
import logo01 from '../../assets/logo1.png';
import logo02 from '../../assets/logo2.png';
import logo03 from '../../assets/logo3.png';
import logo04 from '../../assets/logo4.png';
import logo05 from '../../assets/logo05.png';
import logo06 from '../../assets/logo06.png';
import logo07 from '../../assets/logo07.png';
import logo08 from '../../assets/logo08.png';
import logo09 from '../../assets/logo09.png';
import logo10 from '../../assets/logo10.png';
import logo11 from '../../assets/logo11.png';
import logo12 from '../../assets/logo12.png';

const OurPartners = () => {
    return (
        <section className='border-y border-gray-200 py-10 md:py-[60px] lg:py-[74px]'>
            <h5 className='font-semibold mb-12 text-center'>SUPPORTED BY 900+ IMPACTFUL PARTNERS</h5>

            <Marquee pauseOnHover={true}>
                <img src={logo01} alt="Our Partners Logo" />
                <img src={logo02} alt="Our Partners Logo" />
                <img src={logo03} alt="Our Partners Logo" />
                <img src={logo04} alt="Our Partners Logo" />
                <img src={logo05} alt="Our Partners Logo" />
                <img src={logo06} alt="Our Partners Logo" />
                <img src={logo07} alt="Our Partners Logo" />
                <img src={logo08} alt="Our Partners Logo" />
                <img src={logo09} alt="Our Partners Logo" />
                <img src={logo10} alt="Our Partners Logo" />
                <img src={logo11} alt="Our Partners Logo" />
                <img src={logo12} alt="Our Partners Logo" />
            </Marquee>
        </section>
    );
};

export default OurPartners;