function treefn(dirpath){
    if(dirpath == undefined){
        treehelper(process.cwd() ,"");
        return;
    }
    else{
        
        let doesexist = fs.existsSync(dirpath);
        if(doesexist){
            
           treehelper(dirpath, "");
        }
        else{
            console.log("Plrase Enter Correct Path");
            return;
        }
    }


}
function treehelper(dirpath , indent){
    let isfile = fs.lstatSync(dirpath).isFile();
    if(isfile ==  true){
        let filename = path.basename(dirpath);
        console.log(indent , "├──" ,filename );
    }
    else{
        let dirname = path.basename(dirpath);
        console.log(indent,"└──", dirname);
        let childrens = fs.readdirSync(dirpath);
        for(let i= 0 ; i< childrens.length ; i++){
            let childpath = path.join(dirpath,childrens[i]);
            treehelper(childpath , indent + "\t");
        }

    }


}


module.exports = {
    treekey :treefn
}