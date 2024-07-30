import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { useAppContext } from '@/contexts/AppContext';

const MultiSelect = ({
  items,
  selectText,
  selectedItems,
  onSelectedItemsChange,
}) => {
  const { theme } = useAppContext();
  const modalMarginTop = Platform.OS === 'ios' ? 20 : 0;
  const fontFamily = Platform.OS === 'ios' ? 'San Francisco' : 'Roboto';
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
        colors={{
          primary: theme.primaryButton,
          text: theme.primaryText,
          subText: theme.secondaryText,
          selectToggleTextColor: theme.secondaryText,
          searchPlaceholderTextColor: theme.primaryText,
        }}
        styles={{
          selectToggle: {
            borderColor: theme.secondaryText,
            borderWidth: 1,
            borderRadius: 4,
          },
          selectToggleText: {
            marginTop: 18,
            paddingLeft: 4,
          },
          modalWrapper: { marginTop: modalMarginTop },
          itemText: {
            fontWeight: 400,
            fontFamily: fontFamily,
            fontSize: 16,
            margin: 4,
          },
          button: {
            borderRadius: 20,
            marginLeft: 16,
            marginRight: 16,
            marginBottom: 16,
          },
          confirmText: {
            fontWeight: 400,
            fontFamily: fontFamily,
            fontSize: 16,
          },
          chipsWrapper: { marginTop: 12 },
          chipContainer: {
            borderWidth: 0,
            backgroundColor: theme.primaryButton,
          },
          chipText: { fontFamily: fontFamily, color: theme.primaryBackground },
          chipIcon: { color: theme.primaryBackground },
        }}
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
