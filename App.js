import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';


export default class App extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){



    return(
      <View style={styles.container}>
        <View style={styles.result}>
        <Text style={styles.calculate}>11 X 11</Text>
        </View>
        <View style={styles.calculation}>
        <Text style={styles.calculate}>121</Text>
        </View>

        <View style={styles.button}>

            {/*ini tombol angka*/}
              <View style={styles.numbers}>
                {/*ini number baris pertama*/}
                <View style={styles.row}>
                  <TouchableOpacity style={styles.tombol}>
                    <Text style={styles.iniTombol}>7</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tombol}>
                    <Text style={styles.iniTombol}>8</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tombol}>
                    <Text style={styles.iniTombol}>9</Text>
                  </TouchableOpacity>
                </View>

                {/*ini number baris kedua*/}
                <View style={styles.row}>
                  <TouchableOpacity style={styles.tombol}>
                    <Text style={styles.iniTombol}>4</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tombol}>
                    <Text style={styles.iniTombol}>5</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tombol}>
                    <Text style={styles.iniTombol}>6</Text>
                  </TouchableOpacity>
                </View>

                {/*ini number baris ketiga*/}
                <View style={styles.row}>
                  <TouchableOpacity style={styles.tombol}>
                    <Text style={styles.iniTombol}>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tombol}>
                    <Text style={styles.iniTombol}>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tombol}>
                    <Text style={styles.iniTombol}>3</Text>
                  </TouchableOpacity>
                </View>

                {/*ini number baris keempat*/}
                <View style={styles.row}>
                  <TouchableOpacity style={styles.tombol}>
                    <Text style={styles.iniTombol}>.</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tombol}>
                    <Text style={styles.iniTombol}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tombol}>
                    <Text style={styles.iniTombol}>=</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/*ini tombol operasi*/}
              <View style={styles.operation}>

            {/*ini operasi baris pertama*/}
                <View style={styles.row}>
                <TouchableOpacity style={styles.tombolOperasi}>
                  <Text style={styles.iniTombol}>del</Text>
                </TouchableOpacity>
                </View>

            {/*ini operasi baris kedua*/}
                <View style={styles.row}>
                <TouchableOpacity style={styles.tombolOperasi}>
                  <Text style={styles.iniTombol}>:</Text>
                </TouchableOpacity>
                </View>

            {/*ini operasi baris ketiga*/}
                <View style={styles.row}>
                <TouchableOpacity style={styles.tombolOperasi}>
                  <Text style={styles.iniTombol}>X</Text>
                </TouchableOpacity>
                </View>

            {/*ini operasi baris keempat*/}
                <View style={styles.row}>
                <TouchableOpacity style={styles.tombolOperasi}>
                  <Text style={styles.iniTombol}>-</Text>
                </TouchableOpacity>
                </View>

            {/*ini operasi baris kelima*/}
                <View style={styles.row}>
                <TouchableOpacity style={styles.tombolOperasi}>
                  <Text style={styles.iniTombol}>+</Text>
                </TouchableOpacity>
                </View>

{/*end view operasi*/}
              </View>

{/*end view button */}
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  row:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  result:{
    flex: 2,
    backgroundColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

  calculate:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },

  calculation:{
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

  button:{
    flex: 7,
    flexDirection: 'row',
  },

  numbers:{
    flex: 3,
    backgroundColor: 'yellow',
  },

  operation:{
    flex: 1,
    backgroundColor: 'black'
  },

  tombol:{
    backgroundColor: 'blue',
    width: 100,
    height: 100

  },

  iniTombol:{
    fontSize: 20,
    textAlign: 'center',
    alignContent: 'center',
    marginVertical: 35,
    color: 'yellow',
  },

  tombolOperasi:{
    backgroundColor: 'grey',
    width: 96,
    height: 80,

  },



})
