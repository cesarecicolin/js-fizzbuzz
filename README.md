### esercizio 
 **Consegna:**
 Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
 **Prima di partire a scrivere codice poniamoci qualche domanda:**
 Come faccio a sapere se un numero è divisibile senza resto per un altro?
 Abbiamo visto qualcosa di particolare che possiamo usare?
**Consigli del giorno:**
 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
 **BONUS 1:**
 Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
**BONUS 2:**
 Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

 **dati**
 
 1. per i multipili di 3 deve uscire fizz (x%3 ==0)
 2. per i multipli di 5 deve uscire buzz    (x%5 ==0)
 3. per i multipli di 3 e 5 deve uscire fizz buzz (x%3 ==0)and(x%5 ==0)

 **logica**

 1. generare i 100 numeri 
 2. scoprire i multipli di 3 e 5 e trasformarli in fizz e buzz (nel caso sia multiplo di entrambi fizzbuzz)
 3. console.log