let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.net', '.gov', '.com'];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            let randomExt = extensions[Math.floor(Math.random()*extensions.length)];

            console.log(pronoun[i] + adj[j] + noun[k] + randomExt);
        }
    }
}

