## :chocolate_bar: Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
## :chocolate_bar: Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

## :chocolate_bar: Snack3
Crea un array composto da 4 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
### Svolgimento
>1. Creare array da oggeti auto
>2. Creare 3 array: benzina, diesel, resto
>3. Per ogni automobile controllare la sua alimentazione e inserire con switch nell'array giusto


## :chocolate_bar: Snack4
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
### Svolgimento
1. Creaimo un array di oggetti di persone
2. Scorriamo l'array di persone e per ogni persona
    - [ ] Creaimo un array
    - [ ] Inseriamo nel primo indice: `${nome, cognome}`
    - [ ] Nel secondo indice facciamo un confronto se età > 18
        - Può guidare
        - [ ] Altrimenti
            - Non può guidare

>### :chocolate_bar: :star: Snack Bonus
>Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
>La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
>Usiamo i nuovi metodi degli array foreach o filter.