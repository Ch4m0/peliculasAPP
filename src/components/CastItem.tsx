import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interface/castIterface';

interface Props {
  actor: Cast;
}

const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/original/${actor.profile_path}`;

  console.log(actor);

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image source={{uri}} style={styles.imageProfile} />
      )}
      <View style={styles.actorInfo}>
        <Text style={styles.actorInfo__name}>{actor.name}</Text>
        <Text style={styles.actorInfo__character}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    height: 50,
    marginHorizontal: 20,
    marginBottom: 10,
    paddingRight: 10,
  },

  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  actorInfo: {
    marginLeft: 10,
    marginTop: 5,
  },

  actorInfo__name: {
    fontWeight: 'bold',
  },

  actorInfo__character: {
    opacity: 0.8,
  },
});
