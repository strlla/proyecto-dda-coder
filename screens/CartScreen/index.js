import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, Modal, Pressable } from "react-native";
import { connect, useSelector, useDispatch } from "react-redux";
import { confirmCart, removeItem } from "../../store/actions/cart.action";
import CartItem from "../../components/CartItem";
import { styles } from "./styles";
import { COLORS } from "../../assets/constants/colors";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const user = useSelector((state) => state.auth.userId);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDeleteItem = (id) => dispatch(removeItem(id));

  useEffect(() => {
    if (modalVisible) {
      setTimeout(() => {
        navigation.navigate("BooksStack");
      }, 1000);
    }
  }, [modalVisible]);

  const handleConfirmCart = (async) => {
    setModalVisible(false);
    dispatch(confirmCart(items, total, user, setModalVisible));
  };

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  if (items.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Your cart is empty!</Text>
        <Button
          title="Find books"
          color={COLORS.PURPLE}
          onPress={() => navigation.navigate("BooksStack")}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <Button
        title="Confirm"
        onPress={() => handleConfirmCart()}
        color={COLORS.PURPLE}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>Total:</Text>
        <Text style={styles.totalPrice}>${total}</Text>
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Your purchase was successful!
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Ok</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default connect()(Cart);
