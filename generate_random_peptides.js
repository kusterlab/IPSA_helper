d3 = require('d3')
peptide='XYUNDIMPEPTIDETEVWZ'
offset=5

randomizer = function(peptide,offset){
	pepl=peptide.length
	all_pepidxs=Array.from(new Array(pepl), (x,i) => i)
        pepidxs=Array.from(new Array(pepl -offset *2), (x,i) => i + offset)
	pepidxs_shuffle=d3.shuffle(pepidxs)
	pepidxs_concat=all_pepidxs.slice(0,offset).concat(pepidxs_shuffle.concat(all_pepidxs.slice(-offset)))
	chars = peptide.split('')
	new_chars = pepidxs_concat.map(x => chars[x])
	new_peptide=new_chars.join('')
	
	return new_peptide
}

console.log(randomizer(peptide,offset))

