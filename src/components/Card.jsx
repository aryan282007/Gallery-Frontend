function Card(user) {
  return (
     <a href={user.download_url} target='_blank' rel='noopener noreferrer'>
          <div  key={user.id}>
            <div className=' h-40 w-44 overflow-hidden rounded-lg'>
              <img className='h-full w-full object-cover' src={user.download_url} alt={user.author} />
            </div>
            <h2 className='font-bold text-lg'>{user.author}</h2>
          </div>
           </a>
  )
}

export default Card