import axios from "axios";

async function getData(userId) {
  const { data: userData } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const { data: postData } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  console.log(userData, "\n posts:", postData);
}

export default getData;
