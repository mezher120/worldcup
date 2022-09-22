const initialState = {

}

export default function rootReducer(state=initialState, action) {
    switch (action.type) {
        case "Group A":
            if (action.payload.country && action.payload.country.length <= 1) {
                return {...state, "1A": action.payload.country[0]} 
            } else if (action.payload.country.length > 1) {
                return {...state, "2A": action.payload.country[1]} 
            } 
        case "Group B":
            if (action.payload.country && action.payload.country.length <= 1) {
                return {...state, "1B": action.payload.country[0]} 
            } else if (action.payload.country.length > 1) {
                return {...state, "2B": action.payload.country[1]} 
            } 
        case "Group C":
            if (action.payload.country && action.payload.country.length <= 1) {
                return {...state, "1C": action.payload.country[0]} 
            } else if (action.payload.country.length > 1) {
                return {...state, "2C": action.payload.country[1]} 
            } 
        case "Group D":
            if (action.payload.country && action.payload.country.length <= 1) {
                return {...state, "1D": action.payload.country[0]} 
            } else if (action.payload.country.length > 1) {
                return {...state, "2D": action.payload.country[1]} 
            } 
        case "Group E":
            if (action.payload.country && action.payload.country.length <= 1) {
                return {...state, "1E": action.payload.country[0]} 
            } else if (action.payload.country.length > 1) {
                return {...state, "2E": action.payload.country[1]} 
            } 
        case "Group F":
            if (action.payload.country && action.payload.country.length <= 1) {
                return {...state, "1F": action.payload.country[0]} 
            } else if (action.payload.country.length > 1) {
                return {...state, "2F": action.payload.country[1]} 
            } 
        case "Group G":
            if (action.payload.country && action.payload.country.length <= 1) {
                return {...state, "1G": action.payload.country[0]} 
            } else if (action.payload.country.length > 1) {
                return {...state, "2G": action.payload.country[1]} 
            } 
        case "Group H":
            if (action.payload.country && action.payload.country.length <= 1) {
                return {...state, "1H": action.payload.country[0]} 
            } else if (action.payload.country.length > 1) {
                return {...state, "2H": action.payload.country[1]} 
            } 
        case "1CF":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "1CF": action.payload} 
            }
        case "2CF":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "2CF": action.payload} 
            }
        case "3CF":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "3CF": action.payload} 
            }
        case "4CF":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "4CF": action.payload} 
            }
        case "5CF":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "5CF": action.payload} 
            }
        case "6CF":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "6CF": action.payload} 
            }
        case "7CF":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "7CF": action.payload} 
            }
        case "8CF":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "8CF": action.payload} 
            }
        case "1SS":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "1SS": action.payload} 
            }
        case "2SS":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "2SS": action.payload} 
            }
        case "3SS":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "3SS": action.payload} 
            }
        case "4SS":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "4SS": action.payload} 
            }
        case "1SSfinal":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "1FI": action.payload} 
            }
        case "2SSfinal":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "1FI": action.payload} 
            }
        case "3SSfinal":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "2FI": action.payload} 
            }
        case "4SSfinal":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "2FI": action.payload} 
            }
        case "tercero1":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "1TR": action.payload} 
            }
        case "tercero2":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "2TR": action.payload} 
            }
        case "1FI":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "1FI": action.payload} 
            }
        case "2FI":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "2FI": action.payload} 
            }
        case "1TR":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "1TR": action.payload} 
            }
        case "2TR":
            console.log("entre al reduce", action.payload)
            if (typeof action.payload === 'string') {
                return {...state, "2TR": action.payload} 
            }
        default:
            return state;
    }
}