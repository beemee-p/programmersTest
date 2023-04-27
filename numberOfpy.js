// 문자열 내 p와 y의 개수
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

function solution(s){
   let words = [];
    words = s.split("");
    let answer; 
    let psum = 0, ysum = 0;

    for(let i=0; i<words.length; i++){
      if(words[i]=="p" || words[i]=="P") psum++;
      else if(words[i]=="y" || words[i]=="Y") ysum++;
    }

    if(psum == ysum) answer = true; 
    else if(psum == ysum && psum == 0) answer = false; 
    else answer = false; 
     
    return answer;
}