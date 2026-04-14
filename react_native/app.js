import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  // Questa è la "memoria" della nostra app
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

// Qui definiamo il design e i colori (simile al CSS)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa', // Un bel colore azzurro chiaro
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