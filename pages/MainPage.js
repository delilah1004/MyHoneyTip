import React,{useState, useEffect} from 'react';
import main from '../assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import data from '../data.json';
import Card from '../components/Card';
import Loading from '../components/Loading';

export default function MainPage() {
  console.disableYellowBox = true;

  // 기존 꿀팁을 저장하고 있을 상태
  const [state, setState] = useState([])
  // 카테고리에 따라 다른 꿀팁을 그때그때 저장관리할 상태
  const [cateState, setCateState] = useState([])

  //컴포넌트에 상태를 여러개 만들어도 됨
  //관리할 상태이름과 함수는 자유자재로 정의할 수 있음
  //초기 상태값으로 리스트, 참거짓형, 딕셔너리, 숫자, 문자 등등 다양하게 들어갈 수 있음.
  const [ready, setReady] = useState(true)

  useEffect(() => {
    // 뒤의 1000 숫자는 1초를 뜻함
    // 1초 뒤에 실행되는 코드들이 담겨있는 함수
    setTimeout(() => {
      let tip = data.tip;
      setState(tip)
      setCateState(tip)
      setReady(false)
    }, 2000)
  }, [])

  const category = (cate) => {
    if(cate == "전체보기") {
      setCateState(state)
    } else {
      setCateState(state.filter((d) => {
        return d.category == cate
      }))
    }
  }

  let todayWeather = 10 + 17;
  let todayCondition = "흐림";

  // 삼항연산자
  // 처음 ready 상태값은 true 이므로 Loading 이 반환됨
  // useEffect로 인해 데이터가 준비되고, ready 값이 변경되면 : 콜론 뒤의 값이 반환
  return ready ? <Loading/> : (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
      <Text style={styles.weather}>오늘의 날씨 : {todayWeather +  '℃ ' + todayCondition}</Text>
      <Image style={styles.mainImage} source={main}/>
      <ScrollView style={styles.middleContainer} 
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}>
        <TouchableOpacity style={styles.middleButton00}
                          onPress={() => {category('전체보기')}}>
          <Text style={styles.middleButtonText}>전체보기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton01}
                          onPress={() => {category('생활')}}>
          <Text style={styles.middleButtonText}>생활</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}
                          onPress={() => {category('재테크')}}>
          <Text style={styles.middleButtonText}>재테크</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03}
                          onPress={() => {category('반려견')}}>
          <Text style={styles.middleButtonText}>반려견</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04}>
          <Text style={styles.middleButtonText}>꿀팁 찜</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
        {
          cateState.map((content, i) => {
            return (<Card content={content} key={i}/>)
          })
        }
      </View>
    </ScrollView>
  );
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
  weather:{
    alignSelf:"flex-end",
    paddingRight:20
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
  middleButton00: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#CCC",
    borderRadius: 15,
    margin: 7
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
  cardContainer: {
    marginTop:10,
    marginLeft:10
  }
});