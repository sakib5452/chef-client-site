import React from 'react';

const Recipes = ({ recipe }) => {
    const { chefName } = recipe
    return (
        <div>
            hello{chefName}
        </div>
    );
};

export default Recipes;