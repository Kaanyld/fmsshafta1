import axios from "axios"
const getData = async (id) => { 

    const {data:users} = await axios (`https://jsonplaceholder.typicode.com/users/${id}`)
    const {data:posts} = await axios (`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    
    
console.log("User:",users)
console.log("Post:",posts)    

}
export default getData;