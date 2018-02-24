/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count=0
  let arr=[""].concat(preferences)
  for (i=0; i<arr.length; i++) {
    if  (isNaN(arr[i])) { continue 
    } else {
      let first=arr[i];
      let second=arr[first];
      let third=arr[second];
    
        if(first && second && third && first != second && second != third && first != third && third === i){
            arr[i] = arr[first] = arr[second] = '';
            count++
        }
      
    }
    
  }
    return count;
  

   
  
  

  
};
