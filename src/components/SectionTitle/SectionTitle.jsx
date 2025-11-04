import React from 'react';

const SectionTitle = ({ classes, subTitle, title }) => {
    return (
        <div className={`${classes} mb-10 md:mb-12 lg:mb-14 section-title`}>
            <p className='text-sm py-2 px-[18px] rounded-4xl bg-[#FFF3F7] text-primary-theme inline-block mb-3'>{subTitle}</p>
            <h2 className='text-[34px] md:text-4xl lg:text-[42px] font-semibold text-dark-1'>{title}</h2>
        </div>
    );
};

export default SectionTitle;