$(document).ready(function () {
  var studente = {
    nome : 'manuel',
    cognome : 'de angelis',
    eta : 15,
  }
  for (var key in studente) {
    console.log(studente[key]);
  }
  var classe = [
    {
      nome : 'luca',
      cognome : 'zinni',
      eta : 16,
    },
    {
      nome : 'mario',
      cognome : 'benni',
      eta : 17,
    },
    {
      nome : 'gino',
      cognome : 'belli',
      eta : 13,
    },
    {
      nome : 'carlo',
      cognome : 'vino',
      eta : 12,
    },
  ]
  for (var i = 0; i < classe.length; i++) {
    var classi = classe[i];
    for (var k in classi) {
      console.log(classi.nome, classi.cognome);
    }
  }
  var nome = prompt('inserisci un nome');
  var cognome = prompt('inserisci un cognome');
  var eta = parseInt(prompt('inserisci l eta'));
  classe.push(
    {
      nome : nome,
      cognome : cognome,
      eta : eta
    },
  );
  console.log(classe);
})
