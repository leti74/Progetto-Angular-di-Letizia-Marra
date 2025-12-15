Componenti modulari + routing per gestire le varie viste (lista utenti, dettaglio, post, commenti, login).

Uso di HTTP requests per comunicazione con backend esterno (GET, POST, DELETE).

Tipizzazione con TypeScript per modelli di “utente”, “post”, “commento”: facilita manutenzione e riduce errori runtime.

Struttura ordinata: separazione fra codice UI (componenti), logica dati (servizi), configurazioni e assets — buona per scalabilità e collaborazioni.

## **Struttura Dati / Modelli**

export interface User {
id: number;
name: string;
email: string;
gender: string;
status: string;
}

export interface Post {
id: number;
user_id: number;
title: string;
body: string;
}

export interface Comment {
id: number;
post_id: number;
name: string;
email: string;
body: string;
}

## **Testing (Jasmine + Karma)**

L'app utilizza il sistema di testing di default di Angular:

Jasmine → framework dei test

Karma → test runner

Avvio test unitari:
`ng test`

Karma aprirà un browser e mostrerà i risultati dei test Jasmine.

## **Link App**

https://leti74.github.io/Progetto-Angular-di-Letizia-Marra/
