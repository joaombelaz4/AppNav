import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';


 const Perfil2 = (props)=>{
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2023/11/15/Pokemon-TCG-Charmander-1024x576.jpg?width=1200&quality=75&format=auto' }}
          style={styles.coverPhoto}
        />
        <Image
          source={{ uri: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-switch/f/f2/Charmander.jpg?width=640' }}
          style={styles.profilePic}
        />
        <Text style={styles.name}>Charmander <Ionicons name="checkmark-circle" size={16} color="#3b82f6" /></Text>
        <Text style={styles.followers}>seguidores 220,3 mi • seguindo 2</Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Tipos:</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Fogo🔥</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Apresentação</Text>
        <Text style={styles.bio}>
        Charmander é um Pokémon do tipo Fogo, conhecido como o Pokémon Lagarto. É identificado pelo número #004 na Pokédex Nacional. Charmander é famoso por sua cauda flamejante — uma chama que reflete sua saúde e emoções: uma chama forte indica força e felicidade, enquanto uma chama fraca pode ser sinal de cansaço ou tristeza.

Desde muito jovem, Charmander é leal, corajoso e cheio de energia, mas também pode ser um pouco teimoso. Ele é um dos três Pokémon iniciais disponíveis para novos treinadores na região de Kanto, junto com Bulbasaur e Squirtle.

Charmander evolui para Charmeleon e depois para o poderoso Charizard, tornando-se cada vez mais forte e impressionante à medida que cresce. Seu potencial de evolução e seu espírito de luta fazem dele uma escolha muito popular entre treinadores iniciantes e veteranos.

Com seu charme natural, seu coração valente e sua ligação simbólica com o fogo, Charmander é um verdadeiro ícone do mundo Pokémon, conquistando fãs e treinadores desde os primeiros passos da jornada.
        </Text>
        <Text style={styles.info}>Página • Pokemon#004</Text>
      </View>
    </ScrollView>
  );
}

export default Perfil2;