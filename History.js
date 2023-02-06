import React from 'react';
import { View, Text, StyleSheet, FlatList } from'react-native';

export default function History({ route, navigation }) {
  const { data } = route.params;

  return (    
    <View style={styles.container}>      
      <View style={styles.listbox}>  
        <FlatList ListHeaderComponent={() => <Text>History</Text>}
          data={data}
          renderItem={({item}) =><Text>{item}</Text>}  
          keyExtractor={(item, index) => index.toString()}
        />
      </View>   
    </View>  
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listbox: {
    flex: 3,
    marginTop: 10,
    justifyContent: 'flex-start',
  }
});


