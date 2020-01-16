peptide='RANDIMPEPTIDETEST'

randomizer = function(peptide){
	pepl=peptide.length
	pepidxs=Array.from(new Array(pepl-2), (x,i) => i + 1).reverse()
	pepidxs.push(pepl-1)
	pepidxs.unshift(0)
	chars = peptide.split('')
	new_chars = pepidxs.map(x => chars[x])
	new_peptide=new_chars.join('')

	return new_peptide
}

console.log(randomizer(peptide))
