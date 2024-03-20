
  
 import { DestinationImage } from ".";


// Interfaces.ts
export default interface DestinationModel {
  code: string;
  durationInDays: number;
  difficulty: string;
  feePerPersonNepaliMin: number;
  feePerPersonNepaliMax: number;
  feePerPersonForeignMin: number;
  feePerPersonForeignMax: number;
  maxAltitude: number;
  overview: string;
  destinationImages: DestinationImage[];
}


// export default interface DestinationModel {
//   code: string
//   durationInDays: number
//   difficulty: string
//   feePerPersonNepaliMin: number
//   feePerPersonNepaliMax: number
//   feePerPersonForeignMin: number
//   feePerPersonForeignMax: number
//   maxAltitude: number
//   overview: string
//   destinationImages: any
// }