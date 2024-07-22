import { Link } from 'expo-router';
import {
  ScreenContainer,
  Header,
  PrimaryText,
  Button,
  Column,
  Gap,
} from '@/components';

export default function Index() {
  return (
    <ScreenContainer>
      <Header title='booth' subTitle='A catalyst for connection' />
      <Column
        style={{ flex: 1 }}
        $width='90%'
        $justify='space-between'
        $align='center'
      >
        <Column>
          <Gap />
          <PrimaryText>
            What type of connection are you looking to make?
          </PrimaryText>
          <PrimaryText>I'm looking for:</PrimaryText>
        </Column>
        <Column $width='80%'>
          <Link href='/login' asChild>
            <Button>Find Connections</Button>
          </Link>
        </Column>
      </Column>
    </ScreenContainer>
  );
}
