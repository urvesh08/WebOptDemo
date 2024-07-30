import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {styles} from './characterStyle';
import {CharacterCardProps} from './characterCardType';

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onPressCard,
}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => onPressCard(character)}>
        <Image source={{uri: character.image}} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={2}>
            {character.name ?? ''}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterCard;
