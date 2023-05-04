import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Chef from '../Chef/Chef';

const ChefDetail = () => {
    const { id } = useParams();
    const ChefDetails = useLoaderData();
    return (
        <div className='grid grid-cols-3 ml-20 gap-10 mb-28'>
            {
                ChefDetails.map(chef => <Chef
                    key={chef.id}
                    chef={chef}
                ></Chef>

                )
            }
        </div>
    );
};

export default ChefDetail;