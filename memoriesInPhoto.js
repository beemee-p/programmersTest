// 추억 점수
// 사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 합니다. 
// 사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수가 됩니다. 
// 예를 들어 사진 속 인물의 이름이 ["may", "kein", "kain"]이고 각 인물의 그리움 점수가 [5점, 10점, 1점]일 때 해당 사진의 추억 점수는 16(5 + 10 + 1)점이 됩니다. 

function solution (name, yearning, photo) {
  let obj = {};

  name.forEach((n, i) =>
    obj[n] = yearning[i]
  );

  for(let i = 0; i < photo.length; i++) {
    let sum = 0;
    
    for(let j = 0; j < photo[i].length; j++){
      if(obj[photo[i][j]]) sum += obj[photo[i][j]]; 
    }
    photo[i] = sum;
  }

  return photo;
}