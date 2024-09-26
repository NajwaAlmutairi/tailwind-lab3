import React from 'react';
import icon1 from '../assets/icon1.avif';
import icon2 from '../assets/icon2.avif';
import icon3 from '../assets/icon3.avif';
import Card from './card';

function Benefits() {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
                <h1 className="text-4xl text-center font-bold mb-4 text-slate-400">Here are some of the benefits <br /> of your offer</h1>
                <p className="text-center mb-10 px-4">Explain what makes your product or service great. Talk about features in a way <br /> that highlights the real value people get out of them.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    <Card img={'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png'}
                        title={'Benefit 1'} text={'For example, restaurants and bakeries could outline the health benefits of their all-natural ingredients'} />
                    <Card img={'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png'}
                        title={'Benefit 2'} text={'Florists and other small retailers might use this space to describe how their products make delightful, one-of-a-kind gifts.'} />
                    <Card img={'https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png'}
                        title={'Benefit 3'} text={'You could also add buttons to this section and share links to other products or available delivery methods.'} />
                </div>
            </div>
        </>
    )
}


export default Benefits