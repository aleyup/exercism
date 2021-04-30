
export const encode = (string) => {
  let str = Array.from(string)
  let count = 0;
  let encoded = [];
  
  for (let i = 0; i < str.length; i++) {
    let cur = str[i];
    let prev = str[i - 1];
    if(cur === prev) {
      count += 1
      encoded.pop()
      encoded.push(count + str[i])
    } else {
      count = 1
      encoded.push(str[i])
    }
  }
  return encoded.join('')
};



export const decode = (string) => {
  let arr = Array.from(string)
  console.log(arr)
  let str = [];

  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i]
    let prev = arr[i - 1];
    let next = arr[i + 1]
    if (isFinite(prev)) {
      let num = Number(prev)
      str.push(arr[i].repeat(num))
    } else if(isFinite(next)) {
      str.push(arr[i])
    } else if(!isFinite(cur) && !isFinite(prev) && !isFinite(next)) {
      str.push(cur)
    }
  }
  // return str.join('')
  console.log(str.join(''))
};

encode('bbbbbbbbbbbbbbbbbbcccc')
decode('2  hs12q q2w2 ')