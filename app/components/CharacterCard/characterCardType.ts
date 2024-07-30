import {Character} from '../../types/globalType';

export interface CharacterCardProps {
  character: Character;
  onPressCard: (character: Character) => void;
}
