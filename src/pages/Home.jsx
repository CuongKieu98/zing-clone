import React, { useState ,useEffect} from 'react'
import { getHome } from '../api/musicApi';
import Slide from '../components/slide/Slide'
import { SECTION_TYPE } from '../consts/SECTION';

const Home = () => {
  const [dataHome,setDataHome] = useState([])
  const [slideItem,setSlideItem] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const params = 1;
      try {
        const response = await getHome(params);
        setDataHome(response.data.items);
        setSlideItem(response.data.items.find((e) => e.sectionType === SECTION_TYPE.banner))
        console.log(response.data.items.find((e) => e.sectionType === SECTION_TYPE.banner));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className='container'>
      <Slide items={slideItem.items}/>
    </div>
  )
}

export default Home