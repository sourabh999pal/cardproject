import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import CardComponent from './CardComponent';
import { Searchbar } from 'react-native-paper';



const HomeScreen = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const [selectedValue, setSelectedValue] = useState('option1');

    const onChangeSearch = (query) => {
        setSearchQuery(query);
        if (query) {
            const result = datastate.filter((e) => {
                return e.name.match(query.toLowerCase());
            });
            setDatastate(result);
        } else {
            setDatastate(data);
        }

    }
    const filter = (e) => {
        
        if (e != 'Null') {
            const result = data.filter((item) => {
                return item.type === e.toLowerCase();
              
            });
         setDatastate(result);
            
        }else{
            setDatastate(data);
        }
    }


    let data = [
        {
            id: 1,
            name: "biryani",
            restaurentName: 'jamnadaas',
            price: 400,
            image: require('../assest/biryani.jpg'),
            type: 'non-vegeterian',
            deliveryTime: '3min',
            description: 'A delightful mix of paneer & biryani rice in hyderabadi spices and served with raita'
        },
        {
            id: 2,
            name: "biryani",
            image: require('../assest/biryani2.jpg'),
            restaurentName: 'dehelees',
            price: 300,
            type: 'non-vegeterian',
            deliveryTime: '13min',
            description: 'A delightful mix of paneer & biryani rice in hyderabadi spices and served with raita'
        },
        {
            id: 3,
            name: "chiken",
            image: require('../assest/chiken.jpg'),
            restaurentName: 'rajdhani',
            price: 360,
            type: 'non-vegeterian',
            deliveryTime: '5min',
            description: 'A delightful mix of paneer & biryani rice in hyderabadi spices and served with raita'
        },
        {
            id: 4,
            name: "fishcurry",
            image: require('../assest/fishcurry.jpg'),
            restaurentName: 'jamesfood',
            price: 250,
            type: 'non-vegeterian',
            deliveryTime: '3min',
            description: 'A delightful mix of paneer & biryani rice in hyderabadi spices and served with raita'
        },
        {
            id: 5,
            name: "fruits",
            image: require('../assest/fruits.jpg'),
            restaurentName: 'Habibires',
            price: 150,
            type: 'vegeterian',
            deliveryTime: '2min',
            description: 'A delightful mix of paneer & biryani rice in hyderabadi spices and served with raita'
        },
        {
            id: 6,
            name: "salad",
            image: require('../assest/salad.jpg'),
            restaurentName: 'hotelspice',
            price: 90,
            type: 'vegeterian',
            deliveryTime: '15min',
            description: 'A delightful mix of paneer & biryani rice in hyderabadi spices and served with raita'
        },

    ];

    const [datastate, setDatastate] = useState(data);

    const result = datastate.filter((e) => {
        return e.name.match('fruits');
    });






    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            {/* <View style={styles.flex}>
                <View>
                    <Text>vegeterian</Text>
                </View>
                <View>
                    <Text>non-vegeterian</Text>
                </View>
            </View> */}
            <View style={{ width: 150, backgroundColor: '#DDD', borderRadius: 15, margin: 5, marginTop: 10 }}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedValue(itemValue);
                        filter(itemValue);
                    }}
                >
                    <Picker.Item label="Sort By" value="Null" />
                    <Picker.Item label="Vegeterian" value="vegeterian" />
                    <Picker.Item label="Non-Vegeterian" value="non-vegeterian" />
                </Picker>
            </View>

            <ScrollView>
                {datastate.map((item) => {
                    return (


                        <View key={item.id} style={styles.cardComponent} >
                            <CardComponent name={item.name} image={item.image} price={item.price} type={item.type} restaurentName={item.restaurentName} des={item.description} time={item.deliveryTime} />
                        </View>


                    )
                })}

            </ScrollView>


        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    cardComponent: {
        marginTop: 15
    },
    flex: {
        flexDirection: 'row',
        gap: 10,
        margin: 20,
    }
})