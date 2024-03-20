// ImageComponent.tsx

import React from 'react';
import { DestinationImage } from '../../../Interfaces';

interface Props {
    image: DestinationImage;
    alt: string;
}

const ImageComponent: React.FC<Props> = ({ image, alt }) => {
    // Check if image is not undefined before accessing its properties
    if (!image) return null; // Return null if image is undefined
    return (
        <img src={`data:image/png;base64,${image.destinationImageBytes}`} alt={alt} />
    );
}

export default ImageComponent;
