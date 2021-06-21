
let btns = document.getElementsByClassName("btn");

const  handleNavItemClick = (id) => {
    const element = document.getElementsByClassName(id);
    for(let i = 0; i<btns.length; i++){
        if (btns[i].classList.contains('active')) 
            btns[i].classList.remove('active');
    
}
 
        element[0].classList.add('active');
    
   

}

const handleBurgerIconClick = () => {
    
    if (document.getElementById("topnav-items").style.visibility === 'hidden')
        document.getElementById("topnav-items").style.visibility = "visible";
    else
        document.getElementById("topnav-items").style.visibility = "hidden";
};
