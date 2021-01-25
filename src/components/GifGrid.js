import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from './helpers/getGifs';


export const GifGrid = ({category}) => {

   // const [images, setimages] = useState([]);
   
    const {data:images,loading} = useFetchGifs(category);
    //useEffect(() => {
    //    getGifs(category).then(setimages);
    //}, [category])

    

    //getGifs();

    return (
        <>
        <h3 className='animate__animated animate__fade_In'> {category} </h3>

      {loading && <p className='animate__animated animate__flash'>loading</p>}
        <div className='card-grid' >
            
                {
                    images.map(img => (
                        <GifGridItem 
                        key = {img.id}
                        {...img}
                        />
                    ))
                }
        </div>
        </>        
    )
}
