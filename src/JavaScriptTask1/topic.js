const params = new URLSearchParams(window.location.search);
let topicId = params.get('topicId');

//( async () => {
//let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + topicId);
//if (response.ok) {
//  let json = await response.json();
//} else {
//  alert("Ошибка HTTP: " + response.status);
//}
//let parsedAnswer = JSON.parse(json);
let parsedAnswer = JSON.parse("[ { \"userId\": 1, \"id\": 1, \"title\": \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\", \"body\": \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"}]");

let main = document.getElementById("mainElement");
let topicDiv = document.createElement("div");
topicDiv.className="topic";
topicDiv.innerHTML = `<img class="topicImage" src="https://placehold.co/300x200"></img>`;
topicDiv.innerHTML += `<h4 class="topicTitle">${parsedAnswer[0].title}</h4>`;
topicDiv.innerHTML += `<p class="topicText">${parsedAnswer[0].body}</p>`;
let commentsDiv = document.createElement("div");
commentsDiv.className="comments";
main.appendChild(div);
//})();

//{
//  "userId": 1,
//  "id": 1,
//  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//}