import React , {useContext, useRef, useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from '../../Assets/Images/log.svg'
import axios from "axios";
import { Context } from "../../Context/Context";
function Header() {
  const [searchList , setSearchList] = useState(false)
  const {data , setData} = useContext(Context)
  const inputRef = useRef()
  const navigate = useNavigate()
  const env = process.env.REACT_APP_API
  const [search , setSearch] = useState([])
  const handleChange =(evt)=>{
    if(evt.target.value===""){
      setSearchList('')
    }
    else{
      setSearchList(true)
      axios.get(env + '/search/movie?query='+evt.target.value , {
       params:{
         api_key:"0431834c535ecb8b718ac720e46307f3"
       }
      })
      .then((res) =>{
       setSearch(res.data.results)
      })
      .catch((err)=>{
       console.log(err);
      })
     }
    }
    const handleList =(evt)=>{
      setData(search)
      inputRef.current.value = evt.target.textContent
      navigate(`/single-page/${evt.target.id}`)
      setSearchList(false)
    }
    window.localStorage.setItem('movieData' ,JSON.stringify(data))
 
  return <div>
    <header className="py-3 bg-red-400 ">
      <div className="w-[1220px] mx-auto  flex items-center justify-between">
        <img src={Logo} alt="Logo" width={70} height={70} />
        <div className="flex items-center space-x-5">
        <nav className="flex items-center space-x-5">
          <NavLink className={'text-white font-semibold text-[18px] hover:{ text-blue-300}' } to={"/"}>
            Home
          </NavLink>
          <NavLink className={'text-white font-semibold text-[18px] hover:{ text-blue-300}' } to={"/popular"}>
            Popular
          </NavLink>
          <NavLink className={'text-white font-semibold text-[18px] hover:{ text-blue-300}' } to={"/top-rated"}>
            Top Rated
          </NavLink>
          
        </nav>
        <div className="relative">
        <input  onBlur={() => {setTimeout(()=>{setSearchList(false)},[150])}} ref={inputRef}  onChange={handleChange} className="border-2 border-slate-400 p-2 rounded-md outline-none focus:border-blue-400 " type="text" placeholder="searching..." />
          {
            searchList && 
            <ul className="absolute  bg-white right-0 z-10 h-[300px] w-[150%] overflow-auto">
            {search.length>1 && search.map((item) =>(
             <li id={item.id} onClick={handleList} key={item.id} className=" p-1   hover:bg-blue-400  hover:text-white">{item.title}</li>
            ))}
            </ul>
          }
        </div>
        </div>
      </div>
    </header>
  </div>;
}

export default Header;
