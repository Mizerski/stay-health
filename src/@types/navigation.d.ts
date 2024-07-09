export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      HomeStack: undefined;
      Snack: undefined;
      Feedback: {
        isRedSelect: boolean;
      };
      Statistics: {
        average: string;
        type: string;
      };
      LogDiet: {
        snackId: SnackData;
      };
    }
  }
}
