
let nums1 = [1]
let m = 3
let nums2 = []
let n = 3





// nums1 = nums1.concat(nums2)

// let x = 0
// while (x < nums1.length) {
//     if (nums1[x] == 0) {
//         nums1.splice(x, 1)
//         x--
//     }
// x++
// }
// nums1.sort()

// console.log(nums1, "---------------------------------------------3", nums1.length)

var merge = function(nums1, m, nums2, n) {
     nums1 = nums1.concat(nums2)

let x = 0
while (x < nums1.length) {
    if (nums1[x] == 0) {
        nums1.splice(x, 1)
        x--
    }
x++
}
nums1.sort()

 return nums1
 };

 console.log(merge(nums1, m, nums2, n))







 /*
let x = 0
while (x < m) {
    if (nums1[x] == 0) {
        nums1.splice(x, 1)
        x--
    }
x++
}
while (x < n) {
if (nums2[x] == 0) {
    nums2.splice(x, 1)
    x--
}
x++
}
    
nums1 = nums1.concat(nums2)
nums1.sort()
*/