// NavigationTypes.ts
export type RootStackParamList = {
  Home: undefined; // La pantalla Home no espera parámetros
  Select: undefined; // La pantalla Select no espera parámetros
  Description: {horoscopeName: string}; // La pantalla Description espera un parámetro
};
