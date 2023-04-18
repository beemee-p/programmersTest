// 크기가 작은 부분문자열
// 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 
// 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

function solution(t, p) {
    let sum = 0;
    let num = 0;

    for(var i = 0; i < t.length; i++){
        num = t.slice(i, i + p.length);
        if(num.length === p.length && num <= p){
            sum += 1;   
        }
    }
    return sum;
}

console.log(solution('3141592', '271'));