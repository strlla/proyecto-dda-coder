import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import PlaceItem from '../../components/PlaceItem';

const PlaceListScreen = ({navigation}) => {
    let places = useSelector(state => state.places);

    const renderItem = ({item}) => (
        <PlaceItem
            title={item.title}
            image={item.image}
            address={item.address}
            onSelect={() => navigation.navigate('Detalle', {
                placeID: item.id
            })}
        />

    )

    return (
        <FlatList
            data={places.places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PlaceListScreen