import _ from 'lodash';

export function getFirstValue() {
    var stArr = [];

    var st; // string representation of our game
    var difficulty;
    var gameObj;
    let id;

    id = 15;
    difficulty = "medium";
    st = ";;;;2;;;7;;;;;;3;4;;;;3;5;8;;;;;;;5;;4;8;;;;;;;;;1;;;;8;9;;;2;;;;;;6;2;4;;;;;7;;;;9;;;;5;2;;;;;;;6;7;1;;;";
    gameObj = { id: id, str: st, difficulty: difficulty };
    stArr.push(gameObj);
    /* ---------- -------- */
    
    id = 1; //
    difficulty = "medium";
    st ="6;3;;;;;;;;7;;4;;;5;;;;;1;5;;4;;;;6;5;;7;;;8;;;;;8;;;2;;;1;;;;;5;;;3;;7;4;;;;6;;1;7;;;;;9;;;2;;5;;;;;;;;4;3;";
    gameObj = { id: id, str: st, difficulty: difficulty };
    stArr.push(gameObj);
    /* ---------- -------- */

    
    // medium
    id = 3; //  
    st =";8;3;;;2;;1;;;;;;3;;;;4;;2;7;;;;;;8;;;5;;7;;;3;;;;;5;8;6;;;;;6;;;4;;1;;;9;;;;;;5;7;;3;;;;1;;;;;;7;;6;;;4;9;;";
    difficulty = "medium";
    gameObj = { id: id, str: st, difficulty: difficulty };
    stArr.push(gameObj);

    // hard
    id = 4; //  
    st =";;6;;;5;;;;1;9;;;;;;;;;;7;;1;2;;4;;3;7;;;9;1;;5;;8;;;;;;;;1;;1;;7;5;;;6;3;;4;;1;7;;6;;;;;;;;;;1;9;;;;5;;;8;;;";
    difficulty = "hard";
    gameObj = { id: id, str: st, difficulty: difficulty };
    stArr.push(gameObj);

    id = 6;  
    st ="9;8;1;;;6;4;5;;;;;4;;;1;;7;;;;;;;;;;;;;;2;;;4;;1;;9;;;;2;;3;;3;;;1;;;;;;;;;;;7;;;6;;3;;;5;;;;;1;8;9;;;5;2;6;";
    difficulty = "hard";
    gameObj = { id: id, str: st, difficulty: difficulty };
    stArr.push(gameObj);

    // easy games

    id = 2;
    st =";;;;2;3;;;;;5;6;;;4;;1;2;;3;7;;;;;;5;;;2;;;;;6;;1;8;;;;;;9;7;;9;;;;;2;;;4;;;;;;8;3;;7;2;;3;;;6;5;;;;;6;9;;;;;";
    difficulty = "easy";
    gameObj = { id: id, str: st, difficulty: difficulty };
    stArr.push(gameObj);

    id = 7;  
    st =";9;6;;4;;;3;;;5;7;8;2;;;;;1;;;9;;;5;;;;;9;;1;;;;8;5;;;;;;;;2;4;;;;9;;6;;;;;4;;;3;;;1;;;;;7;9;2;6;;;2;;;5;;9;8;;";
    difficulty = "medium";
    gameObj = { id: id, str: st, difficulty: difficulty };
    stArr.push(gameObj);

    id = 5; 
    st ="4;;;;9;;;7;;;;;2;;6;9;;;;;;;;7;;;2;3;8;;9;;;;;1;;2;4;;;;6;3;;9;;;;;3;;5;4;8;;;4;;;;;;;;1;6;;8;;;;;9;;;7;;;;5;";
    difficulty = "easy";
    gameObj = { id: id, str: st, difficulty: difficulty };
    stArr.push(gameObj);

    id = 8;  
    st =";;7;;;;9;;8;;3;;1;7;;;;4;;;;;;6;;;;6;9;8;7;4;;3;;;;;3;;1;;4;;;;;1;;3;9;7;6;2;;;;4;;;;;;9;;;;5;1;;4;;4;;5;;;;1;;;";
    difficulty = "medium";
    gameObj = { id: id, str: st, difficulty: difficulty };
    stArr.push(gameObj);

    id = 9;  
    st =";;;;;9;;;6;;;;;;3;8;5;1;;6;2;;1;5;;;;;;7;;;;;6;;;2;1;9;7;6;3;8;;;3;;;;;1;;;;;;4;5;;9;7;;2;5;8;6;;;;;;4;;;3;;;;;;"; 
    difficulty = "easy";
    gameObj = { id: id, str: st, difficulty: difficulty };
    stArr.push(gameObj);

    id = 10;  
    st ="2;9;;;7;4;;;;;1;;;;;4;;;6;7;;9;;5;;;;;8;;2;;6;;;;;6;;8;4;7;;2;;;;;5;;1;;8;;;;;7;;8;;9;2;;;6;;;;;1;;;;;4;1;;;5;8;"; 
    difficulty = "easy";
    gameObj = { id: id, str: st, difficulty: difficulty };
    stArr.push(gameObj);

    return _.sample(stArr);
}

