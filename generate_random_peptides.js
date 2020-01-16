d3 = require('d3')
peptide='RANDIMPEPTIDETEST'

randomizer = function(peptide){
	pepl=peptide.length
	pepidxs=Array.from(new Array(pepl-2), (x,i) => i + 1)
	pepidxs_shuffle=d3.shuffle(pepidxs)
	pepidxs_shuffle.push(pepl-1)
	pepidxs_shuffle.unshift(0)
	chars = peptide.split('')
	new_chars = pepidxs_shuffle.map(x => chars[x])
	new_peptide=new_chars.join('')

	return new_peptide
}

console.log(randomizer(peptide))

