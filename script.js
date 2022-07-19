var kuralContainer=document.getElementById('kuralContainer')

 function getKuraldata(){
    var kuralNumber = document.getElementById('kuralno').value
    if(kuralNumber<0 || kuralNumber>1330){
        alert("Please enter numbers from 1 to 1330")
    }
    let url = `https://api-thirukkural.vercel.app/api?num=${kuralNumber}`

    try{
      var res = fetch(url) 
        .then((res)=>{return res.json()})
        .then((data)=>{console.log(data)        

        kuralContainer.innerHTML=
        `<div class="card" style="background-color:#D19F71; color:white;">
        <div class="card-header">
         <h3>Thirukkural</h3>
        </div>
        <div class="card-body">  
          <h5>Kural number:${data.number}</h5>                      
          <h5 class="card-title">Tamil:Section-${data.sect_tam},Chapter-${data.chap_tam},Chapter-group-${data.chapgrp_tam}</h5>
          <p class="card-text text-center">${data.line1}</p>
          <p class="card-text text-center p-0">${data.line2}</p>
          <p class="card-text"><h5 class="card-title">Explanation in Tamil:</h5>${data.tam_exp}</p>
          <h5 class="card-title">English:Section-${data.sect_eng},${data.chap_eng},Chapter-${data.chapgrp_eng}</h5>
          <p class="card-text"><h5 class="card-title">Explanation in English :</h5>${data.eng}</p>    
        </div>`        
    })
    }
    catch(err){
        console.log(err)
    }
 }
