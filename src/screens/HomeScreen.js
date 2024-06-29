import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { songData } from '../../data/SongData'
import { ButtonComponent } from '../components/ButtonComponent'


const HomeScreen = (props) => {
    const [recommended, setRecommended] = useState([]);

    const { route, navigation } = props;

    const compareRating = (a, b) => {
        const ratingA = a.rating;
        const ratingB = b.rating;

        if (ratingA > ratingB) {
            return -1;
        } else if (ratingA < ratingB) {
            return 1;
        } else {
            return 0;
        }
    };

    useEffect(() => {
        // SORTING FLATLIST VERTICAL
        const sortedRecommended = [...songData].sort(compareRating);
        setRecommended(sortedRecommended);
    }, []);

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={recommended}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.FlatListContainer}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.dataContainer}>
                            <Image
                                style={styles.songImage}
                                source={{ uri: item.imageLink }}
                            />
                            <View style={styles.songDescription}>
                                <Text style={styles.title}>
                                    {item.title}</Text>
                                <View style={styles.singerTextContainer}>
                                    <Text>
                                        {item.singer}</Text>
                                    {
                                        item.rating === 5 ?
                                            <Image
                                                style={{
                                                    width: 100,
                                                    height: 20,
                                                    marginTop: 4
                                                }}
                                                source={require('../../assets/images/five-stars.png')}
                                            />
                                            :
                                            item.rating === 4 ?
                                                <Image
                                                    style={{
                                                        width: 100,
                                                        height: 20,
                                                        marginTop: 4
                                                    }}
                                                    source={require('../../assets/images/four-stars.png')}
                                                />
                                                :
                                                item.rating === 3 ?
                                                    <Image
                                                        style={{
                                                            width: 100,
                                                            height: 20,
                                                            marginTop: 4
                                                        }}
                                                        source={require('../../assets/images/three-stars.png')}
                                                    />
                                                    :
                                                    null
                                    }
                                </View>
                                <ButtonComponent
                                    onPress={() =>
                                        navigation.navigate('Detail', { item })
                                    }
                                />
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },

    flatListContainer: {
        padding: 8
    },

    songImage: {
        width: 120,
        height: 120,
        borderRadius: 10
    },

    dataContainer: {
        margin: 8,
        borderColor: '#96ceb4',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row'
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },

    songDescription: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 8
    },

    singerTextContainer: {
        marginTop: 2,
        marginBottom: 2
    }
})