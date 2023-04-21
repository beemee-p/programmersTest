// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
     let i = 1;
    let sum = 0;
    while(i <= n){
        if(n % i === 0){
            sum = sum + i
        }
        i += 1
    }
    return sum
}