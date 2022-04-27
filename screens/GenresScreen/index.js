import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import GridItem from '../../components/GridItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectGenre } from '../../store/actions/genre.action';

function GenresScreen({navigation}) {
  const genres = useSelector(state => state.genres.genres);
  const dispatch = useDispatch();

  const handledSelectedGenre = (genre) => {
    dispatch(selectGenre(genre.id));
    navigation.navigate('BookGenre', {
      name: genre.name
    })
  }

  const renderGridItem = ({item}) => <GridItem item={item} onSelected={handledSelectedGenre}/>;

  return (
    <FlatList 
      data={genres}
      keyExtractor={item => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default GenresScreen;