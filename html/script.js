//Shallow Copy Demo

const sampleObj = {
	a: 1,
  b: 2,
  d: {
  	e: 5
  }
}

//{ a: 1, b: 2, d: {e: 5} }
//const sampleCopy = { ...sampleObj };

const sampleCopy = Object.assign({}, sampleObj);


//const sampleCopy = sampleObj;
/* sampleCopy.d.f = 6; */
sampleCopy.a = 10000;
sampleCopy.d.e = 1000;

console.log("sampleObj =>", sampleObj);
console.log("sampleCopy =>", sampleCopy);


