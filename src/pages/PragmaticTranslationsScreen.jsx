import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import PragmaticHeader from '../components/PragmaticHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <PragmaticHeader />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'EPL',
          '05.02 19:00',
          'Arsenal ' + '\nManchester City',
        )}
        {renderBroadcast(
          'NBA',
          '12.03 21:30',
          'Boston Celtics ' + '\nLos Angeles Lakers',
        )}
        {renderBroadcast(
          'Bundesliga',
          '20.03 20:45',
          'Bayern Munich ' + '\nBorussia Dortmund',
        )}
        {renderBroadcast(
          'NHL',
          '25.04 19:00',
          'Chicago Blackhawks ' + '\nDetroit Red Wings',
        )}
        {renderBroadcast(
          'MLB',
          '30.05 17:30',
          'New York Yankees ' + '\nHouston Astros',
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 8,
  },
  league: {
    fontSize: 35,
    fontFamily: FONTS.black,
    color: COLORS.main,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 5,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    position: 'absolute',
    right: 10,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.main,
    marginTop: 5,
    marginLeft: 5,
  },
});
