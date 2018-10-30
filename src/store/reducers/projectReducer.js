const initState = {
    projects: [
        {id:1, title:'title', content:'content'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT': 
            console.log('test')
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        default:
            return state
    }
}

export default projectReducer