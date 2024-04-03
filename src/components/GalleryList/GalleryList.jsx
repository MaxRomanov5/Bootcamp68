

function GalleryList({ data }) {

  return (
      <ul>
          {data.map(item => {
             return( <li key={item.id}>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
              </li>)
        })}  
    </ul>
  )
}

export default GalleryList