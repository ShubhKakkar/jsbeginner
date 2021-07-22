document.querySelector('.wes').addEventListener('click',(event)=>{
    const shouldChangePage = confirm('This website might be malicious!, do you want to proceed?' );
    if(!shouldChangePage){
        event.preventDefault();
        }
    else{
           window.location = event.currentTarget.href; 
        };
});