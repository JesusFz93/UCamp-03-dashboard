
export const request = async (state) => {
    try {
        const response = await fetch(`https://api.covidtracking.com/v1/states/${state}/daily.json`);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }
}
