import axios from "axios";

const rpc = axios.create({
  baseURL: "http://localhost:7076"
});

/*
const res = await rpc.post('/', {action: 'block_count'})
console.log(res.data) // Output: {count: "5648377", unchecked: "2906"}
*/
export default rpc;
