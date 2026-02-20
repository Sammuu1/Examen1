import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';


//para memoria es mejor dejar valores estaticos para evitar "hacer que adivine" que tipo de valor tiene
//modificaciones 09/02: limitar likes por usuario y boton de guardar, empezando aqui
const App = () => {
  const [numberLikes, setNumberLikes] = useState(0);
  const [color, setColor] = useState(false);
  const [save, setSave] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [numberViews, setNumberViews] = useState(189);
  const [viewStory, setViewStory] = useState(false);
  const handleSave = () => {
    setSave(!save);
  }
  const handleViewsandhandleStory = () => {
    setNumberViews(numberViews + 1);
    setShowStory(!showStory);
    setViewStory(true);
  }
  const handleLikeandColor = () => {
    setNumberLikes(color ? 0 : 1);
    setColor(!color);
  };
  const handleView = () => {
    setShowStory(false);
  }


  if (showStory) {
    return (
      <View style={styles.storyContainer2}>
          <View style={styles.storyRow}>
            <Text style={styles.storyname}>Samuel Reséndiz</Text>
          </View>
        <Image
          style={styles.image}
          source={require('./assets/imgs/mcr2.jpeg')}
        />
        <Text style={styles.caption}>Tqm My Chemical Romance</Text>
        <Text style={styles.views}>{numberViews} views</Text>

        <TouchableOpacity onPress={handleView}>
          <Text style={styles.closeStory}>Cerrar historia</Text>
        </TouchableOpacity>
      </View>

    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Instagram</Text>
      </View>
      <View style={styles.storyContainer}>
        <View style={styles.storyElements}>
          <Image
            source={require('./assets/imgs/samu.jpeg')}
            style={styles.storyImage}
          />
          <View style={styles.viewStory}>
            <TouchableOpacity onPress={handleViewsandhandleStory}>
              <Text style={styles.textStory}>Ver historia</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.viewStoryText}>
            {viewStory ? "Vista" : "Historia no vista"}
          </Text>
        </View>
      </View>
      <View style={styles.postContainer}>
        <View style={styles.userRow}>
          <Image
            source={require('./assets/imgs/samu.jpeg')}
            style={styles.profileImage}
          />
          <Text style={styles.username}>Samuel Reséndiz</Text>
          <Text style={styles.more}>⋯</Text>
        </View>
        <Image
          style={styles.image}
          source={require('./assets/imgs/mustang.jpg')}
        />
        <View style={styles.actionsRow}>
          <View style={styles.leftActions}>
            <TouchableOpacity onPress={handleLikeandColor}>
              <Text style={styles.icon}>{color ? '❤️' : '🤍'}</Text>
            </TouchableOpacity>
            <Text style={styles.icon}>{numberLikes}</Text>
            <Text style={styles.icon}>💬</Text>
            <Text style={styles.icon}>➦</Text>
          </View>
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.icon}>{save ? '⭐️' : '🔖'}</Text> {/*Modificaciones terminan aqui */}
          </TouchableOpacity>
            </View>
            <Text style={styles.likes}>172 likes</Text>
            <Text style={styles.caption}>
              <Text style={styles.username}>Samuel Reséndiz </Text>
              Mustang vibes 🏎️🔥
            </Text>
            <Text style={styles.comments}>View all 12 comments</Text>
          </View>
          <View style={styles.bottomBar}>
            <View style={styles.line} />
            <View style={styles.icons}>
              <Text style={styles.icon}>🏠</Text>
              <Text style={styles.icon}>🔍</Text>
              <Text style={styles.icon}>➕</Text>
              <Text style={styles.icon}>❤️</Text>
              <Text style={styles.icon}>👤</Text>
            </View>
          </View>

          <StatusBar style="light" />
         </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingBottom: 70,
  },

titleContainer: {
  marginTop: 50,
  alignItems: 'center',
},
titleText: {
  fontStyle: 'italic',
  fontWeight: 'bold',
  color: '#fff',
  fontSize: 28,
},

postContainer: {
  marginTop: 50,
},
userRow: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 10,
  marginBottom: 8,
},
profileImage: {
  width: 36,
  height: 36,
  borderRadius: 18,
  marginRight: 8,
},
username: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 15,
  flex: 1,
},
more: {
  color: '#fff',
  fontSize: 20,
},
image: {
  width: '100%',
  height: 300,
},

actionsRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 10,
  marginTop: 8,
},
leftActions: {
  flexDirection: 'row',
  gap: 12,
},
icon: {
  fontSize: 22,
  color: '#fff',
},

likes: {
  color: '#fff',
  fontWeight: 'bold',
  marginTop: 6,
  paddingHorizontal: 10,
  },
caption: {
  color: '#fff',
  paddingHorizontal: 10,
  marginTop: 2,
},
comments: {
  color: '#aaa',
  paddingHorizontal: 10,
  marginTop: 2,
},

bottomBar: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  backgroundColor: '#000',
  },
line: {
  height: 1,
  backgroundColor: '#222',
},
icons: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingVertical: 10,
},
storyImage: {
  width: '100%',
  height: '90%',
  borderRadius: 90,
  marginRight: 8,
},
storyContainer: {
  marginTop: 40,
  width: 80,
  height: 80,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 5,
},
storyElements: {
  gap: 10,
},
textStory: {
  color: '#fff',
  fontSize: 12,
  marginTop: 5,
  alignItems: 'center',
  justifyContent: 'center',
},
storyContainer2: {
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  backgroundColor: '#000',
  paddingBottom: 70,
  gap: 10,
  },
storyRow: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 10,
  marginBottom: 8,
},
storyname: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 15,
  flex: 1,
},
views: {
  color: '#fff',
  fontWeight: 'bold',
  marginTop: 6,
  paddingHorizontal: 10,
},
viewStory: {
  backgroundColor: '#0040ffff',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
  width: 70,
  height: 22,
},
closeStory: {
  backgroundColor: '#0040ffff',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
  width: 95,
  height: 20,
  color: '#fff',
},
viewStoryText: {
  color: '#fff',
  fontSize: 13,
  marginTop: 5,
  alignItems: 'center',
  justifyContent: 'center',
},
});
