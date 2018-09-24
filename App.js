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

    {/*pengulangan untuk push tombol angka*/}
    let rows=[]
    let nums=[[7,8,9],[4,5,6],[1,2,3],[0,'.','=']]
    for(let i = 0;i<4;i++){
      let row=[]
      for(let j=0;j<3;j++){
        row.push(<TouchableOpacity style={styles.tombol}>
            <Text style={styles.iniTombol}>{nums[i][j]}</Text>
          </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }
    let ops=[]
    let operation=['del','-','*','/']
    for(let k=0;k<4;k++){
      ops.push(<TouchableOpacity style={styles.tombol}>
          <Text style={styles.iniTombol}>{operation[k]}</Text>
        </TouchableOpacity>)


    }

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
                {rows}
                </View>

              {/*ini tombol operasi*/}
              <View style={styles.operation}>

            {/*ini operasi baris pertama*/}
                <View style={styles.kolom}>
                {ops}
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
  kolom:{
    flexDirection: 'column',
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
