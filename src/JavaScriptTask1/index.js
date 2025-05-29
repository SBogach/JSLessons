//let answer = fetch('https://jsonplaceholder.typicode.com/posts')
//                  .then(response => response.json())
//                   .then(json => console.log(json));
//console.log(answer);

let answer = "[ { \"userId\": 1, \"id\": 1, \"title\": \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\", \"body\": \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},  { \"userId\": 1, \"id\": 2, \"title\": \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\", \"body\": \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"}, { \"userId\": 1, \"id\": 3, \"title\": \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\", \"body\": \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"}]";
console.log(answer);
let parsedAnswer = JSON.parse(answer);
console.log(parsedAnswer);

let main = document.getElementById("mainElement");
for (let i = 0; i <= 2; i++) {
    let div = document.createElement("div");
    div.className="topic";
    div.innerHTML = `<img class="topicImage" src="https://placehold.co/300x200"></img>`;
    div.innerHTML += `<h4 class="topicTitle"><a class="topicLink" href=./topic.html?topicId=${parsedAnswer[i].id}>${parsedAnswer[i].title}</a></h4>`;
    div.innerHTML += `<p class="topicText">${parsedAnswer[i].body}</p>`;
    main.appendChild(div);
}