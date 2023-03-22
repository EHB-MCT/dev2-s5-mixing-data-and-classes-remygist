"use strict";
import Joke from './jokeAPI.js';

const app = {
    items: [],
    init() {
        this.getData();

    },
    getData() {
        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10')
            .then(function (data) {
                return data.json()
            })
            .then(function (jokeJson) {
                console.log(jokeJson);

                jokeJson.jokes.forEach(function (jokeJson) {
                    const joke = new Joke(jokeJson.category, jokeJson.flags, jokeJson.type, jokeJson.safe);
                    let jokes = [];
                    app.items.push(joke);
                })

                console.log(app.items);


                /*const firstField = document.getElementsByClassName('item-field')[0];
                const secondField = document.getElementsByClassName('item-field')[1];

                if (jokeJson.type == "twopart") {
                    firstField.innerHTML = jokeJson.setup;
                    secondField.innerHTML = jokeJson.delivery;
                } else {
                    firstField.innerHTML = jokeJson.joke;
                    secondField.innerHTML = "";
                }*/
            })

    },
    onSearch() {
    },
    render(message) {
    }

}
app.init()
