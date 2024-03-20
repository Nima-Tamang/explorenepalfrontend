export default interface DestinationImage {
  id: number;
  destinationCode: string;
  // destinationImageBytes: string;
  destinationImageBytes: string; // Assuming base64 encoded string
}