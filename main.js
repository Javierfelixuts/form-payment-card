(() => {

    //Variables
    let card_container = document.getElementById("card_container");
    let card_number_form = document.getElementById("card_number");
    let card_number_text = document.getElementById("card_number_text");

    let card_name_form = document.getElementById("card_name");
    let card_name_text = document.getElementById("card_name_text")
    
    let month_expiration = document.getElementById("month");
    let month_expiration_text = document.getElementById("month_text");
    let year_expiration = document.getElementById("year");
    let year_expiration_text = document.getElementById("year_text");

    let signature_text = document.getElementById("signature_text");
    let cvv = document.getElementById("cvv")
    let cvv_text = document.getElementById("cvv_text")
    //Eventos
    
    //rotateContentCard(180)
    let isCardRotated = false;
    card_container.addEventListener('click', function(e){
        
        isCardRotated = !isCardRotated;

        if(isCardRotated){
            rotateContentCard(180)
        }else{
            rotateContentCard(0)
        }
        
    });

    card_number_form.addEventListener('input', onChangeCard);
    card_number_form.addEventListener('focus', () => rotateContentCard(0));

    month_expiration.addEventListener('change', onChangeMonth)
    month_expiration.addEventListener('focus', () => rotateContentCard(0))
    
    year_expiration.addEventListener('change', onChangeYear)
    year_expiration.addEventListener('focus', () => rotateContentCard(0))
    
    cvv.addEventListener('input', onChangeCVV)
    cvv.addEventListener('focus', () => rotateContentCard(180))

    card_name_form.addEventListener('input', onChangeName)
    card_name_form.addEventListener('focus', () => rotateContentCard(0))
    
    function onChangeCard(){
        card_number_text.innerHTML = formatCardNumber(card_number_form.value)
        
        if(card_number_form.value.length >= 16){
            card_number_form.value = limitLength(card_number_form.value, 0, 16)
        }
        if(card_number_form.value.length == 0) {
            card_number_text.innerHTML = '#### #### #### ####'
        }
    }

    function onChangeMonth(event){
        month_expiration_text.innerHTML =  event.target.value;
    }

    function onChangeYear(event){
        year_expiration_text.innerHTML = event.target.value;
    }

    function onChangeCVV(){
        cvv_text.innerHTML = limitLength(cvv.value, 0, 3)
        if(cvv.value.length >= 3){
            cvv.value = limitLength(cvv.value, 0, 3)
        }
    }

    function onChangeName(){
        const maxLength = 33;

        card_name_text.innerHTML = limitLength(card_name_form.value, 0, maxLength).toUpperCase();
        signature_text.innerHTML = card_name_form.value;
        if(card_name_form.value.length >= maxLength){
            card_name_form.value = limitLength(card_name_form.value, 0, maxLength);
        }
        if(card_name_form.value.length == 0){
            card_name_text.innerHTML = 'Nombre Titular'
        }
    }

    function rotateContentCard(deg){
        card_container.style.transition = '.3s';
        card_container.style.transform = `rotateY(${deg}deg)`;
    }

    function formatCardNumber(card_number_form){
        return card_number_form.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ');
    }
    function limitLength(value, minLength, maxLength){
        return value.slice(minLength, maxLength);
    }


})()