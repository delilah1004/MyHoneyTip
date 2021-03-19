import React from 'react';
import main from '../assets/main.png';
import pizza from '../assets/pizza.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, YellowBox} from 'react-native';

export default function MainPage() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
      <Image style={styles.mainImage} source={main}/>
      <ScrollView style={styles.middleContainer} horizontal={true}>
        <TouchableOpacity style={styles.middleButton01}>
          <Text style={styles.middleButtonText}>생활</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}>
          <Text style={styles.middleButtonText}>재테크</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03}>
          <Text style={styles.middleButtonText}>반려견</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04}>
          <Text style={styles.middleButtonText}>꿀팁 찜</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.card}>
        <Image source={pizza} style={styles.cardImage}/>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>먹다 남은 피자를 촉촉하게!</Text>
          <Text style={styles.cardDesc} numberOfLines={3} ellipsizeMode="tail">먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>
          <Text style={styles.cardDate}>2020.09.09</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 50,
    marginLeft: 20
  },
  mainImage: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center"
  },
  middleContainer: {
    marginTop: 20,
    marginLeft: 10,
    height: 60
  },
  middleButton01: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#FDC453",
    borderRadius: 15,
    margin: 7
  },
  middleButton02: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#FE8D6F",
    borderRadius: 15,
    margin: 7
  },
  middleButton03: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#9ABDC5",
    borderRadius: 15,
    margin: 7
  },
  middleButton04: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#F886A8",
    borderRadius: 15,
    margin: 7
  },
  middleButtonText: {
    color: "#FFF",
    fontWeight: "700",
    textAlign: "center"
  },
  card: {
    flex: 1,
    flexDirection: "row",
    margin: 15,
    borderBottomColor: "#EEE"
  },
  cardImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 10
  },
  cardText: {
    flex: 2,
    marginLeft: 10
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700"
  },
  cardDesc: {
    fontSize: 15
  },
  cardDate: {
    fontSize: 10,
    color: "#AAA"
  }
})