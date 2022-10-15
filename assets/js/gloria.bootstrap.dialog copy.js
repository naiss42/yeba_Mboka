var GloriaJS = GloriaJS || {};

GloriaJS.bootstrapDialog= (function(){

    let btsDialogsInPage;

    document.addEventListener("DOMContentLoaded", ()=>{
        btsDialogsInPage = document.getElementsByClassName("gl-bt-dialog");

        for(const glBTSDialog of btsDialogsInPage){
            const declancheur = document.createElement("a");
            declancheur.href = "#";
            declancheur.setAttribute("data-toggle","modal");
            declancheur.setAttribute("data-target", "#"+glBTSDialog.id);
            // declancheur.setAttribute("hidden","hidden");
            
            declancheur.addEventListener("click",(e)=>{
                console.log("Pop");
            })
            if(glBTSDialog.dataset.glOn != undefined){
                if(glBTSDialog.dataset.glOn=="load"){
                   setTimeout(() => {
                    console.log("Top");
                    declancheur.click();
                   }, parseInt(glBTSDialog.dataset.glWait));
                }else{

                }
            }
            glBTSDialog.before(declancheur);
        }
    });

    console.log("Gloria Bootstrap Dialog By Prince WAMINA");
})();