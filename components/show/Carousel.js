import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions
} from "react-native";

import Utils from '../../lib/Utils'

function Carousel({ sprites }){
  const scrollX = useRef(new Animated.Value(0)).current;
  const images = Utils.getAllValuesFrom(sprites);

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.scrollContainer }>
        <ScrollView
          horizontal={true}
          style={ styles.scrollViewStyle }
          pagingEnabled
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ])}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={ styles.card }
                key={imageIndex}
              >
                <ImageBackground source={{ uri: image[1] }} style={styles.image} />
                  
                <View style={styles.textContainer}>
                  <Text style={styles.infoText}>
                    { Utils.normalize(image[0]) }
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'lightgray',
    width: '70%',
    shadowColor: 'black',
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: .5,
    shadowRadius: 5,
    borderRadius: 25,
    marginVertical: 25,
  },
  scrollContainer: {
    width: "100%",
    height: "75%",
    backgroundColor: "black",
  },
  scrollViewStyle: {
    marginVertical: "10%",
    backgroundColor: "white",
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20
  },
  image: {
    flex: 8,
    width: 188,
    height: 188,
    resizeMode: 'contain',
    marginHorizontal: 10,
    justifyContent: "center",
    backgroundColor: "white"
  },
  textContainer: {
    flex: 2,
    backgroundColor: "rgba(50,50,50, 0.7)",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  infoText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  }
});

export default Carousel;