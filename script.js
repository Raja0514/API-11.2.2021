
 function onClick(){

    let response=fetch("http://www.boredapi.com/api/activity")

    .then(response=>{

        return response.json();
        })
        
        .then(data=>{

            console.log(data);
        
            document.querySelector('.paragraph').textContent=data.activity;
        
        })

        .catch(error=>{
           
            document.write(error);
        })
        
        
    

    }
    
