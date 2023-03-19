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
import {
    Inter_600SemiBold
} from '@expo-google-fonts/inter'

export const useCustomFonts = () => {
    const [fontsLoaded] = useFonts({
        'Montserrat_300': Montserrat_300Light,
        'Montserrat_400': Montserrat_400Regular,
        'Montserrat_500': Montserrat_500Medium,
        'Montserrat_600': Montserrat_600SemiBold,
        'Montserrat_700': Montserrat_700Bold,
        'Montserrat_800': Montserrat_800ExtraBold,
        'Montserrat_900': Montserrat_900Black,
        'Inter_600': Inter_600SemiBold,
      });

  return fontsLoaded;
};
