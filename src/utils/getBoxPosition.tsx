const getBoxPosition = (imageClassName, boxClassName) => {
    const imageElement = document.querySelector(`.${imageClassName}`);
    const boxPositions = [];
  
    if (imageElement) {
      const imageRect = imageElement.getBoundingClientRect();
  
        const boxElement = document.querySelectorAll(`.${boxClassName}`);
        if (boxElement) {
            boxElement.forEach(boxElement => {
                const boxRect = boxElement.getBoundingClientRect();
                const x = boxRect.left - imageRect.left;
                const y = boxRect.top - imageRect.top;
                const width = boxRect.width;
                const height = boxRect.height;
                console.log(x,y,width,height)
                boxPositions.push({
                  class_name: boxClassName,
                  bbox: { x, y, width, height },
                });
                
            });
            
        
        }
      };
    
  
    return boxPositions;
  };

export default getBoxPosition ;