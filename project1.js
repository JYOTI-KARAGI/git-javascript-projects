const buttons=document.querySelectorAll('.button');//by clicling on button
const body=document.querySelector('body');//selecting body to change the bgcolor

buttons.forEach(function(button){//since its nodelist we'll use foreach loop
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event)
        console.log(event.target)//gives its id class..
        // if(event.target.id==='grey'){
        //     // body.style.backgroundColor=event.target.id;//or
        //     // body.style.backgroundColor='grey';//or
        // }
        // if(event.target.id==='white'){
        //     body.style.backgroundColor=event.target.id;//or
            
        // }if(event.target.id==='blue'){
        //     body.style.backgroundColor=event.target.id;//or
           
        // }if(event.target.id==='yellow'){
        //     body.style.backgroundColor=event.target.id;//or
           
        // }
        switch(event.target.id){
            case 'grey':
                body.style.backgroundColor=event.target.id;
            break;
            case 'white':
                body.style.backgroundColor=event.target.id;
                break;
            case 'blue':
                body.style.backgroundColor=event.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor=event.target.id;
                break;
        }
    })
})
