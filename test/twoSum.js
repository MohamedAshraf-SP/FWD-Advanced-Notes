
let x = [1, 8,2, 3, 4]
let target =9

var twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        
       for (let j = 0; j < nums.length; j++) {
        
           if (i != j) {
            

               if (nums[i] + nums[j] ==target ) {
                
                   return [i,j] 
               }
               
           }
           


       }
  
}
return []}
console.log(twoSum(x,target))