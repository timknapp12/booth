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
  { id: 0, value: 'investor', name: 'Investor' },
  { id: 1, value: 'new_job', name: 'New Job' },
  { id: 2, value: 'coach', name: 'Coach' },
  { id: 3, value: 'friend', name: 'Friend' },
  { id: 4, value: 'talent', name: 'Talent' },
];

export default function LookingFor() {
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
            <PrimaryText>
              What type of connection are you looking to make?
            </PrimaryText>
            <PrimaryText>I'm looking for:</PrimaryText>
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
              selectText='<I am looking for>'
              selectedItems={lookingForItems}
              onSelectedItemsChange={setLookingForItems}
            />
            <MultiSelect
              items={items}
              selectText='<In what industry>'
              selectedItems={lookingForIndustries}
              onSelectedItemsChange={setLookingForIndustries}
            />
          </Column>

          <Column $width='80%'>
            <Link href='/login' asChild>
              <Button>Find Connections</Button>
            </Link>
          </Column>
        </Column>
      </ScreenContainer>
    </NoFeedbackButton>
  );
}
