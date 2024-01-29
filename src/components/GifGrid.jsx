import { useEffect, useState } from "react";
import {getGifs} from "../helpers/getGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const images = await getGifs(category);
        setImages(images);
    }

    useEffect(() => {
        
        getImages();
    //   return () => {
    //     second
    //   }
    }, [])
    

  return (
    <>
        <h1>{category}</h1>
        <div className="card-grid">
            { images.map( ( image ) => (
            <GifItem key={image.id} image={image} />
            ) ) }
        </div>
    </>
  )
}
