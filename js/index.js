"use strict";
import joke from './jokeAPI.js';

const app = {
    items: [],
    init() {
        this.getData();
        
    },
    getData() {
        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit').then(function(data){
            return data.json()
                .then(function (jokeJson) {
                    console.log(jokeJson);
                    const joke1 = new joke(jokeJson.category,jokeJson.flags,jokeJson.type,jokeJson.safe);
                    console.log(joke1);
                    const firstField = document.getElementsByClassName('item-field')[0];
                    const secondField = document.getElementsByClassName('item-field')[1];

                    if (jokeJson.type == "twopart") {
                        firstField.innerHTML = jokeJson.setup;
                        secondField.innerHTML = jokeJson.delivery;
                    } else {
                        firstField.innerHTML = jokeJson.joke;
                        secondField.innerHTML = "";
                    }
                })
        })
    },
    onSearch() {
    },
    render(message) {
    }

}
app.init()
console.log(joke);