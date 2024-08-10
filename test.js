// let login=true;
// let promise1= new Promise(function(rej, res){
   
//     if(login==true)
//         res("true");
//     else
//     rej("false")

// });

// promise1.then(function(rr){
//     console.log(rr);
// }
// ).catch(function(rej){
//     console.log(rej);
// })

// let data=fetch('https://dog.ceo/api/breeds/image/random');
// data.then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
// })

async function fetchData()
{
    let data = await fetch('https://dog.ceo/api/breeds/image/random');
    let jsonData= await data.json();
    //  await console.log(jsonData);
    document.querySelector('div').innerHTML= `<img src="${jsonData.message}" alt="">`;
        }

     