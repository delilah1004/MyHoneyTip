import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import aboutImage from '../assets/aboutImage.png';

export default function AboutPage(){
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.aboutTitle}>Hi! 스파르타코딩 앱개발 반에 오신 것을 환영합니다</Text>
      </View>
      <View style={styles.middleContainer}>
        <Image style={styles.aboutImage} source={aboutImage} />
        <Text style={styles.contentTitle}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
        <Text style={styles.contentSubTitle}>꼭 완주하셔서 여러분 것으로 만들어 가시길 바랍니다</Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>여러분의 인스타계정</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262C74",
    alignItems: "center"
  },
  topContainer: {
    justifyContent: "center",
    marginTop: 100,
    marginLeft: 30,
    marginRight: 30,
  },
  aboutTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "white",
    textAlign: 'center'
  },
  middleContainer: {
    backgroundColor: "white",
    width: 300,
    height: 450,
    borderRadius: 30,
    marginTop: 50,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  aboutImage: {
    width: 130,
    height: 130,
    borderRadius: 20
  },
  contentTitle: {
    width: 250,
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
    textAlign: 'center'
  },
  contentSubTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    width: 180,
    backgroundColor: "#F3B13E",
    padding: 20,
    marginTop: 20,
    borderRadius: 20
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: "white",
    alignSelf: "center"
  }
})