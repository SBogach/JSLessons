const params = new URLSearchParams(window.location.search);
let topicId = params.get('topicId');

//( async () => {
//let responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts/' + topicId);
//if (responsePosts.ok) {
//  let json = await responsePosts.json();
//} else {
//  alert("Ошибка HTTP: " + responsePosts.status);
//}
//let parsedPosts = JSON.parse(json);
//let responseComments = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + topicId);
//if (responseComments.ok) {
//  let json = await responseComments.json();
//} else {
//  alert("Ошибка HTTP: " + responseComments.status);
//}
//let parsedComments = JSON.parse(json);
let parsedPosts = JSON.parse("[ { \"userId\": 1, \"id\": 1, \"title\": \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\", \"body\": \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"}]");
let parsedComments = JSON.parse("[ {\"id\":1,\"postId\":1,\"userId\":1,\"comment\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ipsum ac velit sollicitudin, id fringilla sapien dapibus. Nulla condimentum ullamcorper tellus vel tristique. Donec nec sagittis ante. Proin semper, nunc et bibendum eleifend, odio justo facilisis nunc, vel ullamcorper tortor sapien at eros. Etiam euismod felis vel elit lobortis laoreet. Maecenas ac lobortis diam. Proin vitae neque sit amet ante pretium consectetur. Nulla facilisi.\"}, {\"id\":2,\"postId\":1,\"userId\":2,\"comment\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ipsum ac velit sollicitudin, id fringilla sapien dapibus. Nulla condimentum ullamcorper tellus vel tristique. Donec nec sagittis ante. Proin semper, nunc et bibendum eleifend, odio justo facilisis nunc, vel ullamcorper tortor sapien at eros. Etiam euismod felis vel elit lobortis laoreet. Maecenas ac lobortis diam. Proin vitae neque sit amet ante pretium consectetur. Nulla facilisi.\"}, {\"id\":3,\"postId\":1,\"userId\":3,\"comment\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ipsum ac velit sollicitudin, id fringilla sapien dapibus. Nulla condimentum ullamcorper tellus vel tristique. Donec nec sagittis ante. Proin semper, nunc et bibendum eleifend, odio justo facilisis nunc, vel ullamcorper tortor sapien at eros. Etiam euismod felis vel elit lobortis laoreet. Maecenas ac lobortis diam. Proin vitae neque sit amet ante pretium consectetur. Nulla facilisi.\"} ]");
let parsedUsers = JSON.parse("[{\"id\":1,\"firstname\":\"John\",\"lastname\":\"Doe\",\"email\":\"johndoe@example.com\",\"birthDate\":\"1973-01-22\",\"login\":{\"uuid\":\"1a0eed01-9430-4d68-901f-c0d4c1c3bf22\",\"username\":\"johndoe\",\"password\":\"jsonplaceholder.org\",\"md5\":\"c1328472c5794a25723600f71c1b4586\",\"sha1\":\"35544a31cc19bd6520af116554873167117f4d94\",\"registered\":\"2023-01-10T10:03:20.022Z\"},\"address\":{\"street\":\"123 Main Street\",\"suite\":\"Apt. 4\",\"city\":\"Anytown\",\"zipcode\":\"12345-6789\",\"geo\":{\"lat\":\"42.1234\",\"lng\":\"-71.2345\"}},\"phone\":\"(555) 555-1234\",\"website\":\"www.johndoe.com\",\"company\":{\"name\":\"ABC Company\",\"catchPhrase\":\"Innovative solutions for all your needs\",\"bs\":\"Marketing\"}}]");

let main = document.getElementById("mainElement");
let topicDiv = document.createElement("div");
topicDiv.className="topic";
let commentsDiv = document.createElement("div");
commentsDiv.className="comments";

topicDiv.innerHTML = `<img class="topicImage" src="https://placehold.co/300x200"></img>`;
topicDiv.innerHTML += `<h4 class="topicTitle">${parsedPosts[0].title}</h4>`;
topicDiv.innerHTML += `<p class="topicText">${parsedPosts[0].body}</p>`;

commentsDiv.innerHTML = `<h2>Comments:</h2>`;
for (let i = 0; i < parsedComments.length; i++) {
    //( async () => {
    //let responseUsers = await fetch(`https://jsonplaceholder.typicode.com/users/${parsedComments[i].userId}`);
    //if (responseUsers.ok) {
    //  let json = await responseUsers.json();
    //} else {
    //  alert("Ошибка HTTP: " + responseUsers.status);
    //}
    //let parsedUsers = JSON.parse(json);
    //}
    commentsDiv.innerHTML += `<h5>User "${parsedUsers[0].firstname} ${parsedUsers[0].lastname}"</h5>`;
    commentsDiv.innerHTML += `<p class="commentText">${parsedComments[i].comment}</p>`;
}

main.appendChild(topicDiv);
main.appendChild(commentsDiv);
//})();

//{
//  "userId": 1,
//  "id": 1,
//  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//}