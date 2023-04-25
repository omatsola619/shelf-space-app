import { useFonts } from 'expo-font';
import { 
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_600SemiBold, 
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black
} from '@expo-google-fonts/poppins';

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

        'Poppins_200': Poppins_200ExtraLight,
        'Poppins_300': Poppins_300Light,
        'Poppins_400': Poppins_400Regular, 
        'Poppins_500': Poppins_500Medium, 
        'Poppins_600': Poppins_600SemiBold, 
        'Poppins_700': Poppins_700Bold,
        'Poppins_800': Poppins_800ExtraBold,
        'Poppins_900': Poppins_900Black
      });

  return fontsLoaded;
};
