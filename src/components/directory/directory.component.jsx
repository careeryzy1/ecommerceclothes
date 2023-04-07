import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';



const Directory = ({cate}) => {
  
  
  return (
    <div className='directory-container'> 
      {cate.map(( category) => (
    <CategoryItem  key={category.id} title={category.title} imageUrl={category.imageUrl} />
  


      ))}
    </div>
  );  
};

export default Directory;


  {/* <CategoryItem  key={category.id} category={category} /> */}