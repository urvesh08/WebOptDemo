import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

import {styles} from './characterDetailModalStyle';
import {CharacterDetailModalProps} from './characterDetailModalType';
import {Strings} from '../../constants';

const CharacterDetailModal: React.FC<CharacterDetailModalProps> = ({
  isVisible,
  character,
  onClose,
}) => {
  if (!character) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.outerDetailContainer}>
              <View>
                <Image
                  source={{uri: character.image}}
                  style={styles.modalImage}
                />
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.modalTitle}>{character.name ?? ''}</Text>
                <View>
                  <Text style={styles.descriptionText}>
                    {Strings.characterDetail.species} {character.species ?? ''}
                  </Text>
                  <Text style={styles.descriptionText}>
                    {Strings.characterDetail.gender} {character.gender ?? ''}
                  </Text>
                </View>
                <View>
                  <Text style={styles.descriptionText}>
                    {Strings.characterDetail.location}
                    {character.location.name ?? ''}
                  </Text>
                  <Text style={styles.descriptionText}>
                    {Strings.characterDetail.episodes}{' '}
                    {character.episode.length ?? ''}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>
                {Strings.characterDetail.close}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CharacterDetailModal;
