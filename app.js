console.log("hi!");

export default fetchData = () => { axios.get(url).then(result => console.log(result).catch(error => console.log(error))) }
