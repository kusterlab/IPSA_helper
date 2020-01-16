// [{"mz": v1, "intensity": v2}, ...]
// TODO needs a sorted array
function binarySearch(arr,target){
	var midpoint = Math.floor(arr.length/2);

	if (arr[midpoint] === target){
		return arr[midpoint];
	}
	if (arr.length === 1){
		return arr[0];
	}

	if (arr[midpoint] > target){
		return binarySearch(arr.slice(0,midpoint),target);
	}else if (arr[midpoint] < target){
		return binarySearch(arr.slice(midpoint),target);
	}
}

function binarySearch_spec(arr,target){
	var midpoint = Math.floor(arr.length/2);

	if (arr[midpoint]["mz"] == target){
		console.log("here")
		return arr[midpoint];
	}
	if (arr.length == 1){
		console.log("there")
		return arr[0];
	}

	if (arr[midpoint]["mz"] > target){
		return binarySearch_spec(arr.slice(0,midpoint),target);
	}else if (arr[midpoint]["mz"] < target){
		return binarySearch_spec(arr.slice(midpoint),target);
	}
}

sorter = function(attribute, type){ 
	return function(peak1, peak2){
		if (peak1[attribute] > peak2[attribute]) {
			return type==="asc"?1:-1;
		}
		if (peak2[attribute] > peak1[attribute]) {
			return type==="asc"?-1:1;
		}
		return 0;
	}
}

sorter_asc = sorter("mz", "asc")
sorter_asc_intensity = sorter("intensity", "desc")

spectrum = [{"mz":1019.74, "intensity": 1000000000},
	{"mz":326.1, "intensity": 122095.0},
	{"mz":326.12, "intensity": 111771.0},
	{"mz":351.1, "intensity": 60817.0},
	{"mz":354.1, "intensity": 94638.0},
	{"mz":358.3, "intensity": 69098.0},
	{"mz":361.3, "intensity": 96982.0},
	{"mz":368.0, "intensity": 80302.0}]

spectrum = spectrum.sort(sorter_asc)
spec1 =  Object.assign([], spectrum);
spec1.push({"mz": 400, "intensity": 12})

spectrum_intensity = spec1.sort(sorter_asc_intensity)
console.log(spectrum)
console.log(spectrum_intensity)

compare_ppm = function(peak1, peak2, ppm){
	// asking if peak2 is close to peak1
	error = 1 / Math.pow(10, 6) * ppm * peak1["mz"]
	return(peak2["mz"] < peak1["mz"] + error && peak2["mz"] > peak1["mz"] - error)
}

f_peak = function(peak){
	console.log(peak["mz"])
	a = binarySearch_spec(spectrum, peak["mz"])
	is_inside = compare_ppm(a, peak, 20)
	console.log(is_inside)
	if(is_inside){
		if(peak["exp_intensity"] < a["intensity"]){
			// If a second predicted/reference peak would match to an experimental one. use the one with higher intensity
			peak["exp_intensity"] = a["intensity"]
		}
	}else{
		peak["exp_intensity"] = 0
	}
	console.log(a)
	console.log("#####################################");

	return(peak)
}

add_exp_flag = function(peak){
	peak["exp_intensity"] = 0
	return(peak)
}
extract_mzs = function(prev, peak){
	prev["intensity_1"].push( peak["exp_intensity"])
	prev["intensity_2"].push(  peak["intensity"])
	return(prev)
}
zz = spectrum_intensity.map(add_exp_flag).map(f_peak).reduce(extract_mzs, {"intensity_1":[], "intensity_2":[]})

console.log(zz);
