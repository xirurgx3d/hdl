export const initialStateBuild = {
  urlVideo: '',
  urlBox:[] as unknown[]
}

type IinitialState = typeof initialStateBuild

export function reducerBuild(state:IinitialState, action:{type:string,payload:any}) {
  switch (action.type) {
    case 'url':
      return {...state,urlVideo: action.payload};
    case 'box':
      return {urlVideo: '',urlBox: [...state.urlBox,action.payload] };
    default:
      throw new Error();
  }
}