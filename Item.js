


import React from "react";



const Card = ({ item }) => {
    return (
      <div className="card">
        <img src={item.image} alt={item.title} />
        <h2>{item.title}</h2>
        <h3>${item.price}</h3>
      
       
      </div>
    );
  };
  


// export const items = [
//     {
//       Name: "Flint Jacket",
//       image:
//         "https://tse3.mm.bing.net/th?id=OIP.DBMrepGpYPVUPCW7srwwdwHaFC&pid=Api",
//       Price: "$298",
//     },
//     {
//       Name: "Gap Shirt Jacket",
//       image:
//         "https://tse3.mm.bing.net/th?id=OIP.3306GdJ7thnmNUvXcDABXwHaJ4&pid=Api",
//       Price: "$60",
//     },
//     {
//       Name: "Quince Overshirt",
//       image:
//         "https://tse4.mm.bing.net/th?id=OIP.mMe_EdV0_5xbqEYqXdVFcwHaJQ&pid=Api",
//       Price: "$79.90",
//     },
//     {
//       Name: "Genuine Shacket",
//       image:
//         "https://tse3.mm.bing.net/th?id=OIP.7BEJ6v6_pN-sa4ymgaQ_jwHaJ4&pid=Api",
//       Price: "$29.99",
//     },
//     {
//       Name: "Wrangler Shirt Jacket",
//       image:
//         "https://tse3.mm.bing.net/th?id=OIP.3njn_wfGlQuZMHkxx5HXWgHaJ4&pid=Api",
//       Price: "$64.99",
//     }
//   ];
  

// Card.js



export default Card;
