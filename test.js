if (typeof fetch !== 'function') {
	global.fetch = require('node-fetch-polyfill');
}


var d3 = require("d3");
console.log("test");

spectrum1 = [[1, 2],[2, 4]]


f = function(x){
	return( Math.floor(10 * x) / 10)
}

g = function(data) {console.log("abc"); console.log(data);console.log("fgh")}

URL = "https://www.proteomicsdb.org/logic/api/getReferenceSpectrum.xsjs?sequence=SCTLFPQNPNLPPPSTRER&mods=Carbamidomethyl@C2&charge=3"
//a  = d3.json(URL , g).then(x=>console.log(x));

console.log("works");

postbody = {"sequence": ["TDLHAFENLEIIR", "TDLHAFENLEIIR"], "charge": [2, 3], "ce": [25, 30]};
//console.log(postbody);



//    d3.json('https://www.proteomicsdb.org/logic/api/getFragmentationPrediction.xsjs', {
//	          method:"post",
//	          body: JSON.stringify(postbody)}).then(json => console.log(json));



// EQUAL OPERATOR
// IF IN DOUBT USE 3 x =
// COMPARE BY VALUE
console.log("0" == 0.0)
// COMPARE VALUE + Type
console.log("0" === 0.0)

spectrum = [1,2,3,4,5,6]


// MAP
multiplied_spectrum = spectrum.map(x => x*2)
console.log(multiplied_spectrum)
multiplied_spectrum = spectrum.map(x => [x*2])
console.log(multiplied_spectrum)
multiplied_spectrum = spectrum.map(x => {return {"multiplied":x*2}})
console.log(multiplied_spectrum)

// REDUCE
g = function(p, n){

	p = p + n;
	return p;

}

summed = spectrum.reduce(g, 0)
console.log(summed)



// FILTER
f = function(x){
	if (x%2 ===0){
		return true}
	return false;
}
filtered = spectrum.filter(f) 
console.log(filtered)
filtered = spectrum.filter(x=> x%2===0?true:false)
console.log(filtered)
filtered = spectrum.filter(x=> x%2===0)
console.log(filtered)



// EXAMPLE BINNED SPECTRA
//
var groupBy = function(data, key) { // `data` is an array of objects, `key` is the key (or property accessor) to group by
	// reduce runs this anonymous function on each element of `data` (the `item` parameter,
	//   // returning the `storage` parameter at the end
	return data.reduce(function(storage, item) {
		//         // get the first instance of the key by which we're grouping
		var group = item[key];
		//                 
		//                     // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
		storage[group] = storage[group] || [];
		//                             
		//                                 // add this item to its group within `storage`
		storage[group].push(item);
		//                                         
		//                                             // return the updated storage to the reduce function, which will then loop through the next 
		return storage; 
	}, {}); // {} is the initial value of the storage
};




spectrum_binned = [{"mz": 15, "intensity" : 1}, {"mz": 15, "intensity" : 2}, {"mz": 20, "intensity": 10}]

console.log(groupBy(spectrum_binned, "mz"))
