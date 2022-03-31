const noteReducer = (noteState, {type, payload}) => {
        switch (type) {
            case 'ADD_NOTES':
                return (
                    {...noteState, notes: [...noteState.notes, {...payload}]}
                    )
            default:
                return noteState;
        }
}

export {noteReducer};