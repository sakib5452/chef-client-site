import React from 'react';
import img2 from '../../../chef-client-site/src/assets/about-chefs.jpg'
const About = () => {
    return (
        <div className='ml-28 mr-28 mt-28 '>
            <section class="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                <section class="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
                    <img class="xl:max-w-6xl" src={img2} alt="" />
                    <div class="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                        <h2 class="text-3xl font-semibold mt-4 md:mt-10">About</h2>
                        <p class="my-3 text-justify font-medium text-gray-700 leading-relaxed">Our Chefs offer you perfect cooking, best served dishes with fresh ingredients and old recipes. We have only carefully sourced and seasonal ingredients in our disposal to make rustic dishes. We provide you with daily self-made bread, sourdough pizza, roasted fish-meat-vegetables and many more.</p>

                        <button className="btn btn-primary">READ MORE</button>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default About;