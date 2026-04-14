# Guida alla Creazione di un'App in React Native per iOS e Android

## Fase 1: Configurazione dell'Ambiente di Sviluppo

Per iniziare lo sviluppo di un'applicazione React Native, è necessario configurare preliminarmente i seguenti strumenti:

### 1. Registrazione Account Expo (Gratuito)
1. Visitare il sito [expo.dev](https://expo.dev) dal proprio computer.
2. Cliccare su **Sign Up** in alto a destra per creare un nuovo account fornendo un indirizzo email valido.
3. Conservare le credenziali di accesso create.

### 2. Installazione di "Expo Go" sul Dispositivo Mobile
1. Dal proprio smartphone, accedere allo store di riferimento: **App Store** (per dispositivi iOS) o **Play Store** (per dispositivi Android).
2. Cercare e installare l'applicazione gratuita **"Expo Go"**. Questa applicazione funge da client per visualizzare in tempo reale l'app in fase di sviluppo direttamente sul dispositivo fisico.

### 3. Installazione di Node.js sul Computer
Node.js è il runtime environment necessario per eseguire gli script di sviluppo e gestire i pacchetti.
1. Visitare il sito ufficiale [nodejs.org](https://nodejs.org/).
2. Scaricare e installare la versione raccomandata (indicata come LTS - Long Term Support). Seguire la procedura guidata lasciando le impostazioni predefinite.

---

## Fase 2: Inizializzazione del Progetto

Una volta configurati gli strumenti base, è possibile inizializzare il progetto vero e proprio.

1. Dal computer, aprire il **Terminale** (su macOS cercare "Terminale" tramite Spotlight, su Windows utilizzare "Prompt dei comandi" o "PowerShell").
2. Eseguire il seguente comando e premere `Invio` per creare la struttura base dell'applicazione:
   ```bash
   npx create-expo-app MiaPrimaApp
   ```
   *Nota: L'operazione richiederà alcuni minuti per il download delle dipendenze necessarie.*
3. Al termine dell'installazione, spostarsi all'interno della cartella appena creata con il comando:
   ```bash
   cd MiaPrimaApp
   ```

---

## Fase 3: Avvio dell'Applicazione in Locale

Per visualizzare l'applicazione sul dispositivo mobile, è necessario avviare il server di sviluppo. Assicurarsi che computer e smartphone siano connessi alla **stessa rete Wi-Fi**.

1. Nel terminale (assicurandosi di essere all'interno della cartella `MiaPrimaApp`), eseguire il comando:
   ```bash
   npx expo start
   ```
2. Verrà generato e mostrato a schermo un **QR Code**. 
3. **Dal dispositivo mobile:**
   - **Dispositivi iOS:** Aprire l'applicazione Fotocamera predefinita, inquadrare il QR Code e selezionare la notifica "Apri in Expo Go".
   - **Dispositivi Android:** Aprire l'applicazione Expo Go, selezionare l'opzione "Scan QR Code" e inquadrare lo schermo del computer.

L'applicazione verrà caricata e visualizzata sul display dello smartphone. Verrà mostrata una schermata di test iniziale con le istruzioni per iniziare a modificare il file principale.

---

## Fase 4: Sviluppo dell'Applicazione

In questa fase, modificheremo il codice sorgente per creare una semplice applicazione che include un contatore interattivo.

1. Aprire l'editor di codice (si raccomanda **Visual Studio Code**).
2. Aprire la cartella del progetto `MiaPrimaApp`.
3. Individuare e aprire il file **`App.js`**, che rappresenta il punto di ingresso dell'applicazione. Cancellare il contenuto preesistente.
4. Sostituire il contenuto con il seguente codice:

```javascript
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  // Inizializzazione della variabile di stato per il contatore
  const [contatore, setContatore] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titolo}>Benvenuti alla mia prima App!</Text>
      
      <Text style={styles.testo}>Hai premuto il pulsante {contatore} volte</Text>
      
      <Button 
        title="Premi qui!" 
        onPress={() => setContatore(contatore + 1)} 
      />
    </View>
  );
}

// Definizione degli stili per l'interfaccia utente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa', // Colore di sfondo azzurro chiaro
    alignItems: 'center',
    justifyContent: 'center',
  },
  titolo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#006064',
  },
  testo: {
    fontSize: 18,
    marginBottom: 20,
  }
});
```

Dopo aver salvato il file (`Ctrl+S` su Windows, `Cmd+S` su Mac), l'interfaccia sull'applicazione Expo Go si aggiornerà automaticamente. Interagendo con il pulsante, il contatore si incrementerà.

---

## Analisi del Codice: Struttura dell'Applicazione

Esaminiamo nel dettaglio i blocchi logici del codice appena inserito:

1. **Importazioni delle Dipendenze**
   ```javascript
   import { useState } from 'react';
   import { StyleSheet, Text, View, Button } from 'react-native';
   ```
   Tramite le istruzioni di importazione, includiamo i moduli necessari. `useState` è un hook di React per gestire lo stato locale, mentre i componenti da `react-native` (`Text`, `View`, `Button`) rappresentano gli elementi visivi dell'interfaccia.

2. **Gestione dello Stato (State)**
   ```javascript
   const [contatore, setContatore] = useState(0);
   ```
   La funzione `useState` inizializza una variabile di stato a `0`. 
   - `contatore` è la variabile che memorizza il valore attuale.
   - `setContatore` è la funzione utilizzata per aggiornare tale valore. Ogni volta che viene richiamata, React si occupa di ricaricare l'interfaccia (re-rendering).

3. **Interfaccia Utente (View e Componenti)**
   Il blocco `return()` definisce l'albero dei componenti da renderizzare a schermo:
   - `<View>`: Funge da contenitore strutturale (simile a un `<div>` in HTML).
   - `<Text>`: Utilizzato per il rendering delle stringhe di testo.
   - `<Button>`: Componente interattivo. L'attributo `onPress` definisce un'azione (callback) invocata al tocco, in questo caso l'incremento del valore di `contatore` di un'unità.

4. **Stili (StyleSheet)**
   L'oggetto `styles` creato con `StyleSheet.create` contiene le regole estetiche per l'applicazione, con una sintassi e una logica derivate dal CSS web, ma adattate per React Native. Permette di gestire layout (tramite Flexbox), margini, colori e dimensioni dei font.

---

## Esercitazioni Proposte
Per consolidare quanto appreso, si suggerisce di apportare in autonomia le seguenti modifiche all'applicazione:
- Sostituire la stringa testuale "Benvenuti alla mia prima App!" con un messaggio personalizzato.
- Modificare il colore di sfondo della `<View>` principale sostituendo il codice esadecimale `#e0f7fa` con un altro colore a scelta.
- Implementare un ulteriore `<Button>` denominato "Azzera", configurando l'evento `onPress` in modo da riportare il valore della variabile di stato `contatore` a `0`.

---

## Fase 5: Generazione dell'APK per Android (EAS Build)

Per testare l'applicazione in modo indipendente, è possibile generare un pacchetto di installazione standalone in formato `.apk` (installabile sui dispositivi Android senza passare dal Play Store). Per fare questo, si utilizzano i servizi cloud forniti da Expo (EAS - Expo Application Services).

### 1. Installazione e Login in EAS CLI
1. Dal terminale del computer, installare lo strumento a riga di comando EAS a livello globale:
   ```bash
   npm install -g eas-cli
   ```
2. Effettuare l'accesso utilizzando le credenziali dell'account Expo (create nella Fase 1):
   ```bash
   eas login
   ```

### 2. Configurazione del Progetto per la Build
1. Assicurandosi di essere all'interno della cartella del progetto (`MiaPrimaApp`), inizializzare il servizio di build:
   ```bash
   eas build:configure
   ```
   *Durante la procedura, se richiesto, confermare le piattaforme per le quali si desidera abilitare la build (es. Android e iOS).*

### 3. Configurazione del file `eas.json` per esportare l'APK
Il comando precedente genera nella radice del progetto un file di configurazione denominato `eas.json`. Di default, EAS è impostato per compilare file `.aab` (Android App Bundle), il formato richiesto per la pubblicazione su Google Play.
Per generare un file `.apk` direttamente installabile, è necessario modificare il profilo `preview`.

Aprire il file `eas.json` e aggiungere la proprietà `"buildType": "apk"` sotto il nodo `android` del profilo `preview`, in modo che risulti simile a questo:

```json
{
  "cli": {
    "version": ">= 12.5.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

### 4. Avvio del Processo di Build
1. Dal terminale, avviare il processo di compilazione sui server cloud di Expo specificando il profilo configurato:
   ```bash
   eas build -p android --profile preview
   ```
2. EAS richiederà di confermare le chiavi di firma del pacchetto (keystore); se è la prima volta, accettare le impostazioni predefinite premendo `Invio`.
3. Il terminale restituirà un link alla dashboard di Expo (Expo Dev Dashboard), dove sarà possibile monitorare l'avanzamento dell'operazione.
4. Al termine del processo, della durata di qualche minuto, EAS fornirà un URL e un **QR Code** per il download. Inquadrando il QR Code con il dispositivo Android sarà possibile scaricare i file e installare l'APK dell'app appena creata.

---

## Appendice: Componenti Fondamentali di React Native

Di seguito viene presentata una panoramica dei principali componenti offerti da React Native per la costruzione di interfacce utente.

### `<View>`
Il componente strutturale di base, paragonabile al tag `<div>` in ambito web. Viene utilizzato per raggruppare altri componenti, definire layout tramite Flexbox o applicare stili (ad esempio colore di sfondo o bordi).
```javascript
<View style={{ flex: 1, backgroundColor: 'white' }}>
  {/* Altri componenti */}
</View>
```

### `<Text>`
L'unico componente preposto alla visualizzazione di stringhe testuali. Qualsiasi testo visibile nell'applicazione deve essere necessariamente racchiuso all'interno di un tag `<Text>`.
```javascript
<Text style={{ fontSize: 16, color: 'black' }}>Testo di esempio</Text>
```

### `<Image>`
Utilizzato per il rendering di immagini. Può caricare risorse sia locali (tramite la sintassi `require()`) sia remote (tramite la proprietà `uri`).
```javascript
// Immagine remota
<Image 
  source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
  style={{ width: 50, height: 50 }} 
/>
```

### `<TextInput>`
Componente interattivo che permette all'utente di inserire testo tramite la tastiera del dispositivo. Spesso associato a una variabile di stato per memorizzare e gestire il valore digitato in tempo reale.
```javascript
<TextInput 
  placeholder="Inserisci il tuo nome"
  onChangeText={testo => setNome(testo)}
  style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
/>
```

### `<ScrollView>`
Un contenitore generico scorrevole. Quando il contenuto supera le dimensioni fisiche dello schermo, il `<ScrollView>` abilita lo scrolling (orizzontale o verticale). È da utilizzare per viste con un numero di elementi limitato e note a priori, in quanto il motore renderizza tutti i figli in memoria contemporaneamente.
```javascript
<ScrollView>
  <Text>Contenuto molto lungo...</Text>
</ScrollView>
```

### `<FlatList>`
Componente altamente ottimizzato per la renderizzazione di liste contenenti grandi quantità di dati dinamicamente. A differenza del `<ScrollView>`, il `<FlatList>` renderizza esclusivamente gli elementi attualmente visibili a schermo, garantendo prestazioni elevate e risparmiando un notevole quantitativo di memoria.
```javascript
<FlatList
  data={[{ id: '1', nome: 'Pippo' }, { id: '2', nome: 'Pluto' }]}
  keyExtractor={item => item.id}
  renderItem={({ item }) => <Text>{item.nome}</Text>}
/>
```

### `<TouchableOpacity>` / `<Pressable>`
Componenti che forniscono aree interattive customizzabili. Il `<TouchableOpacity>` restituisce un feedback visivo immediato (diminuzione dell'opacità temporanea) quando viene toccato. È lo standard per la creazione di bottoni o elementi interattivi avanzati, permettendo di superare le limitazioni stilistiche prefissate del componente standard `<Button>`.
```javascript
<TouchableOpacity 
  onPress={() => console.log('Premuto!')} 
  style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
  <Text style={{ color: 'white' }}>Pulsante Personalizzato</Text>
</TouchableOpacity>
```