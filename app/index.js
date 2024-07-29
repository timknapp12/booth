import { Keyboard, Text, View } from 'react-native';
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
    roles,
    industries,
    loadingRoles,
  } = useAppContext();

  const onNext = () => {};

  // TODO - add real loading state
  if (loadingRoles)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );

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
              placeholder='<Enter your name>'
              onSubmitEditing={onNext}
            />
            <Input
              label='LinkedIn Profile'
              value={linkedInUrl}
              onChangeText={(text) => setLinkedInUrl(text)}
              returnKeyType='done'
              placeholder='<Enter LinkedIn Profile URL>'
            />
            <MultiSelect
              items={roles}
              selectText='<What describes you?>'
              selectedItems={lookingForItems}
              onSelectedItemsChange={setLookingForItems}
            />
            <MultiSelect
              items={industries}
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
