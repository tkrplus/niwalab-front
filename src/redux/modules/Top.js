
// Actions
const SAMPLE_ACTION = '/niwalab/top/SAMPLE_ACTION'
const SAMPLE_COUNTER_ACTION = '/niwalab/top/SAMPLE_COUNTER_ACTION'

export const sampleAction = () => {
  return {
    type: SAMPLE_ACTION,
    sample: 'sampleMessage with Action'
  }
}

export const sampleCounterAction = () => {
  return {
    type: SAMPLE_COUNTER_ACTION
  }
}

// initialState
const initialState = {
  sample: 'sampleMessage',
  count: 0
}

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return {
        ...state,
        sample: action.sample
      }
    case SAMPLE_COUNTER_ACTION:
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}
