import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../assets/constants/colors";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.description}>
        <View>
          <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
        </View>
        <View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <View>
          <Button
            title="X"
            onPress={() => onDelete(item.id)}
            color={COLORS.PURPLE}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItem;
