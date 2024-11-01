interface RepsState {
  reps: any[];
  loading: boolean;
  error: null | string;
}

const initialState: RepsState = {
  reps: [],
  loading: false,
  error: null
}

export const repsReducer = (state = initialState, action) => {
  switch(action.type) {

  }
}