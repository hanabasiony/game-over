
// getmmorpg()
// getpermadeath()
// getsuperhero()
// getpixel()
// getsailing()
// getshooter()

const mmorpgButton = document.querySelector('#pills-mmorpg-tab')
const shooterButton = document.querySelector('#pills-shooter-tab')
const sailingButton = document.querySelector('#pills-sailing-tab')
const permadeathButton = document.querySelector('#pills-permadeath-tab')
const superheroButton = document.querySelector('#pills-superhero-tab')
const pixelButton = document.querySelector('#pills-pixel-tab')

const mainLayerCards = document.querySelector('.outer-cards-cont')

let checker = false;

let gameCard;

const rowHtml = document.querySelector('.cards-display')

const loadingPage = document.querySelector('.loading')

document.addEventListener('DOMContentLoaded', function () {
    let mmorpgArr = []
    async function getmmorpg() {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1a1d5c20d2msh3ffda7eb95c294ap1af233jsnd6c1a4ff0ef3',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const gamesApi = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg', options)
        mmorpgArr = await gamesApi.json()
        loadingPage.classList.add('d-none')
        console.log(mmorpgArr);
        checker = true
        displaymmorpg()

        function displaymmorpg() {
            let mmorpgHtml = ''
            for (let i = 0; i < mmorpgArr.length; i++) {
                mmorpgHtml += `
                <div class="col"> 
                    <div class="inner-col">
                     <div class="body">
                  <figure>
                  <img src="${mmorpgArr[i].thumbnail}" alt="">
                </figure>
                <figcaption>
                  <div class="titles-flex d-flex justify-content-between">
                    <h3>
                    ${mmorpgArr[i].title}
                    </h3>
                    <span>free</span>
                  </div>
                  <p>${mmorpgArr[i].short_description}</p>
                </figcaption>

              </div>
              <div class="fotter d-flex justify-content-between ">
                <span>${mmorpgArr[i].genre}</span>
                <span>${mmorpgArr[i].platform}</span>
              </div>
            </div>
          </div>
                `
                rowHtml.innerHTML = mmorpgHtml
            }
        }
        gameCard = document.querySelectorAll('.col')
        console.log(gameCard);
    }


    getmmorpg()



})

mmorpgButton.addEventListener('click', function (e) {
    loadingPage.classList.remove('d-none')
    let mmorpgArr = []
    async function getmmorpg() {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1a1d5c20d2msh3ffda7eb95c294ap1af233jsnd6c1a4ff0ef3',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const gamesApi = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg', options)
        mmorpgArr = await gamesApi.json()
        loadingPage.classList.add('d-none')
        console.log(mmorpgArr);
        checker = true
        displaymmorpg()

        function displaymmorpg() {
            let mmorpgHtml = ''
            for (let i = 0; i < mmorpgArr.length; i++) {
                mmorpgHtml += `
                <div class="col" titleget = ${mmorpgArr[i].title} ariaLabel="${mmorpgArr[i].title}" > 
                    <div class="inner-col">
                     <div class="body">
                  <figure>
                  <img src="${mmorpgArr[i].thumbnail}" alt="">
                </figure>
                <figcaption>
                  <div class="titles-flex d-flex justify-content-between">
                    <h3>
                    ${mmorpgArr[i].title}
                    </h3>
                    <span>free</span>
                  </div>
                  <p>${mmorpgArr[i].short_description}</p>
                </figcaption>

              </div>
              <div class="fotter d-flex justify-content-between ">
                <span>${mmorpgArr[i].genre}</span>
                <span>${mmorpgArr[i].platform}</span>
              </div>
            </div>
          </div>
                `
                rowHtml.innerHTML = mmorpgHtml



            }
            gameCard = document.querySelectorAll('.col')
        }

        // function getIndexOfClicked() {

        //     for (var i = 0; i < mmorpgArr.length; i++) {
        //         gameCard.addEventListener('click', function (e) {

        //             var clickedCard = e.target
        //             var srcOfClicked = e.target.getAttribute('titleget')


        //             // innerImage.style.backgroundImage = `url('${srcOfClicked}')`

        //             console.log(mmorpgArr.indexOf(clickedCard),srcOfClicked)

        //             // indexOfClickedImg = allImgs.indexOf(clickedImg)



        //         })
        //     }
        //     // let index = mmorpgID.indexOf(event.target.id)
        // }
        // getIndexOfClicked()

    }



    getmmorpg()



})

