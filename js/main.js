/*-----------------------
Nav-Bar JS code
-------------------------*/
burger=document.querySelector('.burger')
        navabr=document.querySelector('.navabr')
        rightNav=document.querySelector('.rightNav')
        navList=document.querySelector('.navList')

        burger.addEventListener('click',()=>{
        rightNav.classList.toggle('v-class-resp');
        navList.classList.toggle('v-class-resp');
        navabr.classList.toggle('h-nav-resp');

})
/*-----------------------
Form Style Js code
------------------------*/
function myfocus(x){
        x.style.background='tomato';
        x.style.color='white';
}
function mykeyup(x){
        x.value=x.value.toUpperCase();
}
function mySubmit(){
        
}
/*---------------------
      form submit js code
---------------------*/
function myValidation(){
        var name = document.forms['contactForm']['name'].value;
        var email = document.forms['contactForm']['email'].value;
        var phone = document.forms['contactForm']['phone'].value;
        var message = document.forms['contactForm']['message'].value;
        var error=[];
        if (name ==''|| name.length<3){
                error[0]="Name must be at least 3 letters"
                document.getElementById('name-error').innerHTML=error[0];
        }else{
                document.getElementById('name-error').innerHTML='';
        }
        if (email ==''|| email.length<10){
                error[1]="Write your valid email address"
                document.getElementById('email-error').innerHTML=error[1];
        }else{
                document.getElementById('email-error').innerHTML='';
        }
        if (phone ==''|| phone.length<11){
                error[2]="Write your valid phone number"
                document.getElementById('phone-error').innerHTML=error[2];
        }else{
                document.getElementById('phone-error').innerHTML='';
        }
        if (message ==''|| phone.length<50){
                error[3]="Message at least 50 letters"
                document.getElementById('message-error').innerHTML=error[3];
        }else{
                document.getElementById('message-error').innerHTML='';
        }
        if (error.length>0){
                return false;
        }
}
/*------------------------------
Scroll to top Button js code
------------------------------*/
const toTop=document.querySelector('.to-top');
window.addEventListener('scroll',()=>{
        if (window.pageYOffset>100){
                toTop.classList.add('active');
        }else{
                toTop.classList.remove('active');
        }
})

