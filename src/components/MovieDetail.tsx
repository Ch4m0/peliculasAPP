import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {MovieFull} from '../interface/movieInterface';
import {Cast} from '../interface/castIterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';
import HorizontalSlider from './HorizontalSlider';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetail = ({movieFull, cast}: Props) => {
  return (
    <>
      <View>
        <View style={styles.average}>
          <Icon name="star-outline" color="grey" size={20} />

          <Text>{movieFull.vote_average}</Text>

          <Text style={{marginLeft: 10}}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>

        <View>
          <Text style={{fontWeight: 'bold', marginTop: 10, fontSize: 20}}>
            Sinopsis
          </Text>
          <Text style={styles.overView}>{movieFull.overview}</Text>

          <Text style={styles.revenue}>Presupuesto</Text>
          <Text>
            {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
          </Text>
        </View>
      </View>
      <View style={{marginVertical: 20}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Actores</Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  average: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overView: {
    fontSize: 16,
  },
  revenue: {fontWeight: 'bold', marginTop: 10, fontSize: 14},
});
