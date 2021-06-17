import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../styles/Theme'
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: COLORS.carouselbordercolor,
    borderWidth: 0,
    borderRadius: 8,
    shadowColor: COLORS.carouselshadowcolor,
    shadowOpacity: 1,
    marginTop: 1,
    shadowOffset: {
      width: 0,
      height: 5
    },
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bullets: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 1,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20,
  }
});

export default styles;