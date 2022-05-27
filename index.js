let db = [
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fcsb4lDsVONXVUHZmXYP8VZGfK-LTxLJqA&usqp=CAU",
        description: "Mobil di jual dengan kilometer 20.000",
        price: "Rp.1.100.000.000"
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRal1dPioEiWU8doRD4Q84DtrcCtTP52EUKFg&usqp=CAU",
        description: "Mobil di jual dengan kilometer 30.000",
        price: "Rp.400.000.000"
    },
    {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYzDboMxTT295NonSz3TXIXwg-c9Xrj98_A&usqp=CAU",
        description: "Mobil di jual dengan kilometer 25.000",
        price: "Rp.700.000.000"
    },
    {
        id: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLckhqRFbLC7KPoqeLbiKt_a1a7bZrNYcdXg&usqp=CAU",
        description: "Mobil di jual dengan kilometer 325.000",
        price: "Rp.240.000.000"
    },
    {
        id: 5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_1d9kUp3SoTAkFJeBxNucG847bgMKAfzzA&usqp=CAU",
        description: "Mobil di jual dengan kilometer 435.000",
        price: "Rp.120.000.000"
    },
    {
        id: 6,
        img: "https://auto1-homepage.prod.mp.auto1.cloud/static/optimized/blue-car-hp-left-bmw.png",
        description: "Mobil di jual dengan kilometer 25.000",
        price: "Rp.1.000.000.000"
    },
    {
        id: 7,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyEmKD6zwnZB4XywtY6_38kHILu40H9-n2A&usqp=CAU",
        description: "Mobil di jual dengan kilometer 5.000",
        price: "Rp.1.120.000.000"
    }
]

const users = [
    {
        username: "izon",
        email: "izon@mail.com",
        password: "hasingPass"
    }
]

const routes = {
    home: ``,
    login: ``,
    register: ``,
}

const navBar = `<div id="nav-bar" class="container">
<header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <h1 onClick="homePage()" class="click d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        OLX
    </h1>
    <div class="col-md-3 text-end">
        <button type="button" onClick="loginPage()" class="btn btn-outline-primary me-2">Login</button>
    </div>
</header>
</div>`

const navBarLogout = `<div id="nav-bar" class="container">
<header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <h1 onClick="homePage()" class="click d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        OLX
    </h1>
    <div class="col-md-3 text-end">
        <button type="button" onClick="logOut()" class="btn btn-outline-primary me-2">Logout</button>
    </div>
</header>
</div>`

//  Home

const fetchCar = () => {
    routes.home = ` <div id="cards" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">`

    db.forEach(e => {
        routes.home += ` <div class="col">
        <div class="card shadow-sm click">
            <img onClick="image(${e.id})" class="bd-placeholder-img card-img-top" width="100%" height="225" src="${e.img}" alt="image">
            <div class="card-body overflow">
                <p class="card-text">${e.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button onClick="buy(${e.id})" type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                    </div>
                    <small class="text-muted">${e.price}</small>
                </div>
            </div>
        </div>
    </div>`
    })
    routes.home += `</div>`
}


//  Login 
routes.login = `<div class="vh-90" style="background-color: #ffffffc0;">
<div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style="border-radius: 1rem;">
                <div class="card-body p-5 text-center">

                    <h3 class="mb-5">Sign in</h3>

                    <form id="form-login" onsubmit="login()">
                        <div class="form-outline mb-4">
                            <label class="form-label" for="typeEmailX-2">Email</label>
                            <input type="email" id="email" class="form-control form-control-lg" />
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="typePasswordX-2">Password</label>
                            <input type="password" id="password" class="form-control form-control-lg" />
                        </div>

                        <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                    </form>

                    <hr class="my-4">
                    <p>Don't you have account ? <a class="click" onClick="registerPage()">Register</a></p>

                </div>
            </div>
        </div>
    </div>
</div>
</div>`

//  Register

routes.register = `<div class="vh-90" style="background-color: #ffffffc0;">
<div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style="border-radius: 1rem;">
                <div class="card-body p-5 text-center">

                    <h3 class="mb-5">Register</h3>

                    <form id="form-register" onsubmit="register()">
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example4c">Username</label>
                            <input id="username" type="text" class="form-control form-control-lg" />
                            <p>Minimum 4 Character</p>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="typeEmailX-2">Email</label>
                            <input id="email" type="email" class="form-control form-control-lg"  />
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="typePasswordX-2">Password</label>
                            <input id="password" type="password" class="form-control form-control-lg" placholder="minimum 8 character" />
                            <p>Minimum 8 Character</p>
                        </div>

                        <button class="btn btn-primary btn-lg btn-block" type="submit">Register</button>
                    </form>

                    <hr class="my-4">
                </div>
            </div>
        </div>
    </div>
</div>
</div>`




const header = document.querySelector("#header")
const main = document.querySelector("#main")
const popUpVar = document.querySelector("#popup")
let loginFlag = false

const popUpFunc = (message) => {
    popUpVar.innerHTML = `<div class="container position-fixed fixed-top">
<div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="alert alert-primary alert-dismissible fade show">
            <div>
                <div class="card-body p-5 text-center">
                    <h3>${message}</h3>
                </div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    </div>
</div>
</div>`
}

const homePage = () => {
    if(!loginFlag){
        header.innerHTML = navBar
        main.innerHTML = routes.home
    }else {
        header.innerHTML = navBarLogout
        fetchCar()
        main.innerHTML = routes.home
    }
}

const loginPage = () => {
    main.innerHTML = routes.login
}

const registerPage = () => {
    main.innerHTML = routes.register
}

const login = () => {
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    let login = false
    users.forEach(e => {
        if (e.email == email && e.password == password) {
            login = true
            loginFlag = true
        }
    })
    login ? homePage() : popUpFunc("Password or email are wrong")
}

const logOut = () => {
    loginFlag = false
    homePage()
}

const register = () => {
    const username = document.querySelector("#username").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    if (password.length < 8 || username.length < 4) {
        popUpFunc("check password and username length")
    } else {
        users.forEach(e => {
            if (e.email === email) {
                popUpFunc("Email already exits")
            } else {
                let payload = {
                    username: username,
                    email: email,
                    password: password
                }
                users.push(payload)
                homePage()
            }
        })
    }
}

const buy = (id) => {
    if (!loginFlag) {
        popUpFunc("Login before")
    }else {
        const test = db.filter(e => e.id !== id ? e : false)
        db = test
        homePage()
    }
}

const image = (id) => {
    db.forEach(e => {
        const img = `<img src="${e.img}" class="rounded mx-auto d-block size" alt="image">`
        e.id === id ? main.innerHTML = img : false 
    })
}

onsubmit = (e) => {
    e.preventDefault()
}
header.innerHTML = navBar
fetchCar()
main.innerHTML = routes.home