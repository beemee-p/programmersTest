// 명예의 전당
// k일까지 최하점을 배열에 담아준 뒤,
// k일까지 점수를 오름차순으로 바꾸고 다음 날의 점수와 비교하며 교체해준다.
// 최하점을 추가해준다.
function solution(k, score) {
    let arr = sortScore(score.slice(0, k));
    const answer = arr.map(v => v = arr[k - 1]);

    for(var i = k; i < score.length; i++){
        if(score[i] > arr[k - 1]){
            arr[k - 1] = score[i];
            arr = sortScore(arr);
        } 
       answer.push(arr[k - 1])
    }

    function sortScore(sortedArr){
        return sortedArr.sort((a, b) => b - a );
    }

    return answer;
}