
let vectors = [[7, 1, 1],[6, 0, 2], [5, 7, 0], [3, 1, 2], [2, 3 ,8], [0, 0, 0]]

function dotProduct() {
    for(let i = 0; i < vectors.length; i++){

        for(let j = i + 1; j < vectors.length; j++){

            let result = 0;

                for(let k = 0; k < vectors[i].length; k++){ 

                    result += vectors[i][k] * vectors[j][k]

                    }

    if(result === 0){

        console.log(`${vectors[i]} and ${vectors[j]} are orthogonal `)
        
    }
  }
}
}

dotProduct();