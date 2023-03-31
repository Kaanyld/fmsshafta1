import axios from "axios" // axios kütüphanesi içe aktarıldı
const getData = async (id) => {     //async fonksiyon tanımlandı

    const {data:users} = await axios (`https://jsonplaceholder.typicode.com/users/${id}`) //Kullanıcı verilerini almak için istek gönderildi
    const {data:posts} = await axios (`https://jsonplaceholder.typicode.com/posts?userId=${id}`) // Gönderinin verilerini almak için istek gönderildi
    
    
console.log("User:",users)
console.log("Post:",posts)    
//Kullancı ve gönderileri konsola yazdırıldı.
}
export default getData;