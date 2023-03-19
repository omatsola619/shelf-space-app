import { useFonts } from 'expo-font';
import { 
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold, 
    Montserrat_800ExtraBold,
    Montserrat_900Black,
} from '@expo-google-fonts/montserrat';


export const useCustomFonts = () => {
    const [fontsLoaded] = useFonts({
        'Montserrat_300': Montserrat_300Light,
        'Montserrat_400': Montserrat_400Regular,
        'Montserrat_500': Montserrat_500Medium,
        'Montserrat_600': Montserrat_600SemiBold,
        'Montserrat_700': Montserrat_700Bold,
        'Montserrat_800': Montserrat_800ExtraBold,
        'Montserrat_900': Montserrat_900Black,
      });

  return fontsLoaded;
};
