const to=document.querySelector('#xyz');
const ad = document.getElementById('Add');
ad.addEventListener('click', () => {
    const input = document.createElement('input');
    const text = document.createElement('input');
    const list = document.createElement('li');

    
    const check = document.getElementById('check');
    
    input.type="checkbox";
    text.type="text";
    text.classList.add("point");
    text.placeholder="Add Iteam";
    
    list.appendChild(input);
    list.appendChild(text);

    check.appendChild(list);
    
});

const insert  =document.getElementById('insert');
    insert.addEventListener('click',()=>{
        console.log("ok")
        to.classList.add('to1')
        

    });

    function  savefile() {
        // Get the data from each element on the form.
        const name = document.getElementById("point");
        // This variable stores all the data.
        let data = "\r List: " + point.value;
        console.log(data); //printing form data into the console
      
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: "text/plain" });

        let newLink = document.createElement("a");
        newLink.download = new Date();

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        } else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
    };

    const hourhand = document.querySelector('.hour')
    const minuteshand = document.querySelector('.min');
    const secondhand = document.querySelector('.sec');
    
    function setdate() {
        const d = new Date();
    
        // ******************second*********************
        const s = d.getSeconds();
        const secondsDegrees = ((s / 60) * 360) + 90;
        secondhand.style.transform = `rotate(${secondsDegrees}deg)`;
    
        // ************minutes*************************
    
        const m = d.getMinutes();
        const minsDegrees = ((m / 60) * 360) + ((s / 60) * 6) + 90;
        minuteshand.style.transform = `rotate(${minsDegrees}deg)`;
    
    
        // ***************hours************************
        const h = d.getHours();
        const hourDegrees = ((h / 12) * 360) + ((m / 60) * 30) + 90;
        hourhand.style.transform = `rotate(${hourDegrees}deg)`;
    
    }
    
        
        
    setInterval(setdate, 1000);
    
    setdate();

    const closingtab=document.querySelector('#closetab');
    closingtab.addEventListener('click',()=>{
        to.classList.remove('to1');
    });
    // const dele = document.querySelector('#delete');
    // dele.addEventListener('click',()=>{
        
    // })
   
  
