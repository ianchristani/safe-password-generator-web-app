// routine
function gen(){
    // caracters list to generate the password
    let paramToBuild=[];

    // collections
    const numbers=[0,1,2,3,4,5,6,7,8,9];
    const letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','w','z'];
    const symbols=['!','@','#','$','%','^','&','?','~'];
    const signs=['=','+','-','/','|','<','>'];
    const cletters=letters.map((x)=>{
         return x.toUpperCase();
    });

    // getting the elements values
    let check_box=document.querySelectorAll('.form-check-input');
      
    check_box.forEach(n=>{
        if(n.checked==true){
            if(n.id=='numbers'){
                numbers.forEach(number=>{
                    paramToBuild.push(number);
                });
            }else if(n.id=='letters'){
                letters.forEach(letter=>{
                    paramToBuild.push(letter);
                });
            }else if(n.id=='cletters'){
                cletters.forEach(cletter=>{
                    paramToBuild.push(cletter);
                });
            }else if(n.id=='symbols'){
                symbols.forEach(symbol=>{
                    paramToBuild.push(symbol);
                });
            }else{
                signs.forEach(sign=>{
                    paramToBuild.push(sign);
                });
            };
        };
    });

    psswrd(paramToBuild);
    
};

// building the password
function psswrd(paramToBuild){
    const amnt = document.getElementById('amount').value;
    let psswrd_sep = [];
    let cont = 0;

    while (cont<amnt){
        let element=paramToBuild[Math.floor(Math.random()*paramToBuild.length)];
        psswrd_sep.push(element);
        cont ++;
    }

    let psswrd=psswrd_sep.join("");
    shw_psswrd(psswrd);    
};

// returning the password
function shw_psswrd(psswrd){
    let password = document.createTextNode(`${psswrd}`);
    let target = document.getElementById('psswrd');
    // cleaning the password field
    target.innerHTML="";

    target.appendChild(password);
};


// button object
const myform=document.getElementById('myform');

// button event listener
myform.addEventListener('submit', (event)=>{
    event.preventDefault();
    gen(); 
});