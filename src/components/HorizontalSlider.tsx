import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import MoviePoster from './MoviePoster';
import {Movie} from '../interface/movieInterface';

interface Props {
  movies: Movie[];
  title: string;
}

const HorizontalSlider = ({movies, title}: Props) => {
  return (
    <View style={{height: 250}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
