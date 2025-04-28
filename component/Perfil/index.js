import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';


 const Perfil = (props)=>{
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/80/21/39/80213968573e110cff7e0da1f1b65c9d.jpg' }}
          style={styles.coverPhoto}
        />
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfp3oFXy9Glol7BGtVYYPWtUrfLo5PU23vXw&s' }}
          style={styles.profilePic}
        />
        <Text style={styles.name}>ESCOLHA SEU INICIAL<Ionicons name="checkmark-circle" size={16} color="#3b82f6" /></Text>
        <Text style={styles.followers}>SELECIONE UM ABAIXO</Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.followButton} onPress = { () => props.navigation.navigate("Bulbassauro") }>
            <Text style={styles.buttonText}>Bulbassauro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followButton} onPress = { () => props.navigation.navigate("Charmander") }>
            <Text style={styles.buttonText}>Charmander</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton} onPress = { () => props.navigation.navigate("Squirtle") }>
            <Text style={styles.buttonText}>Squirtle</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Apresentação</Text>
        <Text style={styles.bio}>
        Professor Carvalho (Professor Oak, no original japonês) é um dos personagens mais icônicos do universo Pokémon. Ele é um renomado pesquisador Pokémon da cidade de Pallet (Vila Pallet), conhecido mundialmente por seus estudos pioneiros sobre a relação entre humanos e Pokémon.

Carvalho é o primeiro mentor de muitos jovens treinadores, sendo o responsável por entregar seus primeiros Pokémon e Pokédex – uma enciclopédia digital que registra os Pokémon encontrados. Entre seus alunos mais famosos estão Ash Ketchum e Gary Carvalho (seu neto).

Antes de se tornar um pesquisador, Carvalho também foi um treinador talentoso, conquistando respeito em batalhas Pokémon. Seu amor pela ciência e pelos Pokémon o levou a dedicar a vida à pesquisa, buscando catalogar todas as espécies e entender melhor seus comportamentos.

Carismático, sábio e às vezes um pouco distraído, o Professor Carvalho é uma figura paterna no mundo Pokémon, incentivando novas gerações a explorar, estudar e respeitar as criaturas que compartilham o mundo com os humanos.
        </Text>
        <Text style={styles.info}>Página • Professor</Text>
      </View>
    </ScrollView>
  );
}

export default Perfil;