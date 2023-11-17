import React, {useState} from "react";
import {Modal, Text, Button, StyleSheet, View, TextInput, ScrollView, Pressable } from "react-native";
import image from "./assets/avatar.png";

    const Formulario = (modalVisible, setModalVisible) => {
        const [nombre, setNombre] = useState("");
        const [apellido, setApellido] = useState("");
        const [documento, setDocumento] = useState("");
        const [email, setEmail] = useState("");
        const [telefono, setTelefono] = useState("");

        const [documentoError, setDocumentoError] = useState("");
        const [nombreError, setNombreError] = useState("");
        const [apellidoError, setApellidoError] = useState("");
        const [emailError, setEmailError] = useState("");
        const [telefonoError, setTelefonoError] = useState("");
        
      
        const validarFormulario = () => {
          let formValido = true;
      
          if (documento.trim() === "") {
            setDocumentoError("Campo obligatorio");
            formValido = false;
          } else {
            setDocumentoError("");
          }
      
          if (nombre.trim() === "") {
            setNombreError("Campo obligatorio");
            formValido = false;
          } else {
            setNombreError("");
          }
      
          if (apellido.trim() === "") {
            setApellidoError("Campo obligatorio");
            formValido = false;
          } else {
            setApellidoError("");
          }
      
          if (email.trim() === "") {
            setEmailError("Campo obligatorio");
            formValido = false;
          } else if (!validarEmail(email)) {
            setEmailError("Ingrese un correo electrónico válido");
            formValido = false;
          } else {
            setEmailError("");
          }
      
          if (telefono.trim() === "") {
            setTelefonoError("Campo obligatorio");
            formValido = false;
          } else if (!validarTelefono(telefono)) {
            setTelefonoError("Ingrese un número de teléfono válido");
            formValido = false;
          } else {
            setTelefonoError("");
          }
      
          return formValido;
        };

      <Image
        src={image} 
       style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
      />  
        return (
        <Modal animationType="slide" visible={modalVisible}>
            <View style={styles.contenido}>
            <ScrollView>
                <Text style={styles.titulo}>
                Iniciar Sesión {""}
                <Text style={styles.tituloBold}>Digite los datos requeridos</Text>
                </Text>
    
                <Pressable
                style={styles.btnCancelar}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                </Pressable>
                <div className="App">
                  <Dropdown onSelect={this.change}>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Dropdown Menu
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item value="1">Cedula de Ciudadania</Dropdown.Item>
                  <Dropdown.Item value="2">Cedula de Extrangeria</Dropdown.Item>
                  <Dropdown.Item value="3">Tarjeta Identidad</Dropdown.Item>
                  <Dropdown.Item value="4">Pasaporte</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
            <View style={styles.campo}>
                    <Text style={styles.label}>
                    Email propietario
                    <TextInput
                        style={styles.input}
                        placeholder="Digite su numero de documento"
                        placeholderTextColor={"#666"}
                        keyboardType="number-document"
                        value={documento}
                        onChangeText={setDocumento}
                    />
                    </Text>
                    </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>
                        Nombre
                        <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        placeholderTextColor={"#666"}
                        value={nombre}
                        onChangeText={setNombre}
                        />
                    </Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>
                    Apellido
                    <TextInput
                        style={styles.input}
                        placeholder="Apellido"
                        placeholderTextColor={"#666"}
                        value={apellido}
                        onChangeText={setApellido}
                    />
                    </Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>
                    Correo electronico
                    <TextInput
                        style={styles.input}
                        placeholder="micorreo@micorreo.com"
                        placeholderTextColor={"#666"}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    </Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>
                    Telefono propietario
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese su numero de telefono"
                        placeholderTextColor={"#666"}
                        keyboardType="number-pad"
                        value={telefono}
                        onChangeText={setTelefono}
                    />
                </Text>
                </View>
                <Pressable style={styles.btnNuevausuario}>
                {/* //<Text style={styles.btnTextNuevoUsuario}>Continuar</Text> */}
                </Pressable>
            </ScrollView>
            </View>
        </Modal>
        );
    };
    
    const styles = StyleSheet.create({
        contenido: {
            backgroundColor: "#6D28D9",
            flex: 1,
        },
        titulo: {
            fontSize: 30,
            fontWeight: "600",
            textAlign: "center",
            marginTop: 30,
            color: "#fff",
        },
        tituloBold: {
            fontWeight: "900",
        },
        campo: {
            marginTop: 10,
            marginHorizontal: 30,
        },
        label: {
            color: "#FFF",
            marginBottom: 10,
            marginTop: 15,
            fontSize: 20,
            fontWeight: "600",
        },
        input: {
            backgroundColor: "#FFF",
            padding: 15,
            borderRadius: 10,
        },
        btnCancelar: {
            marginVertical: 30,
            backgroundColor: "#5827A4",
            marginHorizontal: 30,
            padding: 15,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#FFF",
        },
        btnNuevousuario: {
            marginVertical: 50,
            backgroundColor: '#F59E0B',
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 10,
        },
        btnTextNuevoUsuario: {
            textAlign: 'center',
            color: '#5827A4',
            textTransform: 'uppercase',
            fontWeight: '900',
            fontSize: 16,
        },
    });

export default Formulario;