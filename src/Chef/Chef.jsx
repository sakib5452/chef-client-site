import React from 'react';

const Chef = ({ chef }) => {
    const { chefName, chefImg, experience, recipes, likes } = chef
    return (
        <div>
            <section class="shadow-xl rounded-lg">
                <article class="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group">
                    <div class="max-h-125 overflow-hidden">
                        <img class="transform duration-300 group-hover:scale-110 h-96 rounded-lg" src={chefImg} alt="" />
                    </div>
                    <div class="flex justify-between my-5 ">
                        <div class="font-bold text-2xl text-orange-500">{chefName}</div>
                    </div>
                    <h2 class=" text-base font-semibold">{experience}</h2>
                    <div class="flex justify-between items-center mt-3 ">
                        <div class="text-base uppercase font-semibold text-gray-500">{recipes}</div>
                        <div class="text-base text-right">
                            <h2>{likes}</h2>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className='btn btn-primary'>View Recipes</button>
                    </div>
                </article>
            </section>

        </div>
    );
};

export default Chef;