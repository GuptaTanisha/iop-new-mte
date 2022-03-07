export default (hosts=[],action) => {
    switch(action.type){
        case 'GETHOSTS':
            return {hosts: action.payload};
        default:
            return hosts;
    }
}