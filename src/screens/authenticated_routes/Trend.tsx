import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WithAauthenticatedWrapper from "../../component/HOC's/withAuthenticatedWrapper";

const Trend = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page Unavailable</Text>
      <Text style={styles.subtitle}>
        Sorry, the page you're trying to access is currently unavailable.
      </Text>
    </View>
  );
};

const TrendWithAuthenticatedWrapper = WithAauthenticatedWrapper(Trend, true);

export default TrendWithAuthenticatedWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
});
