const userLeft=true; 
const userWatchingCatMeme=false;
function watchTutorialCallback(callback,errorCallback){
    if(userLeft){
        errorCallback({
            name:"user left",
            message:":("
       })

    }else if(userWatchingCatMeme){
       errorCallback({
            name:"user watching Cat Meme",
            message:"webDevSimplified < Cat"
        })
    
    }else{
         callback("Take Care..");
     }
 }
 watchTutorialCallback((message)=>{
    console.log("success: "+message)
 },(error)=>{
     console.log(error.name+" "+error.message)
 })

