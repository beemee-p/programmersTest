// recursive practice 

function eat (cookie){
    if(cookie < 1){ 
        return 'im full';
    }

    cookie -= 1
    console.log('...still have ' + cookie + ' pieces');
    return eat(cookie);
    
}

const cookiePieces = 12;
eat(cookiePieces);