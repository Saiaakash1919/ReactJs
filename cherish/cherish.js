// import logo from './logo.svg';
import './App.css';
 
function Header() {
  return (
    <div className="Header">
      <a href="/">
      <img
      className="logo"
      alt="logo"
      src={process.env.PUBLIC_URL + '/original-f221227691813f9ce85e574076573cdb-removebg-preview.png'}
      />
      </a>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
 
// const Items = () =>  {
//   return(
//     <div className="card">
//       <img src='https://image.made-in-china.com/155f0j00vpEbBNuGLmod/DIY-Homemade-Chocolate-Packaging-Paper-Boxes-Removable-Lid-Gift-Box.webp'/>
//       <h2>Chocolate Candie Box</h2>
//       <h3>6Pcs Box</h3>
//     </div>
//   );
// };
 
const Items = () => {
  // Array of item data
  const item = [
    {
      image: 'https://image.made-in-china.com/155f0j00vpEbBNuGLmod/DIY-Homemade-Chocolate-Packaging-Paper-Boxes-Removable-Lid-Gift-Box.webp',
      title: 'Chocolate Candie Box',
      description: '6Pcs Box',
    },
    {
      image: 'https://choconnuts.in/wp-content/uploads/2021/02/assorted-heart-chocolates-box.jpg', // Add a different image here for variety
      title: 'Milk Chocolate Box',
      description: '10Pcs Box',
    },
    {
      image: 'https://image.made-in-china.com/155f0j00vpEbBNuGLmod/DIY-Homemade-Chocolate-Packaging-Paper-Boxes-Removable-Lid-Gift-Box.webp', // Same as above, change image
      title: 'Dark Chocolate Box',
      description: '5Pcs Box',
    }
  ];
 
  return (
    <div className="items-container">
        <div className="card">
          <img src={item[0].image} alt={item.title} />
          <h2>{item[0].title}</h2>
          <h3>{item[0].description}</h3>
        </div>
    </div>
  );
};
 
 
 
 
const Body = () => {
  return (
    <div className="item-list">
      <Items Items={item[0]} />
      <Items Items={item[1]} />
 
    </div>
  );
};
 
const Footer = () => {
  return(
    <>
    <h1>Footer</h1>
   
    </>
  )
}
 
const applayout = () => {
  return(
    <>
    <Header />
    <Body />
    <Footer />
    </>
  )
}
 
export default applayout;