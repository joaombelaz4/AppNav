import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';


 const Perfil1 = (props)=>{
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.redd.it/9mbkznasus491.png' }}
          style={styles.coverPhoto}
        />
        <Image
          source={{ uri: 'https://pm1.aminoapps.com/6822/84e9b8f2e66e6529124f8b6f45a306be0f59b9cav2_00.jpg' }}
          style={styles.profilePic}
        />
        <Text style={styles.name}>Bulbassauro <Ionicons name="checkmark-circle" size={16} color="#3b82f6" /></Text>
        <Text style={styles.followers}>seguidores 93,1 mi • seguindo 2</Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Tipos:</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Grama🍃</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.buttonText}>Veneno🧪</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Apresentação</Text>
        <Text style={styles.bio}>
        Bulbassauro (Bulbasaur no original) é um Pokémon do tipo Planta e Venenoso, listado como o número #001 na Pokédex Nacional. Conhecido como o Pokémon Semente, Bulbassauro carrega uma semente nas costas desde o nascimento. Essa semente cresce gradualmente até florescer em sua forma evoluída.

Bulbassauro é gentil, resistente e muito leal aos seus treinadores. Ele é uma das três opções de Pokémon iniciais disponíveis para novos treinadores na região de Kanto, ao lado de Charmander e Squirtle. Sua habilidade de utilizar movimentos tanto de Planta quanto de Veneno dá a ele uma vantagem estratégica nas batalhas.

Com treinamento e carinho, Bulbassauro evolui para Ivysaur e depois para o majestoso Venusaur, tornando-se cada vez mais poderoso. Além da força física, Bulbassauro é conhecido por sua determinação e seu espírito protetor, frequentemente cuidando de outros Pokémon e amigos.

Símbolo de crescimento, amizade e confiança, Bulbassauro é uma escolha clássica para treinadores que buscam um parceiro forte e cheio de coração para a jornada Pokémon.
        </Text>
        <Text style={styles.info}>Página • Pokemon#001</Text>
      </View>
    </ScrollView>
  );
}

export default Perfil1;