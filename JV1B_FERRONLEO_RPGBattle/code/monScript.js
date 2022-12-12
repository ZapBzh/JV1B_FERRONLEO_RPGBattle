var min=2;
var max=10;

var min_spe=13;
var max_spe=25;



function changeScr() {
    document.getElementById("gifmage2").setAttribute("src","https://cdn.discordapp.com/attachments/1035201518288257125/1046767081376452618/ombre_arme.gif") ;

}

{ //function  
    function afficher1() {
    var x = document.getElementById("quiAttaque1");
        x.style.display = "flex";
    }

    function afficherSpe1() {
    var x = document.getElementById("quiAttaque_spe1");
        x.style.display = "flex";
    }

    function cacher1() {
    var x = document.getElementById("quiAttaque1");
        x.style.display = "none";
    }

    function cacherSpe1() {
    var x = document.getElementById("quiAttaque_spe1");
        x.style.display = "none";
    }

    function afficher2() {
    var x = document.getElementById("quiAttaque2");
        x.style.display = "flex";
    }

    function afficherSpe2() {
    var x = document.getElementById("quiAttaque_spe2");
        x.style.display = "flex";
    }

    function cacher2() {
    var x = document.getElementById("quiAttaque2");
        x.style.display = "none";
    }

    function cacherSpe2() {
    var x = document.getElementById("quiAttaque_spe2");
        x.style.display = "none";
    }

    function afficher3() {
    var x = document.getElementById("quiAttaque3");
        x.style.display = "flex";
    }

    function afficherSpe3() {
    var x = document.getElementById("quiAttaque_spe3");
        x.style.display = "flex";
    }

    function cacher3() {
    var x = document.getElementById("quiAttaque3");
        x.style.display = "none";
    }

    function cacherSpe3() {
    var x = document.getElementById("quiAttaque_spe3");
        x.style.display = "none";
    }

    function afficher4() {
    var x = document.getElementById("quiAttaque4");
        x.style.display = "flex";
    }

    function afficherSpe4() {
    var x = document.getElementById("quiAttaque_spe4");
        x.style.display = "flex";
    }

    function cacher4() {
    var x = document.getElementById("quiAttaque4");
        x.style.display = "none";
    }

    function cacherSpe4() {
    var x = document.getElementById("quiAttaque_spe4");
        x.style.display = "none";
    
    }

    function sansMana1() {
    var x = document.getElementById("Attaque_spe1");
        x.style.display = "none";
        
    }
    
    function mageMort1(){
        var x = document.getElementById("mage");
            x.style.display = "none";
    }

    function mageMort2(){
        var x = document.getElementById("mage2");
            x.style.display = "none";
    }
    
    function mageMort3(){
        var x = document.getElementById("mage3");
            x.style.display = "none";
    }
    
    function mortHero1(){
        var x = document.getElementById("hero1");
            x.style.display = "none";
    }

    function mortHero2(){
        var x = document.getElementById("hero2");
            x.style.display = "none";
    }

    function mortHero3(){
        var x = document.getElementById("hero3");
            x.style.display = "none";
    }

    function mortHero4(){
        var x = document.getElementById("hero4");
            x.style.display = "none";
    }
    
    
        

pvMageNoir = document.getElementById("pvMageNoir");
pvMageNoir2 = document.getElementById("pvMageNoir2");
pvMageNoir3 = document.getElementById("pvMageNoir3");

pvhero1 = document.getElementById("pvhero1");
pvhero2 = document.getElementById("pvhero2");
pvhero3 = document.getElementById("pvhero3");
pvhero4 = document.getElementById("pvhero4");

manaHero1 = document.getElementById("mana1");
manaHero2 = document.getElementById("mana2");
manaHero3 = document.getElementById("mana3");
manaHero4 = document.getElementById("mana4");

Soins1  = document.getElementById("soins1");
Soins2  = document.getElementById("soins2");
Soins3  = document.getElementById("soins3");
Soins4  = document.getElementById("soins4");

afficheAction = document.getElementById("afficheAction");

LE_MAGE_NOIR.innerHTML = "LE MAGE NOIR"

afficheAction.innerHTML = "LES BOSS SONT APPARUS !!"

var mage2 = document.getElementById("mage2");

{//Action de toros
    
    if (manaHero1 <= 0){
        afficheAction.innerHTML = "El toros n'a plus asser de mana pour cette action"
        cacher1();
        cacherSpe1();
    }


    Attaque_toros1 = document.getElementById("lance_toros_mage1");
    Attaque_toros2 = document.getElementById("lance_toros_mage2");
    Attaque_toros3 = document.getElementById("lance_toros_mage3");

    Spe_toros_mage1 = document.getElementById("spe_toros_mage1");
    Spe_toros_mage2 = document.getElementById("spe_toros_mage2");
    Spe_toros_mage3 = document.getElementById("spe_toros_mage3");
    
    Spe_toros = document.getElementById("quiAttaque_spe1");
     

    Soins1.onclick = function(){
       
        if (manaHero1 <= 0){
            afficheAction.innerHTML = "El Toros n'a plus asser de mana pour cette action"
            cacher1();
            cacherSpe1();
        }
        
        else{
            pvhero1.innerHTML = pvhero1.innerHTML -(- 5);
            afficheAction.innerHTML = "El Toros regagne 5 pv" ;

            if (pvhero1.innerHTML >= 100 ){
                pvhero1.innerHTML= 100
            }

            manaHero1.innerHTML = manaHero3.innerHTML - 50;

            if (manaHero1.innerHTML <= 0){
                manaHero1 = 0;

            }

            cacher1();
        }

    }

    Attaque_toros1.onclick = function() {
        var min_spe=13;
        var max_spe=25;

        var random = Math.floor(Math.random() * max - min)+ min;
        var random2 = Math.floor(Math.random() * max - min)+ min;
        pvMageNoir.innerHTML = pvMageNoir.innerHTML- random;
        pvhero1.innerHTML = pvhero1.innerHTML - random2;
        
        afficheAction.innerHTML = "Le <b>prêtre bleu</b> subit des dégats !";
        if (pvMageNoir.innerHTML <= 0){
            afficheAction.innerHTML = "Bien joué ! Le mage est mort !";
            pvMageNoir = 0;
            
            mageMort1();
        
        } 
        
        if (pvhero1.innerHTML <= 0){
            afficheAction.innerHTML = "Vous avez perdu ...?";
            pvhero1 = 0;
            mortHero1()
        }
        
        if (manaHero1.innerHTML <= 0){
            manaHero1 = 0;
        }
        
        cacher1();
        cacherSpe1();
        
    }

    Attaque_toros2.onclick = function() {

        var random = Math.floor(Math.random() * max - min)+ min;
        var random2 = Math.floor(Math.random() * max - min)+ min;

        pvMageNoir2.innerHTML = pvMageNoir2.innerHTML- random;
        pvhero1.innerHTML = pvhero1.innerHTML - random2;


        afficheAction.innerHTML = "Le mage noir a subit des dégats !";

        if (pvMageNoir2.innerHTML <= 0){
        
            afficheAction.innerHTML = "Bien joué ! Le mage noir est mort !";
            pvMageNoir2 = 0;
            mageMort2()
        } 

        if (pvhero1.innerHTML <= 0){

            afficheAction.innerHTML = "Vous avez perdu ...?";
            pvhero1 = 0;
            mortHero1()
        }
    
        if(pvMageNoir2.innerHTML <= 50){
            changeScr();
        }


       if (manaHero1.innerHTML <= 0){
        manaHero1 = 0;
        
    }

        cacher1();
        cacherSpe1();
    }

    Attaque_toros3.onclick = function() {

        var random = Math.floor(Math.random() * max - min)+ min;
        var random2 = Math.floor(Math.random() * max - min)+ min;

        pvMageNoir3.innerHTML = pvMageNoir3.innerHTML- random;
        pvhero1.innerHTML = pvhero1.innerHTML - random2;

        afficheAction.innerHTML = "Le prêtre rouge a subit des dégats !";

        if (pvMageNoir3.innerHTML <= 0){
        
            afficheAction.innerHTML = "Bien joué ! Le prêtre rouge est mort !";
            pvMageNoir3 = 0;
            mageMort3()
        } 

        if (pvhero1.innerHTML <= 0){

            afficheAction.innerHTML = "Vous avez perdu ...?";
            pvhero1.innerHTML = 0;
            mortHero1()
        }
        

        if (manaHero1.innerHTML <= 0){
            manaHero1 = 0;
            
        }

        cacher1();
        cacherSpe1();
    }

    Spe_toros_mage1.onclick = function() {
        if (manaHero1 <= 0){
            afficheAction.innerHTML = "El toros n'a plus asser de mana pour cette action"
            cacher1();
            cacherSpe1();
        }
        
        else{

            var randomSpe = Math.floor(Math.random() * max_spe - min_spe)+ min_spe;
            var random2 = Math.floor(Math.random() * max - min)+ min;

            pvMageNoir.innerHTML = pvMageNoir.innerHTML- randomSpe;
            pvhero1.innerHTML = pvhero1.innerHTML - random2;

            if (pvMageNoir.innerHTML <= 0){
                afficheAction.innerHTML = "Bien joué ! Le mage est mort !";
                pvMageNoir = 0;
                mageMort1();
            } 

            if (pvhero1.innerHTML <= 0){
                afficheAction.innerHTML = "Vous avez perdu ...?";
                pvhero1 = 0;
                mortHero1()
            }
        
            manaHero1.innerHTML = manaHero1.innerHTML - 250;

            if (manaHero1.innerHTML <= 0){
                manaHero1 = 0;

            }
            cacher1();
            cacherSpe1();
        }
    }

    Spe_toros_mage2.onclick = function() {
        
        if (manaHero1 <= 0){
            afficheAction.innerHTML = "El toros n'a plus asser de mana pour cette action"
            cacher1();
            cacherSpe1();
        }
        
        else{
            var min_spe=13;
            var max_spe=25;
            
            var randomSpe = Math.floor(Math.random() * max_spe - min_spe)+ max_spe;
            var random2 = Math.floor(Math.random() * max - min)+ min;

            pvMageNoir2.innerHTML = pvMageNoir2.innerHTML- randomSpe;
            pvhero1.innerHTML = pvhero1.innerHTML - random2;

            if (pvMageNoir2.innerHTML <= 0){
                afficheAction.innerHTML = "Bien joué ! Le mage est mort !";
                pvMageNoir2 = 0;
                mageMort2()
            } 

            if (pvhero1.innerHTML <= 0){
                afficheAction.innerHTML = "Vous avez perdu ...?";
                pvhero1 = 0;
                mortHero1()
            }
        
            if(pvMageNoir2.innerHTML <= 50){
                changeScr();
            }

            manaHero1.innerHTML = manaHero1.innerHTML - 250;

            if (manaHero1.innerHTML <= 0){
                manaHero1 = 0;

            }


            cacher1();
            cacherSpe1();
        }
    }

    Spe_toros_mage3.onclick = function() {
        
        if (manaHero1 <= 0){
            afficheAction.innerHTML = "El toros n'a plus asser de mana pour cette action"
            cacher1();
            cacherSpe1();
        }
        
        else{
            var randomSpe = Math.floor(Math.random() * max_spe - min_spe)+ min_spe;
            var random2 = Math.floor(Math.random() * max - min)+ min;

            pvMageNoir3.innerHTML = pvMageNoir3.innerHTML- randomSpe;
            pvhero1.innerHTML = pvhero1.innerHTML - random2;

            if (pvMageNoir3.innerHTML <= 0){
                afficheAction.innerHTML = "Bien joué ! Le mage est mort !";
                pvMageNoir = 0;
                mageMort3()
            } 

            if (pvhero1.innerHTML <= 0){
                afficheAction.innerHTML = "Vous avez perdu ...?";
                pvhero1 = 0;
                mortHero1()
            }
        
            manaHero1.innerHTML = manaHero1.innerHTML - 250;

            if (manaHero1.innerHTML <= 0){
                manaHero1 = 0;

            }

            cacher1();
            cacherSpe1();
        }
    }

}


{ //Action du chevalier

    Attaque_chevalier1 = document.getElementById("lance_chevalier_mage1");
    Attaque_chevalier2 = document.getElementById("lance_chevalier_mage2");
    Attaque_chevalier3 = document.getElementById("lance_chevalier_mage3");

    Spe_chevalier1 = document.getElementById("spe_chevalier_mage1");
    Spe_chevalier2 = document.getElementById("spe_chevalier_mage2");
    Spe_chevalier3 = document.getElementById("spe_chevalier_mage3");
    
    Spe_chevalier = document.getElementById("quiAttaque_spe2");

    Soins2.onclick = function(){

        if (manaHero2 <= 0){
            afficheAction.innerHTML = "Le chevalier n'a plus asser de mana pour cette action"
            cacher2();
            cacherSpe2();
        }

        else{
            pvhero2.innerHTML = pvhero2.innerHTML -(- 5);
            afficheAction.innerHTML = "Le chevalier regagne 5 pv" ;

            if (pvhero2.innerHTML >= 100 ){
                pvhero2.innerHTML = 100
            }
        
            console.log("le chevalier gagne 5pv")

            manaHero2.innerHTML = manaHero2.innerHTML - 50;

            if (manaHero2.innerHTML <= 0){
                manaHero2 = 0;

            }

            cacher2();
        }

    }
    

    Attaque_chevalier1.onclick = function() {

        var random = Math.floor(Math.random() * max - min)+ min;
        var random2 = Math.floor(Math.random() * max - min)+ min;

        pvMageNoir.innerHTML = pvMageNoir.innerHTML- random;
        pvhero2.innerHTML = pvhero2.innerHTML - random2;

        afficheAction.innerHTML = "Le prêtre bleu subit des dégats !";

        if (pvMageNoir.innerHTML <= 0){
            afficheAction.innerHTML = "Bien joué ! Le mage est mort !";
            pvMageNoir = 0;
            mageMort1();
        } 

        if (pvhero2.innerHTML <= 0){
            afficheAction.innerHTML = "Vous avez perdu ...?";
            pvhero2 = 0;
            mortHero2()
        }
    

        if (manaHero2.innerHTML <= 0){
            manaHero2 = 0;
            
        }
    
        cacher2();
        cacherSpe2();
    }

    Attaque_chevalier2.onclick = function() {

        var random = Math.floor(Math.random() * max - min)+ min;
        var random2 = Math.floor(Math.random() * max - min)+ min;

        pvMageNoir2.innerHTML = pvMageNoir2.innerHTML- random;
        pvhero2.innerHTML = pvhero2.innerHTML - random2;
        

        afficheAction.innerHTML = "Le mage noir a subit des dégats !";

        if (pvMageNoir2.innerHTML <= 0){
        
            afficheAction.innerHTML = "Bien joué ! Le mage noir est mort !";
            pvMageNoir2 = 0;
            mageMort2()
        } 

        if (pvhero2.innerHTML <= 0){

            afficheAction.innerHTML = "Vous avez perdu ...?";
            pvhero2 = 0;
            mortHero2()
        }

        if(pvMageNoir2.innerHTML <= 50){
            changeScr();
        }


        if (manaHero2.innerHTML <= 0){
            manaHero2 = 0;
            
        }

        cacher2();
        cacherSpe2();
    }

    Attaque_chevalier3.onclick = function() {

        var random = Math.floor(Math.random() * max - min)+ min;
        var random2 = Math.floor(Math.random() * max - min)+ min;

        pvMageNoir3.innerHTML = pvMageNoir3.innerHTML- random;
        pvhero2.innerHTML = pvhero2.innerHTML - random2;

        afficheAction.innerHTML = "Le prêtre rouge a subit des dégats !";

        if (pvMageNoir3.innerHTML <= 0){
        
            afficheAction.innerHTML = "Bien joué ! Le prêtre rouge est mort !";
            pvMageNoir3 = 0;
            mageMort3()
        } 

        if (pvhero2.innerHTML <= 0){

            afficheAction.innerHTML = "Vous avez perdu ...?";
            pvhero2 = 0;
            mortHero2()
        }
    

        if (manaHero2.innerHTML <= 0){
            manaHero2 = 0;
            
        }

        cacher2();
        cacherSpe2();
    }
    
    Spe_chevalier1.onclick = function() {
        if (manaHero2 <= 0){
            afficheAction.innerHTML = "Le chevalier n'a plus asser de mana pour cette action"
            cacher2();
            cacherSpe2();
        }
        
        else{
            var randomSpe = Math.floor(Math.random() * max_spe - min_spe)+ min_spe;
            var random2 = Math.floor(Math.random() * max - min)+ min;

            pvMageNoir.innerHTML = pvMageNoir.innerHTML- randomSpe;
            pvhero2.innerHTML = pvhero2.innerHTML - random2;

            afficheAction.innerHTML = "Le prêtre bleu subit des dégats !";

            if (pvMageNoir.innerHTML <= 0){
                afficheAction.innerHTML = "Bien joué ! Le mage est mort !";
                pvMageNoir = 0;
                mageMort1();
            } 

            if (pvhero2.innerHTML <= 0){
                afficheAction.innerHTML = "Vous avez perdu ...?";
                pvhero2 = 0;
                mortHero2()
            }
        
            manaHero2.innerHTML = manaHero2.innerHTML - 250;

            if (manaHero2.innerHTML <= 0){
                manaHero2 = 0;

            }
        
            cacher2();
            cacherSpe2();
        }
    }

    Spe_chevalier2.onclick = function() {
        if (manaHero2 <= 0){
            afficheAction.innerHTML = "Le chevalier n'a plus asser de mana pour cette action"
            cacher2();
            cacherSpe2();
        }
        
        else{
            var randomSpe = Math.floor(Math.random() * max_spe - min_spe)+ min_spe;
            var random2 = Math.floor(Math.random() * max - min)+ min;

            pvMageNoir2.innerHTML = pvMageNoir2.innerHTML- randomSpe;
            pvhero2.innerHTML = pvhero2.innerHTML - random2;


            afficheAction.innerHTML = "Le mage noir a subit des dégats !";

            if (pvMageNoir2.innerHTML <= 0){
            
                afficheAction.innerHTML = "Bien joué ! Le mage noir est mort !";
                pvMageNoir2 = 0;
                mageMort2()
            } 

            if (pvhero2.innerHTML <= 0){

                afficheAction.innerHTML = "Vous avez perdu ...?";
                pvhero2 = 0;
                mortHero2()
            }

            if(pvMageNoir2.innerHTML <= 50){
                changeScr();
            }

            manaHero2.innerHTML = manaHero2.innerHTML - 250;

            if (manaHero2.innerHTML <= 0){
                manaHero2 = 0;

            }

            cacher2();
            cacherSpe2();
        }
    }

    Spe_chevalier3.onclick = function() {
        
        if (manaHero2 <= 0){
            afficheAction.innerHTML = "Le chevalier n'a plus asser de mana pour cette action"
            cacher2();
            cacherSpe2();
        }
        
        else{
            var randomSpe = Math.floor(Math.random() * max_spe - min_spe)+ min_spe;
            var random2 = Math.floor(Math.random() * max - min)+ min;

            pvMageNoir3.innerHTML = pvMageNoir3.innerHTML- randomSpe;
            pvhero2.innerHTML = pvhero2.innerHTML - random2;

            afficheAction.innerHTML = "Le prêtre rouge a subit des dégats !";

            if (pvMageNoir3.innerHTML <= 0){
            
                afficheAction.innerHTML = "Bien joué ! Le prêtre rouge est mort !";
                pvMageNoir3 = 0;
                mageMort3()
            } 

            if (pvhero2.innerHTML <= 0){

                afficheAction.innerHTML = "Vous avez perdu ...?";
                pvhero2 = 0;
                mortHero2()
            }
        
            manaHero2.innerHTML = manaHero2.innerHTML - 250;

            if (manaHero2.innerHTML <= 0){
                manaHero2 = 0;

            }

            cacher2();
            cacherSpe2();
        }
    }

}


{//Action du hero volant
        
    Attaque_vol1 = document.getElementById("lance_vol_mage1");
    Attaque_vol2 = document.getElementById("lance_vol_mage2");
    Attaque_vol3 = document.getElementById("lance_vol_mage3");
        
    Spe_vol1 = document.getElementById("spe_vol_mage1");
    Spe_vol2 = document.getElementById("spe_vol_mage2");
    Spe_vol3 = document.getElementById("spe_vol_mage3");

    Spe_vol = document.getElementById("quiAttaque_spe3");

    Soins3.onclick = function(){
       
        if (manaHero3 <= 0){
            afficheAction.innerHTML = "Le hero volant n'a plus asser de mana pour cette action"
            cacher3();
            cacherSpe3();
        }
        
        else{
            pvhero3.innerHTML = pvhero3.innerHTML -(- 5);
            afficheAction.innerHTML = "Le hero volant regagne 5 pv" ;

            if (pvhero3.innerHTML >= 100 ){
                pvhero3.innerHTML= 100
            }

            manaHero3.innerHTML = manaHero3.innerHTML - 50;

            if (manaHero3.innerHTML <= 0){
                manaHero3 = 0;

            }

            cacher3();
        }

    }

    Attaque_vol1.onclick = function() {
        
        
        var random = Math.floor(Math.random() * max - min)+ min;
        var random2 = Math.floor(Math.random() * max - min)+ min;
    
        pvMageNoir.innerHTML = pvMageNoir.innerHTML- random;
        pvhero3.innerHTML = pvhero3.innerHTML - random2;
      
    
        afficheAction.innerHTML = "Le prêtre bleu subit des dégats !";
    
        if (pvMageNoir.innerHTML <= 0){
            afficheAction.innerHTML = "Bien joué ! Le mage est mort !";
            pvMageNoir = 0;
            mageMort1();
        } 
    
        if (pvhero3.innerHTML <= 0){
            afficheAction.innerHTML = "Vous avez perdu ...?";
            pvhero3 = 0;
            mortHero3()
        }


        if (manaHero3.innerHTML <= 0){
            manaHero3 = 0;
            
        }

        cacher3();
    }
    
    Attaque_vol2.onclick = function() {
        console.log("atk vol 2")
        var random = Math.floor(Math.random() * max - min)+ min;
        var random2 = Math.floor(Math.random() * max - min)+ min;
    
        pvMageNoir2.innerHTML = pvMageNoir2.innerHTML- random;
        pvhero3.innerHTML = pvhero3.innerHTML - random2;

    
        afficheAction.innerHTML = "Le mage noir a subit des dégats !";
    
        if (pvMageNoir2.innerHTML <= 0){
        
            afficheAction.innerHTML = "Bien joué ! Le mage noir est mort !";
            pvMageNoir2 = 0;
            mageMort2()
        } 
    
        if (pvhero3.innerHTML <= 0){
        
            afficheAction.innerHTML = "Vous avez perdu ...?";
            pvhero3 = 0;
            mortHero3()
        }
    
        if(pvMageNoir2.innerHTML <= 50){
            changeScr();
        }
        


       if (manaHero3.innerHTML <= 0){
        manaHero3 = 0;
        
    }

        cacher3();

    }
    
    Attaque_vol3.onclick = function() {
        console.log("atk vol 3")
        var random = Math.floor(Math.random() * max - min)+ min;
        var random2 = Math.floor(Math.random() * max - min)+ min;
    
        pvMageNoir3.innerHTML = pvMageNoir3.innerHTML- random;
        pvhero3.innerHTML = pvhero3.innerHTML - random2;
    
        afficheAction.innerHTML = "Le prêtre rouge a subit des dégats !";
    
        if (pvMageNoir3.innerHTML <= 0){
        
            afficheAction.innerHTML = "Bien joué ! Le prêtre rouge est mort !";
            pvMageNoir3 = 0;
            mageMort3()
        } 
    
        if (pvhero3.innerHTML <= 0){
        
            afficheAction.innerHTML = "Vous avez perdu ...?";
            pvhero3 = 0;
            mortHero3()
        }


        if (manaHero3.innerHTML <= 0){
            manaHero3 = 0;
            
        }

        cacher3();
    }

    Spe_vol1.onclick = function() {
        
        if (manaHero3 <= 0){
            afficheAction.innerHTML = "Le hero volant n'a plus asser de mana pour cette action"
            cacher3();
            cacherSpe3();
        }

        else{
            var randomSpe = Math.floor(Math.random() * max_spe - min_spe)+ min_spe;
            var random2 = Math.floor(Math.random() * max - min)+ min;

            pvMageNoir.innerHTML = pvMageNoir.innerHTML- randomSpe;
            pvhero3.innerHTML = pvhero3.innerHTML - random2;

            afficheAction.innerHTML = "Le prêtre bleu subit des dégats !";

            if (pvMageNoir.innerHTML <= 0){
                afficheAction.innerHTML = "Bien joué ! Le mage est mort !";
                pvMageNoir = 0;
                mageMort1();
            } 

            if (pvhero3.innerHTML <= 0){
                afficheAction.innerHTML = "Vous avez perdu ...?";
                pvhero3 = 0;
                mortHero3()
            }
        
            manaHero3.innerHTML = manaHero3.innerHTML - 250;

            if (manaHero3.innerHTML <= 0){
                manaHero3 = 0;

            }
        
            cacher3();
            cacherSpe3();
        }
    }

    Spe_vol2.onclick = function() {
        
        if (manaHero3 <= 0){
            afficheAction.innerHTML = "Le hero volant n'a plus asser de mana pour cette action"
            cacher3();
            cacherSpe3();
        }
        
        else{
            var randomSpe = Math.floor(Math.random() * max_spe - min_spe)+ max_spe;
            var random2 = Math.floor(Math.random() * max - min)+ min;

            pvMageNoir2.innerHTML = pvMageNoir2.innerHTML- randomSpe;
            pvhero3.innerHTML = pvhero3.innerHTML - random2;

            if (pvMageNoir2.innerHTML <= 0){
                afficheAction.innerHTML = "Bien joué ! Le mage est mort !";
                pvMageNoir2 = 0;
                mageMort2()
            } 

            if (pvhero3.innerHTML <= 0){
                afficheAction.innerHTML = "Vous avez perdu ...?";
                pvhero3 = 0;
                mortHero3()
            }

            if(pvMageNoir2.innerHTML <= 50){
                changeScr();
            }
        
            manaHero3.innerHTML = manaHero3.innerHTML - 250;

            if (manaHero3.innerHTML <= 0){
                manaHero3 = 0;

            }

            cacher3();
            cacherSpe3();
        }
    }

    Spe_vol3.onclick = function() {
        
        if (manaHero3 <= 0){
            afficheAction.innerHTML = "Le hero volant n'a plus asser de mana pour cette action"
            cacher3();
            cacherSpe3();
        }

        else{
            var randomSpe = Math.floor(Math.random() * max_spe - min_spe)+ min_spe;
            var random2 = Math.floor(Math.random() * max - min)+ min;

            pvMageNoir3.innerHTML = pvMageNoir3.innerHTML- randomSpe;
            pvhero3.innerHTML = pvhero2.innerHTML - random2;

            afficheAction.innerHTML = "Le prêtre rouge a subit des dégats !";

            if (pvMageNoir3.innerHTML <= 0){
            
                afficheAction.innerHTML = "Bien joué ! Le prêtre rouge est mort !";
                pvMageNoir3 = 0;
                mageMort3()
            } 

            if (pvhero3.innerHTML <= 0){

                afficheAction.innerHTML = "Vous avez perdu ...?";
                pvhero3 = 0;
                mortHero3()
            }
        
            manaHero3.innerHTML = manaHero3.innerHTML - 250;

            if (manaHero3.innerHTML <= 0){
                manaHero3 = 0;

            }

            cacher3();
            cacherSpe3();
        }
    }

}


{//Action de la guerriere
        
    Attaque_guerriere1 = document.getElementById("lance_guerriere_mage1");
    Attaque_guerriere2 = document.getElementById("lance_guerriere_mage2");
    Attaque_guerriere3 = document.getElementById("lance_guerriere_mage3");
        
    Spe_guerriere1 = document.getElementById("spe_guerriere_mage1");
    Spe_guerriere2 = document.getElementById("spe_guerriere_mage2");
    Spe_guerriere3 = document.getElementById("spe_guerriere_mage3");

    Soins4.onclick = function(){
        
        if (manaHero4 <= 0){
            afficheAction.innerHTML = "La guerriere n'a plus asser de mana pour cette action"
            cacher4();
            cacherSpe4();
        }        
        else{
            pvhero4.innerHTML = pvhero4.innerHTML -(- 5);
            afficheAction.innerHTML = "La guerriere regagne 5 pv" ;

            if (pvhero4.innerHTML >= 100 ){
                pvhero4.innerHTML = 100
            }
            cacher4();
            manaHero4.innerHTML = manaHero4.innerHTML - 50;

            if (manaHero4.innerHTML <= 0){
                manaHero4 = 0;

            }
        }
    }
    

    Attaque_guerriere1.onclick = function() {

        var random = Math.floor(Math.random() * max - min)+ min;
        var random2 = Math.floor(Math.random() * max - min)+ min;
    
        pvMageNoir.innerHTML = pvMageNoir.innerHTML- random;
        pvhero4.innerHTML = pvhero4.innerHTML - random2;
    
        afficheAction.innerHTML = "Le prêtre bleu subit des dégats !";
    
        if (pvMageNoir.innerHTML <= 0){
            afficheAction.innerHTML = "Bien joué ! Le mage est mort !";
            pvMageNoir = 0;
            mageMort1();
        } 
    
        if (pvhero4.innerHTML <= 0){
            afficheAction.innerHTML = "Vous avez perdu ...?";
            pvhero4 = 0;

            mortHero4()
        }

        if (manaHero4.innerHTML <= 0){
            manaHero4 = 0;
            
        }

        cacher4();
    }
    
    Attaque_guerriere2.onclick = function() {

        var random = Math.floor(Math.random() * max - min)+ min;
        var random2 = Math.floor(Math.random() * max - min)+ min;
    
        pvMageNoir2.innerHTML = pvMageNoir2.innerHTML- random;
        pvhero4.innerHTML = pvhero4.innerHTML - random2;
    
        afficheAction.innerHTML = "Le mage noir a subit des dégats !";
    
        if (pvMageNoir2.innerHTML <= 0){
        
            afficheAction.innerHTML = "Bien joué ! Le mage noir est mort !";
            pvMageNoir2 = 0;
            mageMort2()
        } 
    
        if (pvhero4.innerHTML <= 0){
        
            afficheAction.innerHTML = "Vous avez perdu ...?";
            pvhero4 = 0;
            mortHero4()
        }
    
        if(pvMageNoir2.innerHTML <= 50){
            changeScr();
        }


       if (manaHero4.innerHTML <= 0){
        manaHero4 = 0;
        
    }

        cacher4();
    
    }
    
    Attaque_guerriere3.onclick = function() {

        var random = Math.floor(Math.random() * max - min)+ min;
        var random2 = Math.floor(Math.random() * max - min)+ min;
    
        pvMageNoir3.innerHTML = pvMageNoir3.innerHTML- random;
        pvhero4.innerHTML = pvhero4.innerHTML - random2;
    
        afficheAction.innerHTML = "Le prêtre rouge a subit des dégats !";
    
        if (pvMageNoir3.innerHTML <= 0){
        
            afficheAction.innerHTML = "Bien joué ! Le prêtre rouge est mort !";
            pvMageNoir3 = 0;
            mageMort3()
        } 
    
        if (pvhero4.innerHTML <= 0){
        
            afficheAction.innerHTML = "Vous avez perdu ...?";
            pvhero4 = 0;
            mortHero4()
        }


        if (manaHero4.innerHTML <= 0){
            manaHero4 = 0;
            
        }

        cacher4();
    }

    Spe_guerriere1.onclick = function() {
        
        if (manaHero4 <= 0){
            afficheAction.innerHTML = "La guerriere n'a plus asser de mana pour cette action"
            cacher4();
            cacherSpe4();
        }  

        else {
            var randomSpe = Math.floor(Math.random() * max_spe - min_spe)+ min_spe;
            var random2 = Math.floor(Math.random() * max - min)+ min;

            pvMageNoir.innerHTML = pvMageNoir.innerHTML- randomSpe;
            pvhero4.innerHTML = pvhero4.innerHTML - random2;

            afficheAction.innerHTML = "Le prêtre bleu subit des dégats !";

            if (pvMageNoir.innerHTML <= 0){
                afficheAction.innerHTML = "Bien joué ! Le mage est mort !";
                pvMageNoir = 0;
                mageMort1();
            } 

            if (pvhero4.innerHTML <= 0){
                afficheAction.innerHTML = "Vous avez perdu ...?";
                pvhero4 = 0;
                mortHero4()
            }
        
            manaHero4.innerHTML = manaHero4.innerHTML - 250;

            if (manaHero4.innerHTML <= 0){
                manaHero4 = 0;

            }
        
            cacher4();
            cacherSpe4();
        }
    }

    Spe_guerriere2.onclick = function() {

        if (manaHero4 <= 0){
            afficheAction.innerHTML = "La guerriere n'a plus asser de mana pour cette action"
            cacher4();
            cacherSpe4();
        }

        else{
            var randomSpe = Math.floor(Math.random() * max_spe - min_spe)+ min_spe;
            var random2 = Math.floor(Math.random() * max - min)+ min;

            pvMageNoir2.innerHTML = pvMageNoir2.innerHTML- randomSpe;
            pvhero4.innerHTML = pvhero4.innerHTML - random2;
            

            afficheAction.innerHTML = "Le mage noir a subit des dégats !";

            if (pvMageNoir2.innerHTML <= 0){
            
                afficheAction.innerHTML = "Bien joué ! Le mage noir est mort !";
                pvMageNoir2 = 0;
                mageMort2()
            } 

            if (pvhero4.innerHTML <= 0){

                afficheAction.innerHTML = "Vous avez perdu ...?";
                pvhero4 = 0;
                mortHero4()
            }

            if(pvMageNoir2.innerHTML <= 50){
                changeScr();
            }

            manaHero4.innerHTML = manaHero4.innerHTML - 250;


            if (manaHero4.innerHTML <= 0){
                manaHero4 = 0;

            }
            cacher4();
            cacherSpe4();
        }
    }

    Spe_guerriere3.onclick = function() {

        if (manaHero4 <= 0){
            afficheAction.innerHTML = "La guerriere n'a plus asser de mana pour cette action"
            cacher4();
            cacherSpe4();
        }

        else{
            var randomSpe = Math.floor(Math.random() * max_spe - min_spe)+ min_spe;
            var random2 = Math.floor(Math.random() * max - min)+ min;

            pvMageNoir3.innerHTML = pvMageNoir3.innerHTML- randomSpe;
            pvhero4.innerHTML = pvhero4.innerHTML - random2;

            afficheAction.innerHTML = "Le prêtre rouge a subit des dégats !";

            if (pvMageNoir3.innerHTML <= 0){
            
                afficheAction.innerHTML = "Bien joué ! Le prêtre rouge est mort !";
                pvMageNoir3 = 0;
                mageMort3()
            } 

            if (pvhero4.innerHTML <= 0){

                afficheAction.innerHTML = "Vous avez perdu ...?";
                pvhero4 = 0;
                mortHero4()
            }
        
            manaHero3.innerHTML = manaHero3.innerHTML - 250;

            if (manaHero4.innerHTML <= 0){
                manaHero4 = 0;

            }
            cacher4();
            cacherSpe4();

            

        }


    }
}
}