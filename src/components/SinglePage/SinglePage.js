import axios from 'axios'
import React , {useEffect , useState } from 'react'
import { Link, useParams , useNavigate } from 'react-router-dom'
import back from '../../Assets/Images/arrow-left.svg'
function SinglePage() {
  const env = process.env.REACT_APP_API
  const navigate = useNavigate()
  const {id} = useParams()
  const singleMovieData = JSON.parse(window.localStorage.getItem('movieData')).find(item => item.id === id-0)
  const [presonData , setPersonData] = useState( JSON.parse(window.localStorage.getItem('preson-single')) || [])
  const [video , setVideo] = useState([])
  useEffect(()=>{
    axios.get(env + `/movie/${id}/credits` , {
      params:{
        api_key:"0431834c535ecb8b718ac720e46307f3"
      }
    })
    .then((res) =>{
      setPersonData(res.data.cast.splice(0,3))
    })
    .catch((err) =>{
      console.log(err);
    })

   axios.get(env + `/movie/${id}/videos` , {
    params:{
      api_key:"0431834c535ecb8b718ac720e46307f3"
    }
   }).then((res)=>{
    setVideo(res.data.results.splice(0 , 3))
   })
   .catch((err)=>{
    console.log(err);
   })

  }, [])

  const backOut =()=>{
    navigate(-1)
  }
  window.localStorage.setItem('preson-single' , JSON.stringify(presonData))
  return (
    <div className='flex justify-between relative '>
      <img onClick={backOut}  className='absolute top-[0px]' src={back} alt="back out" width={70} height={30}  />
      <ul className='w-[30%]'>
        <h2 className='text-center font-bold text-[20px]'>Actors</h2>
        {
          presonData.length > 0 && 
          presonData.map((item) =>(
             <Link to={`/single-page/${id}/person/${item.id}`} className='w-[70%] mb-5  mx-auto'>
              <div className='bg-red-400 mt-5 w-[65%] mx-auto rounded-md  mb-5 p-4'>
              <img className='h-[300px]  mx-auto' src={ "https://image.tmdb.org/t/p/w500/" + item.profile_path} alt="Actors img" width={'100%'} height={70} />
      
              </div>
             </Link>
          ))
        }
      </ul>
      <ul className='w-[40%]  mt-12 p-2 '>   
      <div>
        <img className='rounded-md' src={"https://image.tmdb.org/t/p/w500/" + singleMovieData.poster_path} alt="Person img" width={'100%'} />
      </div>   
        
      </ul>
      <ul className='w-[30%]'>
      <h2 className='text-center font-bold text-[20px]' >Videos</h2>
        {
          video.length > 0 && video.map((item) =>(
            <iframe
           className='rounded-md mt-5 mb-10 mx-auto   '
           width={'90%'}
           height="315"
           src={`https://www.youtube.com/embed/${item.key}`}
           title='you tube video player'
         
            allowFullScreen
           >
      </iframe>
          ))
        }
      </ul>
    </div>
  )
}

export default SinglePage