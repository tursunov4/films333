import React, {useEffect , useState, useContext} from 'react'
import axios from 'axios'
import MovieCard from '../../components/MovieCard/MovieCard'
import { Context } from '../../Context/Context';
function Popular() {
  const env = process.env.REACT_APP_API;
  const {data , setData} = useContext(Context)
  const [movieDate, setMovieDate] = useState({
    isFetched:false,
    data:[]
  })
  useEffect(()=>{
    axios.get(env + `/movie/popular`, {
      params:{
        api_key:"0431834c535ecb8b718ac720e46307f3",
        page:1,
      }
    })
    .then((res)=>{
      setMovieDate({
        isFetched:true,
        data:res.data.results
      })
      setData(res.data.results)
    })
    .catch((err)=>{
      setMovieDate({
        isFetched:false,
        data:[]
      })
    })
  },[])
  window.localStorage.setItem('movieData' ,JSON.stringify(data))
  return (
    <div className='flex justify-between flex-wrap px-8 mt-5'>
      {movieDate.isFetched && movieDate.data.map((item) => <MovieCard obj ={item}/>) }
      
    </div>
  )
}

export default Popular