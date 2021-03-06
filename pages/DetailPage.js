import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import rentalImage from '../assets/rental.png'

export default function AboutPage(){
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={rentalImage} />
      <Text style={styles.title}>{tip.title}</Text>
      <Text style={styles.desc}>{tip.desc}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>팁 찜하기</Text>
      </TouchableOpacity>
    </View>
  )
}

const tip = {
  "idx":9,
  "category":"재테크",
  "title":"렌탈 서비스 금액 비교해보기",
  "image": "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Frental.png?alt=media&token=97a55844-f077-4aeb-8402-e0a27221570b",
  "desc":"요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
  "date":"2020.09.09"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginTop: 40,
    padding: 5,
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "50%",
    borderRadius: 20
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    marginTop: 30,
    textAlign: 'center'
  },
  desc: {
    fontSize: 13,
    color: "white",
    padding: 15,
  },
  button: {
    width: 100,
    height: 50,
    padding: 20,
    borderWidth: 1,
    borderColor: "#662AED",
    borderRadius: 5,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: "white",
    alignSelf: "center"
  }
})