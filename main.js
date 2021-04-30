const NUMBER_WORDS = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  }
  let args = process.argv.splice(2)
   
  let result = ''
   
  for (let i = 0; i < args.length; i++) {
   
    const digits = args[i].split('')
   
   
    for (let j = 0; j < digits.length; j++) {
      result += (NUMBER_WORDS[digits[j]]);
    }
   
    if (i < args.length - 1) {
      result += ','
    }
  }
   

  console.log(result);