import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Movie} from '../interface/movieInterface';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/MenuLateral';
import {useNavigation} from '@react-navigation/native';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = ({movie, width = 200, height = 400}: Props) => {
  const uri = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailScreen', movie)}
      style={{
        ...styles.imageContainer,
        ...{width, height, marginHorizontal: 8},
      }}>
      <Image
        source={{
          uri,
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
  },
  imageContainer: {
    width: 200,
    height: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
