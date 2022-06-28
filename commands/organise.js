function organisefn(dirpath){
    // console.log("organise command implemented for" , dirpath);
    // 1. input -> Directory path will be given in input that directory we have to organise
    // 2. create -> Organised_files -> Directory (alag alag media ki directory create karega)
    // 3. identify categories of all the files present in that input directory
    // 4. copy/cut files to that organised diectory inside of any of category folder

    let destpath;
    if(dirpath == undefined){
        destpath = process.cwd();
        
        return;
    }
    else{
        let destpath = path.join(dirpath, "organisedfiles");
        let doesexist = fs.existsSync(dirpath);
        if(doesexist){
            
            if(fs.existsSync(destpath)){
                

            }
            else{
                fs.mkdirSync(destpath);
            }
        }
        organisehelper(dirpath , destpath);
        
    }
    
    

}



function organisehelper(src ,dest){
    

   let childnames = fs.readdirSync(src);
   for(let i = 0 ; i < childnames.length ; i++){
       let childaddress = path.join(src,childnames[i]);
       let isfile = fs.lstatSync(childaddress).isFile();
       if(isfile){
           //console.log(childnames[i]);

           let category = getcategory(childnames[i]);
        //    console.log(childnames[i] ,"belongs to " , category);

          // sending files to new folder
          sendfiles(childaddress , dest , category);
       }
   }


}

// send file function
function sendfiles(srcpath , dest ,category){
    let categorypath = path.join(dest , category);
    if(fs.existsSync(categorypath)== false){
        fs.mkdirSync(categorypath);
    }
    let filename = path.basename(srcpath);
    let destpath = path.join(categorypath , filename);
    fs.copyFileSync(srcpath, destpath);
    console.log(filename , "copied to ->" , category);
    fs.unlinkSync(srcpath);
    

}


// get category function
function getcategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1); // . ko hata rha hai

    //loop chala
    for(let type in types){
        let ctypearray = types[type];
        for(let i =0 ; i< ctypearray.length ;i++){
            if(ext == ctypearray[i]){
                return type;
            }

        }

    }
    return "others";


}

module.exports = {
    organisekey :organisefn
}