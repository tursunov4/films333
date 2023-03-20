import React from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import back from '../../Assets/Images/arrow-left.svg'
function PersonSinglePage() {
    const navigate = useNavigate()
    const {id} = useParams()
    const personSingle = JSON.parse(window.localStorage.getItem('preson-single')).find(item => item.id === id-0)
    console.log(personSingle);
    const backOut =()=>{
    navigate(-1)
    }
    console.log(personSingle);
  return (
    <div className='relative'>
        <img onClick={backOut} className='absolute top-[-10px]' src={back} alt="back out" width={70} height={30}  />
         <div className='flex gap-6'>
         <div >
       <img className='h-[80vh] w-[500px] mt-5 rounded-md  ml-[80px]' src={ "https://image.tmdb.org/t/p/w500/" + personSingle.profile_path} alt="Actors img" width={'300px'} height={70} />
       </div>
       <div className=' mt-5 '>
         <h2 className='text-[35px] mb-[60px]  font-bold'>Name : {personSingle.name}</h2>
         <p className='text-[30px] mb-[50px]  font-bold'>Films Name : {personSingle.known_for_department}</p>
         <p  className='text-[30px]  font-bold'>Character : {personSingle.character}</p>
       </div>
         </div>
    </div>
  )
}

export default PersonSinglePage