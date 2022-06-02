// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript

function dataReverse(data) {
  let byte1 = []
  let byte2 = []
  let byte3 = []
  let byte4 = []
  
  for(i=0; i<=data.length-1; i++){
     if(byte1.length <= 7){
        byte1.push(data[i])
     } else if(byte2.length <= 7){
         byte2.push(data[i])
     } else if(byte3.length <= 7){
         byte3.push(data[i])
     } else {
         byte4.push(data[i])
     }
  }

byte1 = byte1.toString()
const byte1string = byte1.replace(/,/g, '');

byte2 = byte2.toString()
const byte2string = byte2.replace(/,/g, '');

byte3 = byte3.toString()
const byte3string = byte3.replace(/,/g, '');

byte4 = byte4.toString()
const byte4string = byte4.replace(/,/g, '');

console.log(`${byte4string} byte4\n${byte3string} byte3\n${byte2string} byte2\n${byte1string} byte1`)
}
dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0])
console.log('=====')
dataReverse([1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1])