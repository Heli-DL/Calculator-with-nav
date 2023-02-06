import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Calculator( { navigation }) {
  const [result, setResult] = useState('');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [data, setData] = useState([]);

  const initialFocus = useRef(null);

  const calculate = operator => {
    const [num1, num2] = [Number(number1), Number(number2)];

    if (isNaN(num1) || isNaN(num2)) {
      setResult(0);
    } else {
      let result = 0;
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-': 
          result = num1 - num2;
          break;
      }
      setResult(result);

      const text = `${num1} ${operator} ${num2} = ${result}`;
      setData([text, ...data]);
    }
    setNumber1('');
    setNumber2('');
    initialFocus.current.focus();
  }
  
  return (  
    <View style={styles.container}>
      <View style={styles.inputbox}>
        <Text>Result: {result}</Text>
        <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}} 
          onChangeText={text => setNumber1(text)}  
          value={number1} 
          keyboardType={'numeric'} 
          ref={initialFocus}
          />
        <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}}
          onChangeText={text => setNumber2(text)} 
          value={number2} 
          keyboardType={'numeric'}
          />
      </View>
      <View style={styles.buttons}> 
        <View style={styles.button}>
          <Button onPress={() => calculate('+')} title="+" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => calculate('-')} title="-" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => navigation.navigate('History', {data})} 
          title="History" />
        </View>
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
  buttons: {
    flexDirection: 'row',
    margin: 10,
  },
  button: {
    margin: 10
  },
  inputbox: {
    justifyContent: 'flex-end',
  }
});
