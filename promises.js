const p=new Promise((reslove,reject)=>{
    let a=1+2;
    if(a==2){
        reslove("Success");
    }
    else{
        reject("Failed");
    }
});
p.then(value =>{ 
    console.log("this is that message "+value)})
        .catch(error=>{console.log("this is in the catch "+error)});