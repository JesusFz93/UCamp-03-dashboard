const url ='https://api.covidtracking.com/v1/'


export const request = async (state) => {
    try {
        const response = await fetch(`${url}states/${state}/daily.json`);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }
}

export const requestAll = async () => {
    try {
        const response = await fetch(`${url}us/daily.json`);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }
}

export const requestCurrentState = async () => {
    try {
        const response = await fetch(`${url}states/current.json`);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }
}


export const requestCurrentUs = async () => {
    try {
        const response = await fetch(`${url}us/current.json`);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }
}