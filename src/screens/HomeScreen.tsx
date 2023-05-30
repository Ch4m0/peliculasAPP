import React from 'react';

import Carousel from 'react-native-snap-carousel';
import {ActivityIndicator, Dimensions, View} from 'react-native';

import {useMovies} from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {playing, popular, topRated, upcoming, isLoading} = useMovies();

  return (
    <ScrollView>
      <SafeAreaView>
        {!isLoading ? (
          <>
            <View style={{height: 420}}>
              <Carousel
                data={playing}
                renderItem={({item}: any) => <MoviePoster movie={item} />}
                sliderWidth={windowWidth}
                itemWidth={200}
              />
            </View>

            <HorizontalSlider title="Popular" movies={popular} />
            <HorizontalSlider title="Top Rated" movies={topRated} />
            <HorizontalSlider title="Upcoming" movies={upcoming} />
          </>
        ) : (
          <ActivityIndicator color="red" size={20} style={{flex: 1}} />
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
