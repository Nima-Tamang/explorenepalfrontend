// import React from 'react';
// // import { DestinationModel, DestinationImage } from '../../../Interfaces';
// import { DestinationModel } from '../../../Interfaces';
// import ImageComponent from './ImageComponent'; // Import the ImageComponent

// interface Props {
//     destinationItem: DestinationModel;
// }

// const DestinationCard: React.FC<Props> = ({ destinationItem }) => {
//     return (
//         <div>
//             <p>{destinationItem.overview}</p>
//             <p>{destinationItem.feePerPersonNepaliMin}</p>
          
//             {/* Render ImageComponent */}
//              <ImageComponent image={destinationItem.destinationImages[0]} alt="Image 0" /> 
//              <ImageComponent image={destinationItem.destinationImages[1]} alt="Image 1" />
//             <ImageComponent image={destinationItem.destinationImages[2]} alt="Image 2" /> 
//         </div>
//     );
// }

// export default DestinationCard;





import React from 'react';
// import { DestinationModel, DestinationImage } from '../../../Interfaces';
import { DestinationModel } from '../../../Interfaces';
import ImageComponent from './ImageComponent'; // Import the ImageComponent
import {Link} from 'react-router-dom'

interface Props {
    destinationItem: DestinationModel;
}

const DestinationCard: React.FC<Props> = ({ destinationItem }) => {
    return (
      <div className="col-md-4 col-12 p-4">
      <div
        className="card"
        style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}
      >
        <div className="card-body pt-2">
          <div className="row col-10 offset-1 p-4">
            <Link to={`/destinationdetails/${destinationItem.code}`}>          
              <div 
                style={{ borderRadius: "50%" }}
                
                className="w-100 mt-5 image-box card-img-top">
                  <ImageComponent image={destinationItem.destinationImages[0]} alt="Image 0" /> 
                </div>
            </Link>
          </div>
          <h3 className='card-title'>{destinationItem.difficulty}</h3>
          <p className='card-text'>{destinationItem.overview}</p>
    
      </div>
      </div>
    </div>
    );
}

export default DestinationCard;



// import React from 'react';
// // import { DestinationModel, DestinationImage } from '../../../Interfaces';
// import { DestinationModel } from '../../../Interfaces';
// import ImageComponent from './ImageComponent'; // Import the ImageComponent
// import {Link} from 'react-router-dom'

// interface Props {
//     destinationItem: DestinationModel;
// }

// const DestinationCard: React.FC<Props> = ({ destinationItem }) => {
//     return (
//       <div className="col-md-4 col-12 p-4">
//       <div
//         className="card"
//         style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}
//       >
//         <div class="card" style={{width:18rem}}>
//         <Link to={`/destinationdetails/${destinationItem.code}`}>          
//               <div 
//                 style={{ borderRadius: "50%" }}
                
//                 className="w-100 mt-5 image-box">
//                   <ImageComponent image={destinationItem.destinationImages[0]} alt="Image 0" /> 
//                 </div>
//             </Link>
 
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
//   </div>
// </div>
    
//       </div>
//       </div>
//     </div>
//     );
// }

// export default DestinationCard;