export function loadGameByDifficulty(desiredDifficulty) {
    var easy = [];
    var medium = [];
    var hard = [];

    var st; // string representation of our game
    var difficulty;
    var gameObj;
    let id;

    id = 15;
    difficulty = "medium";
    st = ";;;;2;;;7;;;;;;3;4;;;;3;5;8;;;;;;;5;;4;8;;;;;;;;;1;;;;8;9;;;2;;;;;;6;2;4;;;;;7;;;;9;;;;5;2;;;;;;;6;7;1;;;";
    gameObj = { id: id, str: st, difficulty: difficulty };
    medium.push(gameObj);
    /* ---------- -------- */
    
    id = 1; //
    difficulty = "medium";
    st ="6;3;;;;;;;;7;;4;;;5;;;;;1;5;;4;;;;6;5;;7;;;8;;;;;8;;;2;;;1;;;;;5;;;3;;7;4;;;;6;;1;7;;;;;9;;;2;;5;;;;;;;;4;3;";
    gameObj = { id: id, str: st, difficulty: difficulty };
    medium.push(gameObj);
    /* ---------- -------- */

    
    // medium
    id = 3; //  
    st =";8;3;;;2;;1;;;;;;3;;;;4;;2;7;;;;;;8;;;5;;7;;;3;;;;;5;8;6;;;;;6;;;4;;1;;;9;;;;;;5;7;;3;;;;1;;;;;;7;;6;;;4;9;;";
    difficulty = "medium";
    gameObj = { id: id, str: st, difficulty: difficulty };
    medium.push(gameObj);

    // hard
    id = 4; //  
    st =";;6;;;5;;;;1;9;;;;;;;;;;7;;1;2;;4;;3;7;;;9;1;;5;;8;;;;;;;;1;;1;;7;5;;;6;3;;4;;1;7;;6;;;;;;;;;;1;9;;;;5;;;8;;;";
    difficulty = "hard";
    gameObj = { id: id, str: st, difficulty: difficulty };
    hard.push(gameObj);

    id = 6;  
    st ="9;8;1;;;6;4;5;;;;;4;;;1;;7;;;;;;;;;;;;;;2;;;4;;1;;9;;;;2;;3;;3;;;1;;;;;;;;;;;7;;;6;;3;;;5;;;;;1;8;9;;;5;2;6;";
    difficulty = "hard";
    gameObj = { id: id, str: st, difficulty: difficulty };
    hard.push(gameObj);

    // easy games

    id = 2;
    st =";;;;2;3;;;;;5;6;;;4;;1;2;;3;7;;;;;;5;;;2;;;;;6;;1;8;;;;;;9;7;;9;;;;;2;;;4;;;;;;8;3;;7;2;;3;;;6;5;;;;;6;9;;;;;";
    difficulty = "easy";
    gameObj = { id: id, str: st, difficulty: difficulty };
    easy.push(gameObj);

    id = 7;  
    st =";9;6;;4;;;3;;;5;7;8;2;;;;;1;;;9;;;5;;;;;9;;1;;;;8;5;;;;;;;;2;4;;;;9;;6;;;;;4;;;3;;;1;;;;;7;9;2;6;;;2;;;5;;9;8;;";
    difficulty = "medium";
    gameObj = { id: id, str: st, difficulty: difficulty };
    medium.push(gameObj);

    id = 5; 
    st ="4;;;;9;;;7;;;;;2;;6;9;;;;;;;;7;;;2;3;8;;9;;;;;1;;2;4;;;;6;3;;9;;;;;3;;5;4;8;;;4;;;;;;;;1;6;;8;;;;;9;;;7;;;;5;";
    difficulty = "easy";
    gameObj = { id: id, str: st, difficulty: difficulty };
    easy.push(gameObj);

    id = 8;  
    st =";;7;;;;9;;8;;3;;1;7;;;;4;;;;;;6;;;;6;9;8;7;4;;3;;;;;3;;1;;4;;;;;1;;3;9;7;6;2;;;;4;;;;;;9;;;;5;1;;4;;4;;5;;;;1;;;";
    difficulty = "medium";
    gameObj = { id: id, str: st, difficulty: difficulty };
    medium.push(gameObj);

    id = 9;  
    st =";;;;;9;;;6;;;;;;3;8;5;1;;6;2;;1;5;;;;;;7;;;;;6;;;2;1;9;7;6;3;8;;;3;;;;;1;;;;;;4;5;;9;7;;2;5;8;6;;;;;;4;;;3;;;;;;"; 
    difficulty = "easy";
    gameObj = { id: id, str: st, difficulty: difficulty };
    easy.push(gameObj);

    id = 10;  
    st ="2;9;;;7;4;;;;;1;;;;;4;;;6;7;;9;;5;;;;;8;;2;;6;;;;;6;;8;4;7;;2;;;;;5;;1;;8;;;;;7;;8;;9;2;;;6;;;;;1;;;;;4;1;;;5;8;"; 
    difficulty = "easy";
    gameObj = { id: id, str: st, difficulty: difficulty };
    easy.push(gameObj);

    console.log(desiredDifficulty)

    switch(desiredDifficulty) {
        case 'easy':
            return _.sample(easy);

        case 'medium': 
            return _.sample(medium);

        case 'hard': 
            return _.sample(hard);
        
        default: 
            return _.sample(easy);
    }
}