shooterButton.addEventListener('click', function () {
    loadingPage.classList.remove('d-none')
    let shooterArr = []
    async function getshooter() {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1a1d5c20d2msh3ffda7eb95c294ap1af233jsnd6c1a4ff0ef3',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };


        const gamesApi = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options)
        shooterArr = await gamesApi.json()
        loadingPage.classList.add('d-none')
        console.log(shooterArr);
        checker = true
        displayShooter()

        function displayShooter() {
            let shotterHtml = ''
            for (let i = 0; i < shooterArr.length; i++) {
                shotterHtml += `
                <div class="col"> 
                    <div class="inner-col">
                     <div class="body">
                  <figure>
                  <img src="${shooterArr[i].thumbnail}" alt="">
                </figure>
                <figcaption>
                  <div class="titles-flex d-flex justify-content-between">
                    <h3>
                    ${shooterArr[i].title}
                    </h3>
                    <span>free</span>
                  </div>
                  <p>${shooterArr[i].short_description}</p>
                </figcaption>

              </div>
              <div class="fotter d-flex justify-content-between ">
                <span>${shooterArr[i].genre}</span>
                <span>${shooterArr[i].platform}</span>
              </div>
            </div>
          </div>
                `
                rowHtml.innerHTML = shotterHtml
            }
        }
        gameCard = document.querySelectorAll('.col')
    }
    getshooter()
})

sailingButton.addEventListener('click', function () {
    loadingPage.classList.remove('d-none')
    let sailingArr = []
    async function getsailing() {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1a1d5c20d2msh3ffda7eb95c294ap1af233jsnd6c1a4ff0ef3',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };


        const gamesApi = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=sailing', options)
        sailingArr = await gamesApi.json()
        console.log(sailingArr);
        loadingPage.classList.add('d-none')
        checker = true
        displaySailing()

        function displaySailing() {
            let sailinghtml = ''
            for (let i = 0; i < sailingArr.length; i++) {
                sailinghtml += `
                <div class="col"> 
                    <div class="inner-col">
                     <div class="body">
                  <figure>
                  <img src="${sailingArr[i].thumbnail}" alt="">
                </figure>
                <figcaption>
                  <div class="titles-flex d-flex justify-content-between">
                    <h3>
                    ${sailingArr[i].title}
                    </h3>
                    <span>free</span>
                  </div>
                  <p>${sailingArr[i].short_description}</p>
                </figcaption>

              </div>
              <div class="fotter d-flex justify-content-between ">
                <span>${sailingArr[i].genre}</span>
                <span>${sailingArr[i].platform}</span>
              </div>
            </div>
          </div>
                `
                rowHtml.innerHTML = sailinghtml
            }
        }
        gameCard = document.querySelectorAll('.col')
    }
    getsailing()

})

permadeathButton.addEventListener('click', function () {
    loadingPage.classList.remove('d-none')
    let permadeathArr = []
    async function getpermadeath() {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1a1d5c20d2msh3ffda7eb95c294ap1af233jsnd6c1a4ff0ef3',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };


        const gamesApi = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=permadeath', options)
        const response = await gamesApi.json()
        loadingPage.classList.add('d-none')
        permadeathArr = response
        console.log(permadeathArr);
        checker = true
        displayPermadeath()
        function displayPermadeath() {
            let permadeathHtml = ''
            for (let i = 0; i < permadeathArr.length; i++) {
                permadeathHtml += `
                <div class="col"> 
                    <div class="inner-col">
                     <div class="body">
                  <figure>
                  <img src="${permadeathArr[i].thumbnail}" alt="">
                </figure>
                <figcaption>
                  <div class="titles-flex d-flex justify-content-between">
                    <h3>
                    ${permadeathArr[i].title}
                    </h3>
                    <span>free</span>
                  </div>
                  <p>${permadeathArr[i].short_description}</p>
                </figcaption>

              </div>
              <div class="fotter d-flex justify-content-between ">
                <span>${permadeathArr[i].genre}</span>
                <span>${permadeathArr[i].platform}</span>
              </div>
            </div>
          </div>
                `
                rowHtml.innerHTML = permadeathHtml
            }
        }
        gameCard = document.querySelectorAll('.col')

    }

    getpermadeath()
})

