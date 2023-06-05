// 명예의 전당
// k일까지 최하점을 배열에 담아준 뒤,
// k일까지 점수를 오름차순으로 바꾸고 다음 날의 점수와 비교하며 교체해준다.
// 최하점을 추가해준다.

function solution(k, score) {
    const arr = [];
    const answer = [];

    for(let i = 0; i < score.length; i++) {
        arr.push(score[i]);         // 하나씩 넣어주고
        arr.sort((a, b) => b - a);  // 내림차순 정렬

        if(i < k){
            answer.push(arr[arr.length - 1]);  // 마지막 요소를 추가
        } else {
            answer.push(arr[k - 1]);
        }
    }
    return answer;
}