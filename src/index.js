console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
    loadImages();
    loadBreeds();
    clickBreed();
    searchDog();
})


    function loadImages() {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        fetch(imgUrl)
        .then(resp => resp.json())
        .then(dogPics => dogPics.message.forEach(dog => renderDog(dog))
        )
    }

    function loadBreeds() {
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
        .then(resp => resp.json())
        .then(breedList => { breeds = Object.keys(breedList.message); 
            renderBreed(breeds);
        })
    }    

    function renderDog(dogObj) {
        let dogImage = document.getElementById('dog-image-container')
        const dogImgTag = document.createElement('img')
        dogImgTag.src = dogObj
        dogImage.appendChild(dogImgTag)
    }

    function renderBreed(breedList){
        breedList.forEach((breedObj) => {
            const dogUl = document.getElementById('dog-breeds')
            const dogLi = document.createElement('li')
            dogLi.dataset.name = breedObj
            dogLi.innerText = breedObj
            dogUl.appendChild(dogLi); 
            // dogLi.addEventListener("click", function(e) {
            //     e.target.style.color = "red" 
            // })
        })
    }

    function clickBreed() {
        const dogLis = document.getElementsByTagName('li')
        document.addEventListener("click", function(e) {
            Array.from(dogLis).forEach((dog) => {
                if (e.target === dog) {
                    if (e.target.style.color != "red"){
                        e.target.style.color = "red"
                    }else {
                        e.target.style.color = "black"
                    }
                }            
            })
        })
    }

function searchDog() {
    const dropdown = document.getElementById("breed-dropdown")
    dropdown.addEventListener('change', e => {
        if (e.target.value == "a" ) {
            getResult("a")
        }
        else if (e.target.value == "b" ) {
            getResult("b")
        }
        else if (e.target.value == "c" ) {
            getResult("c")
        }
        else if (e.target.value == "d" ) {
            getResult("d")
        }
    })
}



function getResult(letter) {
    //let array = []
    document.querySelectorAll('li').forEach(breed => {
        if (breed.textContent[0] === letter) {
            // array.push(breed);
            breed.style.display = 'block'
//            array.empty
        } else {
            breed.style.display = 'none'
        }
    })
    // array.forEach(dogResult => {
    //     dogResult
    //     console.log(dogResult)
    //     console.log(array.length)
    // })
}

// document.querySelectorAll('li').forEach(breed => {if(breed.innerText[0] ==="a"){breed.style.display = 'block'}})
// document.querySelectorAll('li').forEach(breed => {if(breed.innerText[0] !=="a"){breed.style.display = 'none'}})
            
// dropDown.onchange = function() {
//     console.log(dropDown.value)
// }


