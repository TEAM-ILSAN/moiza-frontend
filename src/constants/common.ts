export const enum EdgeDirection {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

// 정규 표현식
export const isName = /^[가-힣]{2,30}$/;
export const isGender = /^(?:male|female)$/;
export const isLocation = /(([가-힣A-Za-z·\d~\-\.]{2,}(로|길).[\d]+)|([가-힣A-Za-z·\d~\-\.]+(읍|동)\s)[\d]+)/;
