import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RootStackParams} from '../navigation/MenuLateral';
import {ScrollView} from 'react-native-gesture-handler';
import {useMovieDetails} from '../hooks/useMovieDetails';
import MovieDetail from '../components/MovieDetail';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const heightScreen = Dimensions.get('screen').height;

const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  console.log(movie.id);
  const {movieFull, isLoading, cast} = useMovieDetails(movie.id);
  console.log(isLoading);

  const uri = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.posterImage} />
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <View style={styles.marginContainer}>
        {!isLoading ? (
          <ActivityIndicator size={30} color="grey" style={{marginTop: 20}} />
        ) : (
          <MovieDetail movieFull={movieFull} cast={cast} />
        )}
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: heightScreen * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4.65,
    elevation: 6,
    borderBottomEndRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
