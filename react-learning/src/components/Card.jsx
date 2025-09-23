import './Card.css'

// Example of a Card component in React

const Card = () => {
  return (
    <div className='card'>
        <img className="card-image" src="https://scontent.fyyz1-2.fna.fbcdn.net/v/t39.30808-1/281749388_5275696159134499_4495822434185916737_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=qDhinXQfl6YQ7kNvwEkJ3C6&_nc_oc=AdmouEPYZcWMysnMxC1ipkMu8-XZFys8c9QjMircP9mASdVbm-BsVgtiYXq0MxbxvB0sbBTWE691YgVvADWtmav4&_nc_zt=24&_nc_ht=scontent.fyyz1-2.fna&_nc_gid=3gHsA0HHFHkmaSucJMRN5A&oh=00_AfXRlL-K_as2AV4v1z5YT_HekpZJ0n6Wn7OIVjUl4c1gyw&oe=68BBDCF3" alt="profile picture" ></img>
        <h2 className='card-title'>GeekyDev</h2>
        <p className='card-text'>I write software and love going outdoors</p>
    </div>
  )
}

export default Card