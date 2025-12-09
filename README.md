# Progetto Angular – Dashboard utenti/post

## **Descrizione del progetto**

Questo progetto è una dashboard frontend realizzata con Angular (versione 20.1.3) che consente di gestire utenti e post tramite integrazione con le REST-API di GoRest. L’app include: autenticazione via token, operazioni CRUD (creazione, lettura, aggiornamento, cancellazione), ricerca, e gestione dei commenti su post.
GitHub

## **Librerie & Tecnologie Usate**

- Angular 20.1.3 (generato con Angular CLI)
- Angular HTTP Client (comunicazione con API)
- Angular Material (componenti UI)
- TypeScript, HTML, CSS/SCSS per frontend
- REST API, GoRest, per backend (l’app comunica con servizi esterni per utenti, post e commenti.)

## **Struttura del progetto**

Alla root del progetto trovi file di configurazione standard di Angular: angular.json, package.json, tsconfig.json, etc.

La cartella src/ contiene il codice sorgente dell’app Angular; la struttura tipica include componenti, servizi, moduli, template, stili.

## **Funzionalità dell’applicazione**

Attualmente l’app consente:

- Autenticazione tramite token verso API (login / validazione)
- Creazione, lettura, modifica e cancellazione di utenti e post
- Ricerca utenti / post
- Visualizzazione dettagli utenti
- Gestione commenti su post (creazione / visualizzazione)
- Navigazione multipagina (via router Angular)
- Interfaccia frontend web (form, liste, tabelle o card, dettagli)

## **Come configurare e avviare l’app in locale**

Per eseguire il progetto localmente, segui questi passi:

`git clone https://github.com/leti74/`
`Progetto-Angular-di-Letizia-Marra.git`
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
