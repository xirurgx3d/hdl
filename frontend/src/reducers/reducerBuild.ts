export const initialStateBuild = {
  year:'123',
  urlVideo: '',
  urlBox: [] as unknown[],
  
}

type IinitialState = typeof initialStateBuild

export function reducerBuild(state:IinitialState, action:{type:string,payload:any}) {
  switch (action.type) {
    case 'url':
      return {...state,urlVideo: action.payload};
    case 'addUrl':
      return { urlVideo: '', urlBox: [...state.urlBox, action.payload] };
    case 'deletUrl':
      return {urlVideo: '',urlBox: state.urlBox.splice(action.payload,1) };
    default:
      throw new Error();
  }
}