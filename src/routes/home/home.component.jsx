import React from 'react';
import {Outlet} from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import categories from '../../components/category-list/category-list.component';


const Home = () => {
    
  return (
    <div>
      <Outlet />
      <Directory cate={categories}/> 
    </div>
   
  );  
};

export default Home;