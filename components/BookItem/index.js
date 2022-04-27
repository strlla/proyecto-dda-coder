import React from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const BookItem = ({item, onSelected}) => {
    return(
    <TouchableOpacity onPress={() => onSelected(item)}>
        <View style={styles.bookItem}>
            <View>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View>
                <Text style={styles.details}>{item.price}</Text>
                <Text style={styles.details}>{item.weight}</Text>
            </View>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   bookItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#dddd'
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenSansBold'        
    },
    details: {
        fontSize: 18
    }
});

export default BookItem;