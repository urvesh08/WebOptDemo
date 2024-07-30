import {Character} from '../../types/globalType';

export interface CharacterDetailModalProps {
  isVisible: boolean;
  character: Character | null;
  onClose: () => void;
}
