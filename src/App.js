// import logo from './logo.svg';
// import './App.css';

import { Text, View, StyleSheet, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import Formulario from "./src/components/FormularioLogin";

import Dropdown from "react-bootstrap/Dropdown";
import { HeaderWrapper } from "./styles/Header";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(modalVisible);

  // function Header() {
  //   const [open, setOpen] = useState(false);
  
  //   const handleClick = () => {
  //     setOpen(!open);
  //   };
  
  //   return (
  //     <HeaderWrapper>
  //       <h2>Logo</h2>
  //       <Navbar open={open} />
  //       <MenuButton open={open} handleClick={handleClick} />
  //     </HeaderWrapper>
  //   );
    return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Registrarse <Text style={styles.tituloid}>Nuevo usuario</Text>
      </Text>
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.btnNuevoUsuario}
      >
        <Text style={styles.btnTextNuevoUsuario}>Nuevo Usuario</Text>
      </Pressable>
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: 600,
    color: "#374151",
    textAlign: "center",
  },
  tituloid: {
    fontWeight: 900,
    color: "#6D28D9",
  },
  btnNuevoUsuario: {
    backgroundColor: "#6D28D9",
    padding: 15,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  btnTextNuevoUsuario: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: 900,
    textTransform: "uppercase",
  },
});