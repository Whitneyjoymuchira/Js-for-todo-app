let submit=document.getElementById('submit');
let ulList=document.querySelector('.ul');
let removeItem=document.querySelector('.delete')
let input=document.querySelector('.input');




ulList.addEventListener('click', ()=>{
    if(event.target.classList.contains('delete')){
        event.target.parentNode.remove()
    }
})
submit.addEventListener('click', ()=>{
    let enteredData=input.value ;
console.log(enteredData)

    if(enteredData!==''){
        const liList=document.createElement('li')
        liList.innerHTML=enteredData
        let  deleteButton=document.createElement('button')
        const mySpan=document.createElement('span')
        deleteButton.classList='delete'
        deleteButton.innerHTML='Delete'
        
      console.log(liList)
    
     ulList.appendChild(liList) ;
     deleteButton.appendChild(mySpan) 
     liList.appendChild(deleteButton) 
     input.value=''
    }
    
})