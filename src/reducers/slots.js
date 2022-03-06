export default (slots=[],action) => {
    switch(action.type){
        case 'GETSLOTS':
            return {slots: action.payload};
        default:
                return slots;
    }
}