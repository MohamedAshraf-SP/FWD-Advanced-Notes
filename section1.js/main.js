/*

    // // working file = /app/util/logger.js

    console.log(__dirname);
    console.log(__filename);
*/


/*
//#1


}
*/


/*
//#2
    setTimeout(()=>console.log('second'),0)
    setTimeout(()=>console.log('third'),0)
    process.on("beforeExit",()=>console.log('FRIST'))
    console.log('thsswird')
    process.exit()
    console.log(add(3, 2))
    console.log('thieedrd')
    process.nextTick(()=>console.error('Server failed'))
*/



/*
//#3
    const {sum,concat,lgNum,cut3}=require('./utilities/functions')

    let arr1=[12,3,4,5]
    let arr2=[9,6,7,8]
    console.log(sum(arr1))
    console.log(concat(arr1,arr2))
    console.log(lgNum(arr1))
    console.log(cut3(arr1))

*/




let x= fetch("https://jsonplaceholder.typicode.com/posts/1").then(res=>res.json()).then(res=>console.log(res))
alert(x)