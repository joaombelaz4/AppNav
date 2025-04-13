

import React from 'react';
import { Image, FlatList, Dimensions } from 'react-native';
import styles from './style';


const imageUrls = [
  'https://s2-gshow.glbimg.com/bMDGEwVXO_qYTES6ioGL2FJ54Pg=/0x0:396x396/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/S/B/nfVbriTFSAG4BYfOepBw/pele-edson-arantes-do-nascimento.jpg',
  'https://i0.wp.com/teoriaedebate.org.br/wp-content/uploads/sites/2/2024/02/Pele.jpeg?fit=1000%2C1000&ssl=1',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  // Adicione mais URLs de imagens públicas do Pelé aqui
];

const Galeria=()=>{
  return (
    <FlatList
      data={imageUrls}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={styles.image} />
      )}
      contentContainerStyle={styles.container}
    />
  );
}

export default Galeria;