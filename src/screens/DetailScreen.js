import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { SongExplanation } from '../components/songComponent';

const DetailScreen = (props) => {
    const { route } = props;
    const song = route.params.item;

    useEffect(() => {
        console.log(song);
    }, []);
  return (
    <View style={styles.mainContainer}>
            <ScrollView>
            <View style={styles.songContainer}>
                <View style={styles.middle}>
                    <Image
                        style={styles.image}
                        source={{ uri: song.imageLink }}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                </View>
                <SongExplanation
                    name="Singer"
                    value={song.singer}
                />
                <SongExplanation
                    name="Year"
                    value={song.year}
                />
                <SongExplanation 
                    name="Genre"
                    value={song.genre}
                />
                <SongExplanation
                    name="Songwriter"
                    value={song.songwriters}
                />
                <SongExplanation 
                    name="Rating"
                    value={song.rating}
                    isRating={true}
                    rating={song.rating}
                />
            </View>
            </ScrollView>
        </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    songContainer: {
        margin: 8,
        padding: 8
    },
    middle: {
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'salmon'
    },
    titleContainer: {
        marginTop: 8,
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 8,
        // backgroundColor: 'salmon',
        borderRadius: 10,
        color: 'black',
    }
});