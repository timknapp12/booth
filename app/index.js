import { Keyboard } from 'react-native';
import { Link } from 'expo-router';
import {
  ScreenContainer,
  Header,
  PrimaryText,
  Button,
  Column,
  Gap,
  Input,
  NoFeedbackButton,
} from '@/components';
import MultiSelect from '@/components/MultiSelect';
import { useAppContext } from '@/contexts/AppContext';

const items = [
  { id: 0, name: 'Investor' },
  { id: 1, name: 'New Job' },
  { id: 2, name: 'Coach' },
  { id: 3, name: 'Friend' },
  { id: 4, name: 'Talent' },
];

const industryItems = [
  { id: 0, name: 'Software Development' },
  { id: 1, name: 'Retail' },
  { id: 2, name: 'Food' },
  { id: 3, name: 'Recreation' },
  { id: 4, name: 'Entertainment' },
];

export default function Index() {
  const {
    name,
    setName,
    linkedInUrl,
    setLinkedInUrl,
    lookingForItems,
    setLookingForItems,
    lookingForIndustries,
    setLookingForIndustries,
  } = useAppContext();

  const onNext = () => {};
  return (
    <NoFeedbackButton onPress={Keyboard.dismiss}>
      <ScreenContainer>
        <Header title='booth' subTitle='A catalyst for connection' />
        <Column
          style={{ flex: 1 }}
          $width='90%'
          $justify='space-between'
          $align='center'
        >
          <Column $gap='12px'>
            <Gap />
            <PrimaryText>Tell us a little about yourself:</PrimaryText>
            <Input
              label='Name'
              value={name}
              onChangeText={(text) => setName(text)}
              returnKeyType='next'
              onSubmitEditing={onNext}
            />
            <Input
              label='LinkedIn Profile'
              value={linkedInUrl}
              onChangeText={(text) => setLinkedInUrl(text)}
              returnKeyType='done'
            />
            <MultiSelect
              items={items}
              selectText='<What describes you?>'
              selectedItems={lookingForItems}
              onSelectedItemsChange={setLookingForItems}
            />
            <MultiSelect
              items={industryItems}
              selectText='<In what industry?>'
              selectedItems={lookingForIndustries}
              onSelectedItemsChange={setLookingForIndustries}
            />
          </Column>

          <Column $width='80%'>
            <Link href='/looking-for' asChild>
              <Button>Submit</Button>
            </Link>
          </Column>
        </Column>
      </ScreenContainer>
    </NoFeedbackButton>
  );
}
