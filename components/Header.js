import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppContext } from '../contexts/AppContext';
import { HeaderText, HeaderTextSmall } from './texts';

export const Header = ({ title, subTitle }) => {
  const { theme } = useAppContext();
  return (
    <LinearGradient
      colors={[
        theme.primaryHeaderBackground,
        theme.primaryHeaderBackground,
        theme.secondaryHeaderBackground,
      ]}
      style={styles.linear}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 0.2, 1]}
    >
      <HeaderText>{title}</HeaderText>
      {subTitle ? <HeaderTextSmall>{subTitle}</HeaderTextSmall> : null}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linear: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
    gap: 12,
  },
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
