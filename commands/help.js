// help function
function helpfn(dirpath){
    console.log(`
    List of All Commands : -> 

    node main.js tree "directoryPath"
    node main.js Oraganise "directoryPath"
    node main.js help
    `);
    

}

module.exports = {
    helpkey :helpfn
}
