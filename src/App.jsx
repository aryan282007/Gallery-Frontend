import {useState,useEffect} from 'react'
import './App.css'
import Axios from 'axios'
import Card from './components/Card'

function App() {
  const [index, setIndex] = useState(1);
  const [userData, setUserData] = useState([])
 
  const clickHandler = async () => {
  const Result = await Axios.get(`https://picsum.photos/v2/list?page=${index}&limit=25`);

  setUserData(Result.data);
  }

  useEffect(() => {
    clickHandler();
  }
  ,[index]);
  
  let printUserData = <h1 className='text-sm text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h1>;
  
  if(userData.length > 0){
    printUserData = userData.map((user) => {
      return (
      <Card key={user.id} {...user} />
      )
    })
  }


  return (
    <>
     <div className='bg-black h-screen overflow-auto p-4 text-white '>
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-4 mt-4'>
        <button 
        disabled={index === 1}
        style={{opacity: index === 1 ? 0.5 : 1}}
        className={index === 1 ? 'bg-amber-500 text-black font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed' : 'bg-amber-500 active:scale-95 cursor-pointer text-black font-bold py-2 px-4 rounded'}
        onClick={() =>{ 
          setUserData([])
          if(index > 1){
            setIndex(index - 1)
          }
        }}
        >Prev</button>
 
        <span className='text-gray-500 font-sm text-lg'>Page: {index}</span>

        <button className='bg-amber-500 active:scale-95 cursor-pointer text-black font-bold py-2 px-4 rounded' 
        onClick={() => {
          setUserData([])
          if(index < 30){ // Assuming there are 30 pages
            setIndex(index + 1)
          }
        }}
        >Next</button>
      </div>
     </div>
    </>
  )
}

export default App
