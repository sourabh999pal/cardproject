import { StyleSheet, Text, View, Dimensions,  Image, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';

import Icon from 'react-native-vector-icons/AntDesign';

import { Divider } from 'react-native-paper';



var screenSize = Dimensions.get('window');
var screenWidth = screenSize.width;
var screenHeight = screenSize.height;

const CardComponent = ({ name, image, price, type, restaurentName, des, time }) => {
    const [count, setCount] = useState(0);

    
    const incrementCount = () => {
        setCount(count + 1);
      }
    
      const decrementCount = () => {
        setCount(count - 1);
      }
    console.log(count);
    return (
        <View style={styles.box}>
            <View style={styles.alignrow}>
                <View>
                    <Text style={styles.restName}>{restaurentName}</Text>
                    <Text style={styles.restName}>Expected in: {time}</Text>
                </View>

                <Icon name='arrowright' size={30} style={styles.icon} />
            </View>


            <Divider />
            <View style={styles.lowerbox}>
                <View>
                    <Text style={styles.restName}>{name} ({type})</Text>
                    <Text style={styles.price}>{'\u20B9'}{price}</Text>
                    <Text style={styles.desStyle}>{des}</Text>
                </View>
                <Image source={image} style={styles.image} />

            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={decrementCount}>
                <Icon name='minus' size={22} color={'black'} />
                </TouchableOpacity>
                
                <Text style={styles.buttontext}>ADD {count}</Text>
                <TouchableOpacity onPress={incrementCount}>
                    <Icon name='plus' size={22} color={'black'} />
                    
                   
                </TouchableOpacity>


            </View>

        </View>
    )
}

export default CardComponent

const styles = StyleSheet.create({
    box: {
        width: screenWidth / 1.08,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 15,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,


    },
    lowerbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    icon: {
        position: 'absolute',
        right: 10
    },
    restName: {
        fontSize: 16,
        left: 20,
        fontWeight: '600'
    },
    alignrow: {
        flexDirection: 'row',
        margin: 16
    },
    price: {
        fontSize: 14,
        left: 20,
        fontWeight: '500'
    },
    desStyle: {
        width: screenWidth / 2,
        marginLeft: 10,
        marginTop: 10
    },
    button: {
        position:'absolute',
        right:10,
        bottom:10,
        width: 120,
        backgroundColor: 'white',
        height: 40,
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'space-between',
        paddingTop: 7

    },
    buttontext: {
        color: 'green',
        fontWeight: '500',
        alignSelf: 'center',

    }
})