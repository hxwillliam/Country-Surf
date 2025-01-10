# Country Surf

Una semplice applicazione fatta in React che utilizza Vite e React Router. L'applicazione sfrutta le API [REST Countries](https://restcountries.com/) per visualizzare informazioni sui paesi del mondo.

## Come Clonare ed Eseguire l'Applicazione

### Prerequisiti

Node.js e npm

### Clonare il Repository

bash
```git clone https://github.com/tuo-username/country-surf.git```
```cd country-explorer```

Installare le Dipendenze
```npm install```

Avviare l'Applicazione
```npm run dev```


Struttura del Progetto
src/
├── components/
│   ├── CountryCard.tsx
│   ├── CountryList.tsx
│   ├── Header.tsx
│   └── Layout.tsx
│
├── pages/
│   ├── home.tsx
│   └── countryDetails.tsx
│
├── services/
│   └── api.ts
│
├── hooks/
│   └── useCountryDetails.ts
│
├── types/
│   └── country.ts
│
├── App.tsx
├── main.tsx
└── index.css

## Funzioni Implementate
CountryCard: Visualizza i dettagli principali di un paese.
CountryList: Gestisce e visualizza la lista di paesi.
CountryDetails: Mostra i dettagli completi di un singolo paese.
Header: Barra con titolo.
Layout: Layout principale che contiene Header e contenuto.
useCountryDetails: Custom hook per la gestione del fetch e dello stato dei dettagli di un singolo paese.