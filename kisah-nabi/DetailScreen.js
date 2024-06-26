import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.label}>Tahun Kelahiran:</Text>
      <Text style={styles.value}>{item.thn_kelahiran}</Text>
      <Text style={styles.label}>Usia:</Text>
      <Text style={styles.value}>{item.usia}</Text>
      <Text style={styles.label}>Tempat:</Text>
      <Text style={styles.value}>{item.tmp}</Text>
      <Text style={styles.label}>Deskripsi:</Text>
      <Text style={styles.value}>{item.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DetailScreen;
