window.addEventListener('load', ()=>{

    let worldUrl;
    
    let worldResult = document.querySelector("div#result");
    document.querySelector("#lookup").addEventListener("click", (event)=>{
       let  search = document.querySelector("#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/,'');
        worldUrl = `world.php?country= ${search}`;
        fetch(worldUrl, {method : 'GET'})
        .then(feedback => feedback.text())
        .then(tabInfo => {
            worldResult.innerHTML = '';
            worldResult.innerHTML = tabInfo;
        })

    });

    document.querySelector("#findcity").addEventListener("click", (event)=>{
        let search = document.querySelector("input#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/ ,'');
        worldUrl = `world.php?country= ${search}&context=cities`;
        fetch(worldUrl, {method : 'GET'})
        .then(feedback => feedback.text())
        .then(tabInfo => {
            worldResult.innerHTML = '';
            worldResult.innerHTML = tabInfo;
        })
    });


    
});