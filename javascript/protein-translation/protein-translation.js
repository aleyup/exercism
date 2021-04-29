// wasn't able to find a way to throw en Error about an invalid codon

let arr = [
  [['AUG'], 'Methionine'],
  [['UUU', 'UUC'], 'Phenylalanine'],
  [['UUA', 'UUG'], 'Leucine'],
  [['UCU', 'UCC', 'UCA', 'UCG'], 'Serine'],
  [['UAU', 'UAC'], 'Tyrosine'],
  [['UGU', 'UGC'], 'Cysteine'],
  [['UGG'], 'Tryptophan'],
  [['UAA', 'UAG', 'UGA'], 'STOP'],
];

export const translate = (rna = ' ') => {
  let codons = rna.toUpperCase().match(/.{1,3}/g);
  let protein = [];
  for (let elem = 0; elem < codons.length; elem++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0].includes(codons[elem])) {
        protein.push(arr[i][1]);
      }
    }
  }
  if (protein.includes('STOP')) {
    let stop = protein.findIndex((elem) => elem === 'STOP');
    protein.splice(stop);
  }
  return protein;
};
