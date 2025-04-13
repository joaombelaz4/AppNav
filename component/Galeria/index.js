

import React from 'react';
import { Image, FlatList, Dimensions } from 'react-native';
import styles from './style';


const imageUrls = [
  'https://s2-gshow.glbimg.com/bMDGEwVXO_qYTES6ioGL2FJ54Pg=/0x0:396x396/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/S/B/nfVbriTFSAG4BYfOepBw/pele-edson-arantes-do-nascimento.jpg',
  'https://i0.wp.com/teoriaedebate.org.br/wp-content/uploads/sites/2/2024/02/Pele.jpeg?fit=1000%2C1000&ssl=1',
  'https://imagens.ebc.com.br/cjgdtmXf7KAwCB1ZfHoVbEriBL0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/34812254320_598bab7ff3_o.jpg?itok=94xYcxYL',
  'https://cdn.folhape.com.br/upload/dn_arquivo/2023/07/whatsapp-image-2023-07-04-at-105519.jpeg',
  'https://cdn.folhape.com.br/upload/dn_arquivo/2022/12/image2.jpeg',
  'https://i.em.com.br/89XH5jeDcghz3ujEFZSeoszYsOM=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2020/10/23/1197335/20201023033547802230i.jpg',
  'https://s2-oglobo.glbimg.com/7xb0AmkmD1fU5nA62fZUy-dxElI=/0x0:4992x3202/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/U/i/wWsUdZSoG6ydOKSUsDzg/pele-eliminatorias70.jpg',
  'https://forbes.com.br/wp-content/uploads/2021/02/GettyImages-56424811-1.jpg',
  'https://i0.wp.com/teoriaedebate.org.br/wp-content/uploads/sites/2/2024/02/Pele.jpeg?fit=1000%2C1000&ssl=1',
  'https://imagens.ebc.com.br/cjgdtmXf7KAwCB1ZfHoVbEriBL0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/34812254320_598bab7ff3_o.jpg?itok=94xYcxYL',
  'https://cdn.folhape.com.br/upload/dn_arquivo/2023/07/whatsapp-image-2023-07-04-at-105519.jpeg',
  'https://cdn.folhape.com.br/upload/dn_arquivo/2022/12/image2.jpeg',
  'https://i0.wp.com/teoriaedebate.org.br/wp-content/uploads/sites/2/2024/02/Pele.jpeg?fit=1000%2C1000&ssl=1',
  'https://imagens.ebc.com.br/cjgdtmXf7KAwCB1ZfHoVbEriBL0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/34812254320_598bab7ff3_o.jpg?itok=94xYcxYL',
  'https://cdn.folhape.com.br/upload/dn_arquivo/2023/07/whatsapp-image-2023-07-04-at-105519.jpeg',
  'https://cdn.folhape.com.br/upload/dn_arquivo/2022/12/image2.jpeg',
  'https://i.em.com.br/89XH5jeDcghz3ujEFZSeoszYsOM=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2020/10/23/1197335/20201023033547802230i.jpg',
  'https://s2-oglobo.glbimg.com/7xb0AmkmD1fU5nA62fZUy-dxElI=/0x0:4992x3202/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/U/i/wWsUdZSoG6ydOKSUsDzg/pele-eliminatorias70.jpg',
  'https://forbes.com.br/wp-content/uploads/2021/02/GettyImages-56424811-1.jpg',
  'https://i0.wp.com/teoriaedebate.org.br/wp-content/uploads/sites/2/2024/02/Pele.jpeg?fit=1000%2C1000&ssl=1',
  'https://imagens.ebc.com.br/cjgdtmXf7KAwCB1ZfHoVbEriBL0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/34812254320_598bab7ff3_o.jpg?itok=94xYcxYL',
  'https://cdn.folhape.com.br/upload/dn_arquivo/2023/07/whatsapp-image-2023-07-04-at-105519.jpeg'
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