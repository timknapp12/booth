import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { useAppContext } from '@/contexts/AppContext';

const MultiSelect = ({
  items,
  selectText,
  selectedItems,
  onSelectedItemsChange,
}) => {
  const { theme } = useAppContext();
  return (
    <View style={{ width: '100%' }}>
      <SectionedMultiSelect
        items={items}
        IconRenderer={MaterialIcons}
        uniqueKey='id'
        subKey='children'
        selectText={selectText}
        // showDropDowns={true}
        hideSearch={true}
        selectedItems={selectedItems}
        onSelectedItemsChange={onSelectedItemsChange}
        colors={{ primary: theme.primaryButton }}
      />
    </View>
  );
};

export default MultiSelect;

MultiSelect.propTypes = {
  items: PropTypes.array,
  selectText: PropTypes.string.isRequired,
  selectedItems: PropTypes.array.isRequired,
  onSelectedItemsChange: PropTypes.func.isRequired,
};
