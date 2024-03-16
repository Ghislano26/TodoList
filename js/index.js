const inputList = document.querySelector('#inputList');
const checkImg = document.querySelector('#checkImg');
const circle_hover = document.querySelectorAll('#circle_hover');
const block = document.querySelector('#todolist');
let isClicked = false;




function verifChar(){
    checkImg.src = 'assets/img/Oval.svg';
    if (inputList.value.length >=5) {
        checkImg.src = 'assets/img/check-active.svg'; 
    }
    else{
        checkImg.src = 'assets/img/Oval.svg';
    }
} 

// circle_hover.forEach(a =>{
//     a.addEventListener('mouseover', ()=>{
//         a.src = 'assets/img/check-circle-hover.svg';
//     })
// })

// circle_hover.forEach(a =>{
//     a.addEventListener('mouseout', ()=>{
//         a.src = 'assets/img/Oval.svg';
//     })
// })

circle_hover.forEach(a =>{
    a.addEventListener('click', ()=>{
        isClicked ? (a.src = 'assets/img/check-active.svg') : (a.src = 'assets/img/Oval.svg');
        isClicked = !isClicked;
    })
})



function addTodo(valeur) {
        const text = `
        <div class="w-full h-[18%] flex items-center gap-[1rem] pl-[1rem] border-b-[1.5px] border-[var(color-bottom)] font-semibold hover:bg-slate-200">
        <div class="flex  flex-[2] gap-[1rem]">
            <img src="assets/img/Oval.svg" alt=""  id="circle_hover" class="cursor-pointer sm:h-[2rem] md:h-[2.5rem]">
            <h3 class="text-[1.2rem] font sm:text-[2rem] md:text-[2.5rem] 2xl:text-[1.2rem] text_one">${valeur}</h3>
        </div>
        <div class="flex items-center justify-end flex-1 text-[2rem] text-gray-400 ">
            <ion-icon name="close-outline" class="croix sm:text-[2rem] md:text-[3rem] xl:text-[4rem] 2xl:text-[2.5rem]"></ion-icon>
        </div>
        </div>
        `;
        const position = 'afterbegin';
        block.insertAdjacentHTML(position, text);

        // const pos = 'beforeend';
        // task.insertAdjacentHTML(pos,word);
}
document.addEventListener('keyup', (e)=>{
    if (e.keyCode == 13) {
        const valeur = inputList.value;
        if (valeur.length <= 5) return;
        addTodo(valeur);
        inputList.value = " ";
       
    
    }
    
})

// document.addEventListener('keyup', (event) =>{
//     if (event.keyCode == 13) {
//         const input = inputList.value;
//         if (input.length <= 5) return;
//         add(input);
//         inputList.value = "";
//     }
// })