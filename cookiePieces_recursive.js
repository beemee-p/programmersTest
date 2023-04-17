// recursive practice 

function eat (cookie){
    if(cookie < 1){ 
        return 'im full';
    }

    cookie -= 1
    console.log('...still have ' + cookie + ' pieces');
    return eat(cookie);
    
}

function cookieCutter(cookie) {
  return cookie * 12;
}

const cookiePieces = cookieCutter(2);
eat(cookiePieces);