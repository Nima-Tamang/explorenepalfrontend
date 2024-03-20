// // UserInfoList.tsx
// import  { useEffect } from "react";
// import { DestinationModel } from "../../../Interfaces";
// import DestinationCard from './DestinationCard'

// import { useDispatch } from "react-redux";
// import { setDestinationItem } from "../../../Storage/Redux/destinationSlice";
// //import { useGetDestinationQuery } from "../../../Apis/destinationItemApi";

// function DestinatioList() {
//     //const [destinationItem, setDestinaionItem] = useState<DestinationModel[]>([]);

//     // useEffect(() => {
//     //     fetch("https://localhost:7173/api/Destination") // Update with your actual API endpoint
//     //         .then((response) => response.json())
//     //         .then((data: DestinationModel[]) => {
//     //             console.log(data);
//     //             setDestinaionItem(data);
//     //         })
//     //         .catch((error) => {
//     //             console.error("Error fetching user info:", error);
//     //         });
//     // }, []);

//     const dispatch=useDispatch();
//     const{data,isLoading}=useGetDestinationQuery(null);
//     useEffect(()=>{
//         if(!isLoading){
//          dispatch(setDestinationItem(data.result));
//         }
//     },[isLoading]);

//     if(isLoading){
//         <div>Loading...</div>
//     }

//     return (
//         <div className="container row">
//             {data.result.length >0 &&
//             data.result.map((destinationItem:DestinationModel, index:number) => (
//                 <DestinationCard destinationItem={destinationItem} key={index} />
//             ))}
//         </div>
//     );
// }

// export default DestinatioList;


import React, { useEffect } from "react";
import { DestinationModel } from "../../../Interfaces";
import DestinationCard from "./DestinationCard";
import { useDispatch } from "react-redux";
import { setDestinationItem } from "../../../Storage/Redux/destinationSlice";
import { useGetDestinationQuery } from "../../../Apis/destinationItemApi";

function DestinationList() {
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useGetDestinationQuery(null);

    useEffect(() => {
        if (!isLoading && !isError) {
            dispatch(setDestinationItem(data.result));
        }
    }, [data, dispatch, isLoading, isError]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching destination data.</div>;
    }

    return (
        <div className="container row">
            {data.result.length > 0 &&
                data.result.map((destinationItem: DestinationModel, index: number) => (
                    <DestinationCard destinationItem={destinationItem} key={index} />
                ))}
        </div>
    );
}

export default DestinationList;
