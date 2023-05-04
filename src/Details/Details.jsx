import React, { useState } from 'react';
import Swal from 'sweetalert2'
import { useLoaderData, useParams } from 'react-router-dom';
import { HandThumbUpIcon, HeartIcon, StarIcon } from '@heroicons/react/24/solid'
import NavigationBar from '../pages/NavigationBar/NavigationBar';
import Footer from '../pages/Shared/Footer/Footer';

const Details = () => {
    const { id } = useParams();
    const RecipeDetail = useLoaderData();
    const { chefName, chefImg, experience, recipes, likes, bio, recipe } = RecipeDetail
    console.log(RecipeDetail)
    const [open, setOpen] = useState(true);
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(true);

    const handleAccepted = event => {
        if (open) {
            setOpen(event.target.checked)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            return
        }
        else {
            return
        }
    }

    const handleAccepted1 = event => {
        if (open) {
            setOpen1(event.target.checked)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            return
        }
    }
    const handleAccepted2 = event => {
        if (open) {
            setOpen2(event.target.checked)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
            return
        }
    }

    return (
        <div>
            <NavigationBar></NavigationBar>
            <section class=" mr-24 ml-24 mt-10">
                <article class="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group">
                    <div class="max-h-125 overflow-hidden">
                        <img class="transform duration-300 group-hover:scale-110 h-96 rounded-lg" src={chefImg} alt="" />
                    </div>
                    <div class="flex justify-between my-5 ">
                        <div class="font-bold text-2xl text-orange-500">{chefName}</div>
                    </div>
                    <div className='mb-3'>
                        <p>{bio}</p>
                    </div>
                    <h2 class=" text-base font-semibold">{experience}</h2>
                    <div class="flex justify-between items-center mt-3 ">
                        <div class="text-base uppercase font-semibold text-gray-500">{recipes}</div>
                        <div class="text-base text-right flex gap-3">
                            <div> <HandThumbUpIcon className="h-6 w-6 text-blue-500" /></div>
                            <div><h2>{likes}</h2></div>
                        </div>

                    </div>
                </article>
            </section>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 ml-20 mb-10 mt-5'>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={recipe[0].recipeImg} alt="Shoes" className="rounded-xl h-52" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{recipe[0].recipeName}</h2>
                        </div>
                        <div className='flex justify-between items-center mr-10 ml-10'>
                            <div class="text-base text-right flex gap-3">
                                <div className='flex'>
                                    <StarIcon className="h-6 w-6 text-blue-500" />
                                    <StarIcon className="h-6 w-6 text-blue-500" />
                                    <StarIcon className="h-6 w-6 text-blue-500" />
                                    <StarIcon className="h-6 w-6 text-blue-500" />
                                    <StarIcon className="h-6 w-6 text-blue-500" />

                                </div>
                                <div><h2>{recipe[0].rating}</h2></div>
                            </div>
                            <div>
                                <div onClick={handleAccepted}>
                                    <button className='btn btn-primary' disabled={!open} ><HeartIcon className="h-6 w-6" /></button>
                                </div>
                            </div>
                        </div>
                        <hr className='mr-10 ml-10 text-2xl font-bold mt-3' />
                        <div className='flex gap-5 ml-5 mt-3 mb-10 mr-5'>
                            <div>
                                <h1 className='text-xl font-semibold'>Ingredients</h1>
                                <div>
                                    <p>1. {recipe[0].ingredients[0]}</p>
                                    <p>2. {recipe[0].ingredients[1]}</p>
                                    <p>3. {recipe[0].ingredients[2]}</p>
                                    <p>4. {recipe[0].ingredients[3]}</p>
                                    <p>5. {recipe[0].ingredients[4]}</p>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold'>Method</h1>
                                <div>
                                    <p>1. {recipe[0].method[0]}</p>
                                    <p>2. {recipe[0].method[1]}</p>
                                    <p>3. {recipe[0].method[2]}</p>
                                    <p>4. {recipe[0].method[3]}</p>
                                    <p>5. {recipe[0].method[4]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={recipe[1].recipeImg} alt="Shoes" className="rounded-xl h-52" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{recipe[1].recipeName}</h2>
                        </div>
                        <div className='flex justify-between items-center mr-10 ml-10'>
                            <div class="text-base text-right flex gap-3">
                                <div className='flex'>
                                    <StarIcon className="h-6 w-6 text-blue-500" />
                                    <StarIcon className="h-6 w-6 text-blue-500" />
                                    <StarIcon className="h-6 w-6 text-blue-500" />
                                    <StarIcon className="h-6 w-6 text-blue-500" />
                                    <StarIcon className="h-6 w-6 text-blue-500" />

                                </div>
                                <div><h2>{recipe[1].rating}</h2></div>
                            </div>
                            <div>
                                <div onClick={handleAccepted1}>
                                    <button className='btn btn-primary' disabled={!open1} ><HeartIcon className="h-6 w-6" /></button>
                                </div>
                            </div>
                        </div>
                        <hr className='mr-10 ml-10 text-2xl font-bold mt-3' />
                        <div className='flex gap-5 ml-5 mt-3 mb-10 mr-5'>
                            <div>
                                <h1 className='text-xl font-semibold'>Ingredients</h1>
                                <div>
                                    <p>1. {recipe[1].ingredients[0]}</p>
                                    <p>2. {recipe[1].ingredients[1]}</p>
                                    <p>3. {recipe[1].ingredients[2]}</p>
                                    <p>4. {recipe[1].ingredients[3]}</p>
                                    <p>5. {recipe[1].ingredients[4]}</p>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold'>Method</h1>
                                <div>
                                    <p>1. {recipe[1].method[0]}</p>
                                    <p>2. {recipe[1].method[1]}</p>
                                    <p>3. {recipe[1].method[2]}</p>
                                    <p>4. {recipe[1].method[3]}</p>
                                    <p>5. {recipe[1].method[4]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={recipe[2].recipeImg} alt="Shoes" className="rounded-xl h-52" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{recipe[2].recipeName}</h2>
                        </div>
                        <div className='flex justify-between items-center mr-10 ml-10'>
                            <div class="text-base text-right flex gap-3">
                                <div className='flex'>
                                    <StarIcon className="h-6 w-6 text-blue-500" />
                                    <StarIcon className="h-6 w-6 text-blue-500" />
                                    <StarIcon className="h-6 w-6 text-blue-500" />
                                    <StarIcon className="h-6 w-6 text-blue-500" />
                                    <StarIcon className="h-6 w-6 text-blue-500" />

                                </div>
                                <div><h2>{recipe[2].rating}</h2></div>
                            </div>
                            <div>
                                <div onClick={handleAccepted2}>
                                    <button className='btn btn-primary' disabled={!open2} ><HeartIcon className="h-6 w-6" /></button>
                                </div>
                            </div>
                        </div>
                        <hr className='mr-10 ml-10 text-2xl font-bold mt-3' />
                        <div className='flex gap-5 ml-5 mt-3 mb-10 mr-5'>
                            <div>
                                <h1 className='text-xl font-semibold'>Ingredients</h1>
                                <div>
                                    <p>1. {recipe[2].ingredients[0]}</p>
                                    <p>2. {recipe[2].ingredients[1]}</p>
                                    <p>3. {recipe[2].ingredients[2]}</p>
                                    <p>4. {recipe[2].ingredients[3]}</p>
                                    <p>5. {recipe[2].ingredients[4]}</p>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold'>Method</h1>
                                <div>
                                    <p>1. {recipe[2].method[0]}</p>
                                    <p>2. {recipe[2].method[1]}</p>
                                    <p>3. {recipe[2].method[2]}</p>
                                    <p>4. {recipe[2].method[3]}</p>
                                    <p>5. {recipe[2].method[4]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;