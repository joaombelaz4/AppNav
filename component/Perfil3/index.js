import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';


 const Perfil3 = (props)=>{
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://pocket.pokemongohub.net/tcg-pocket/illustrations/a1/cPK_10_000530_00_ZENIGAME_C_L_ILL.webp' }}
          style={styles.coverPhoto}
        />
        <Image
          source={{ uri: 'https://preview.redd.it/oj0d97dt11461.jpg?width=640&crop=smart&auto=webp&s=078052c7a32828f3a4dbf61f9891622c7980da79' }}
          style={styles.profilePic}
        />
        <Text style={styles.name}>Squirtle<Ionicons name="checkmark-circle" size={16} color="#3b82f6" /></Text>
        <Text style={styles.followers}>seguidores 141,1 mi • seguindo 2</Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Tipos:</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Água💧</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Apresentação</Text>
        <Text style={styles.bio}>
        Squirtle é um Pokémon do tipo Água, registrado como o número #007 na Pokédex Nacional. Conhecido como o Pokémon Tartaruga Minúscula, Squirtle é facilmente reconhecido por sua casca resistente e sua habilidade de disparar jatos d'água com incrível precisão.

Com sua natureza brincalhona e destemida, Squirtle é companheiro de muitos treinadores iniciantes na região de Kanto, sendo uma das três opções oferecidas pelo Professor Carvalho. Sua casca, além de proteção, é aerodinâmica, permitindo que ele nade velozmente pelos rios e oceanos.

Squirtle evolui para Wartortle e, depois, para o imponente Blastoise, tornando-se uma verdadeira força da natureza em combate. Mesmo pequeno, Squirtle demonstra coragem, lealdade e uma energia contagiante que conquista todos à sua volta.

Símbolo de resiliência, força e espírito aventureiro, Squirtle é a escolha perfeita para treinadores que desejam um parceiro confiável, cheio de personalidade e pronto para qualquer desafio.
        </Text>
        <Text style={styles.info}>Página • Pokemon#007</Text>
      </View>
    </ScrollView>
  );
}

export default Perfil3;