superheroButton.addEventListener('click', function () {
    loadingPage.classList.remove('d-none')
    let superherArr = []
    async function getsuperhero() {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1a1d5c20d2msh3ffda7eb95c294ap1af233jsnd6c1a4ff0ef3',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };


        const gamesApi = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero', options)
        superherArr = await gamesApi.json()
        loadingPage.classList.add('d-none')
        console.log(superherArr);
        checker = true
        displaySuperhero()

        function displaySuperhero() {
            let superheroHtml = ''
            for (let i = 0; i < superherArr.length; i++) {
                superheroHtml += `
                <div class="col"> 
                    <div class="inner-col">
                     <div class="body">
                  <figure>
                  <img src="${superherArr[i].thumbnail}" alt="">
                </figure>
                <figcaption>
                  <div class="titles-flex d-flex justify-content-between">
                    <h3>
                    ${superherArr[i].title}
                    </h3>
                    <span>free</span>
                  </div>
                  <p>${superherArr[i].short_description}</p>
                </figcaption>

              </div>
              <div class="fotter d-flex justify-content-between ">
                <span>${superherArr[i].genre}</span>
                <span>${superherArr[i].platform}</span>
              </div>
            </div>
          </div>
                `
                rowHtml.innerHTML = superheroHtml
            }
        }

    } gameCard = document.querySelectorAll('.col')

    getsuperhero()
})

pixelButton.addEventListener('click', function () {
    loadingPage.classList.remove('d-none')
    let pixelArr = []
    async function getpixel() {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1a1d5c20d2msh3ffda7eb95c294ap1af233jsnd6c1a4ff0ef3',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };


        const gamesApi = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=pixel', options)
        pixelArr = await gamesApi.json()
        loadingPage.classList.add('d-none')
        console.log(pixelArr);
        checker = true
        displayPixel()

        function displayPixel() {
            let pixelHtml = ''
            for (let i = 0; i < pixelArr.length; i++) {
                pixelHtml += `
                <div class="col"> 
                    <div class="inner-col">
                     <div class="body">
                  <figure>
                  <img src="${pixelArr[i].thumbnail}" alt="">
                </figure>
                <figcaption>
                  <div class="titles-flex d-flex justify-content-between">
                    <h3>
                    ${pixelArr[i].title}
                    </h3>
                    <span>free</span>
                  </div>
                  <p>${pixelArr[i].short_description}</p>
                </figcaption>

              </div>
              <div class="fotter d-flex justify-content-between ">
                <span>${pixelArr[i].genre}</span>
                <span>${pixelArr[i].platform}</span>
              </div>
            </div>
          </div>
                `
                rowHtml.innerHTML = pixelHtml
            }
        }
        gameCard = document.querySelectorAll('.col')
    }
    getpixel()
})

let idOfImg;

rowHtml.addEventListener('click', function (e) {
    if (e.target.tagName == 'IMG') {
        loadingPage.classList.remove('d-none')
        // console.log(e.target.currentSrc);
        let res = e.target.currentSrc
        let res2 = res.split('/')
        // console.log(res2);
        console.log(res2[4]);


        idOfImg = res2[4]
        getDetailes()
    }else{
        alert("press on the image to see details");
        
    }
    

})

function getDetailes() {
    const descLayer = document.querySelector('.desc-layer')
    const descCont = document.querySelector('.desc-layer .container')
    let gamesDetailsArr = []
    async function getDetailsApi() {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1a1d5c20d2msh3ffda7eb95c294ap1af233jsnd6c1a4ff0ef3',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const gamesDetails = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idOfImg}`, options)
        gamesDetailsArr = await gamesDetails.json()
        loadingPage.classList.add('d-none')
        descLayer.classList.remove('d-none')
        mainLayerCards.classList.add('d-none')

        displayLayer()
        console.log(gamesDetailsArr);

    }
    getDetailsApi()

    function displayLayer() {
        let layerHtml = `
             
      <div class="left me-2">
        <h4>
          details game
        </h4>
        <div class="img-div">
          <img src="${gamesDetailsArr.thumbnail}" alt="">
        </div>
      </div>
      <div class="right pt-5 ms-2">
        <h3>
          title:${gamesDetailsArr.title}
        </h3>
        <div class="line d-flex align-items-center gap-2 mb-2">
          <h6 class="mb-0">Category:</h6><span>${gamesDetailsArr.genre}</span>
        </div>
        <div class="line d-flex align-items-center gap-2 mb-2">
          <h6 class="mb-0">Platform:</h6><span>${gamesDetailsArr.platform}</span>
        </div>
        <div class="line d-flex align-items-center gap-2 mb-2">
          <h6 class="mb-0">Status:</h6><span>${gamesDetailsArr.status}</span>
        </div>
        <p>
        ${gamesDetailsArr.description}
        </p>
        <a class="btn btn-outline-warning text-white" href="${gamesDetailsArr.game_url}" target="_blank">Show game</a>
      </div>
   
    
            `
        descCont.innerHTML = layerHtml
    }
    let extBtn = document.querySelector('#btnClose')
    extBtn.addEventListener('click', function () {
        mainLayerCards.classList.remove('d-none')

        descLayer.classList.add('d-none')
        console.log("in exit");

    })


}


document.querySelector('.exit-botn').addEventListener('click',function(){
    descLayer.classList.add('d-none')
})
