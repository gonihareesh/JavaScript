async function loadFile(){
    let fileLoading=true;
    if(fileLoading){
       return "File loading";
    }else{
        return "File Not loaded";
    }
}
loadFile().then(value =>console.log(value))
    .catch(error => console.log(error));