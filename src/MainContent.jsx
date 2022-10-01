import React from 'react';

const MainContent = () => {
    return (
        <div className='maincontent'>
            <div className='number'>140 </div>
            <div className='buttons'>
               <button className='blue'>Увеличить</button>
               <button className='orange'>Уменьшить</button>
               <button className='grey'>Сбросить</button>

            </div>
        </div>
       
    );
};

export default MainContent;