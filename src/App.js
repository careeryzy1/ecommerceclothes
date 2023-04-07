import React from 'react';
import Directory from './components/directory/directory.component';
import categories from './components/category-list/category-list.component';


const App = () => {
    
  return (
    <Directory cate={categories}/> 
  );  
};

export default App;
