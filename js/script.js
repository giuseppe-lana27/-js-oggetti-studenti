/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

//1. creo l'oggetto studente
var studente = {
  'nome': 'Giuseppe',
  'cognome': 'Lana',
  'eta': 26
}
// stampo in console le proprietà dell'oggetto studente
for (var key in studente){
  console.log(key);
}

//2. creo array di oggetti studenti
var studenti = [
  {
    'nome': 'Giuseppe',
    'cognome': 'Lana',
    'eta': 26
  },
  {
    'nome': 'Roberta',
    'cognome': 'Rossi',
    'eta': 23
  },
  {
    'nome': 'Giacomo',
    'cognome': 'Verdi',
    'eta': 21
  }
];
// stampo in console il nome e il cognome degli studenti
for (var i = 0; i < studenti.length; i++ ){
  console.log(studenti[i]['nome']);
  console.log(studenti[i]['cognome']);
}
