Progetto Angular per Gestione Utenti & Post via API

## **Descrizione del progetto**
L’applicazione ha l’obiettivo di migliorare la vita nelle città urbane, permettendo agli utenti di condividere idee, segnalazioni e commenti per supportare il patrimonio culturale e naturale, e favorire legami sociali positivi.
Questo progetto è una dashboard frontend realizzata con Angular (versione 20.1.3) che consente di gestire utenti e post tramite integrazione con le REST-API di GoRest. L’app include: autenticazione via token, operazioni CRUD (creazione, lettura, aggiornamento, cancellazione), ricerca, e gestione dei commenti su post.
GitHub

## **Funzionalità dell’applicazione**

Attualmente l’app consente:

1. Login

- Accesso tramite token speciale generato su GoREST Login
- Il token viene salvato in sessionStorage e utilizzato per tutte le chiamate HTTP.
- Funzionalità di logout per terminare la sessione.

2. Elenco utenti

- Visualizzazione lista utenti con informazioni base.
- Ricerca per nome o email.
- Creazione di nuovi utenti.
- Eliminazione utenti.

3. Dettaglio utente

- Visualizzazione completa dei dettagli dell’utente.
- Elenco dei post associati all’utente.
- Visualizzazione dei commenti di ogni post.
- Inserimento di nuovi commenti (opzionale, implementato).

4. Elenco post

- Visualizzazione di tutti i post presenti.
- Ricerca post per titolo o contenuto.
- Visualizzazione commenti di ogni post.
- Creazione di nuovi post.

5. Test unitari

- Implementati test unitari per componenti e servizi principali.
- Coverage superiore al 60%.

6. Struttura modulare (opzionale)

- L’applicazione utilizza multi-modulo e lazy loading per ottimizzare le performance.


## **Librerie & Tecnologie Usate**

- Angular 20.1.3 (generato con Angular CLI)
- TypeScript
- Angular HTTP Client (comunicazione con API)
- Angular Router (gestione della navigazione tra pagine)
- Angular Material (componenti UI)
- RxJS (gestione di Observable e operazioni asincrone)
- TypeScript, HTML, CSS per frontend
- REST API, GoRest, per backend (l’app comunica con servizi esterni per utenti, post e commenti.)
- Jasmine + Karma (per testing)

## **Come configurare e avviare l’app in locale**

Per eseguire il progetto localmente, segui questi passi:

`git clone https://github.com/leti74/Progetto-Angular-di-Letizia-Marra.git`
`cd Progetto-Angular-di-Letizia-Marra`
`npm install`
`ng serve`

Apri il browser a:

http://localhost:4200/

L’app si ricaricherà automaticamente ad ogni modifica del sorgente.
GitHub

Per build di produzione:

`ng build`

Per generare nuovi componenti / moduli / servizi (scaffolding Angular CLI):

`ng generate component nome-componente`
`ng generate service nome-servizio`

## **Approfondimenti: come è stata sviluppata l’app**

La logica di interazione con API esterne (GoRest) è gestita tramite servizi Angular — per garantire separazione di responsabilità (UI / dati).

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
