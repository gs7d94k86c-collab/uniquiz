# UniQuiz v5 · progetto per Antigravity

Questa cartella contiene la stessa app del file HTML monolitico, separata in file più piccoli. Non richiede librerie esterne e continua a funzionare offline.

## Aprirla in Antigravity

1. Estrai lo ZIP.
2. In Antigravity scegli **Open Folder** e seleziona la cartella `UniQuiz_v5_Antigravity`.
3. Chiedi all'agente di avviare un server locale e aprire `index.html` nell'anteprima.

Prompt iniziale consigliato:

> Analizza README.md e la struttura del progetto. Avvia l'app in anteprima locale, verifica che la home mostri tutte e tre le materie e conserva compatibilità offline e dati localStorage durante ogni modifica.

## Struttura

- `index.html`: struttura minima della pagina e ordine di caricamento.
- `assets/styles.css`: grafica completa.
- `js/app.js`: logica di sessioni, ripetizione dilazionata, statistiche e backup.
- `data/catalog.js`: nomi delle materie e contenitori dei dati.
- `data/modules.js`: moduli tematici e intervalli di lezioni.
- `data/<materia>/closed.js`: domande chiuse della materia.
- `data/<materia>/open.js`: domande aperte della materia.
- `manifest.webmanifest` e `sw.js`: installazione e funzionamento offline quando l'app è pubblicata via HTTP/HTTPS.

## Regole importanti per le modifiche

- Non cambiare le chiavi localStorage `uniquiz-v3-progress`, `uniquiz-v3-settings` e `uniquiz-v3-session`: servono a conservare i progressi esistenti.
- Non convertire i file dati in JSON caricato con `fetch` se vuoi mantenere l'apertura diretta da disco.
- Conservare invariati `id`, `lesson`, `accepted_indices` e `primary_index` quando si modifica soltanto il testo di una domanda.
- Se si aggiunge un nuovo file necessario all'app, aggiungerlo anche a `APP_FILES` in `sw.js`.

## Pubblicazione

La cartella può essere pubblicata così com'è su Cloudflare Pages, Netlify o un altro hosting statico. Il file di ingresso è `index.html` e non è richiesto alcun comando di build.
