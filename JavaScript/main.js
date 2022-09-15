/* global */
*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

img {
    max-width: 100%;
    width: 100%;
}

.container {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
}

.wrapper {
    max-width: 1440px; 
    width: 100%;
    margin: 0 auto; 
}

button {
    font-family: "Lato", serif;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--light-white);
    background-color: #FBC85E;
    padding: 1em 2em;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    box-shadow: var(--shadow);
    transition: var(--smooth);
}

button:hover {
    color: var(--green);
    background-color:var(--light-white);
    transition: var(--smooth);
}
p {
    line-height: 40px;
}

.pt {
    padding-top: 10%;
  }

.section__heading {
    text-align: center;
    padding: 0 15px;
  }

.section__tag {
    font-size: 1.75rem;
    font-family: "Lato", serif;
    text-transform: capitalize;
    color: var(--dark-orange);
  }

  .section__title {
    font-size: 3.125rem;
    font-family: "Lato", serif;
    text-transform: capitalize;
    color: var(--dark-green);
    margin-bottom: 18px;
  }

  .section__detail {
    font-size: 1.25rem;
    font-family: "Lato", serif;
    color: var(--black);
    max-width: 700px;
    margin: 0 auto;
  }

:root {
    --orange: #FBC85E;
    --green: #9EF490;
    --gray: #4B4F51;
    --light-white: #fbfefb;
    --pink: #FEE6E5;
    --light-pink: #FFF9f9;
    --black: #000000;
    --dark-green: #2a9d8f;
    --dark-orange: #fb8500;
    --smooth: all .3s ease-in;
    --shadow: 0 7px 29px 0 rgba(100, 100, 111, 0.2);
}

/* header */
#overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.4);
    z-index: 4;
    display: none;
  }
  
  #overlay.show {
    display: initial;
  }
  
header {
    background-color: var(--gray);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 15px 55px 15px;
    background-color: var(--gray);
}

/* logo */

.navbar__logo {
    display: flex;
    align-items: center;
}

.navbar__logo img {
   width: 63px;
}

.navbar__logo p {
    font-family: "Lato", serif;
    font-size: 1.125rem;
    text-transform: uppercase;
    color: var(--orange);
    margin-left: 14px;
}

/* menu */
.navbar__links {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    transform: translateX(-100%);
    background-color: var(--green);
    opacity: 0;
    z-index: 5;
    transform: var(--smooth);
}

.navbar__links.navbar__open {
    transform: translateX(0);
    opacity: 1;
    transition: var(--smooth);
  }

.navbar__link {
    font-size: 1.125rem;
    margin: 55px;
    list-style: none;
}

.navbar__link a {
    font-family: "Lato", serif;
    color: var(--black);
    text-decoration: none;
    text-transform: capitalize;
    transition: var(--smooth);
}

.navbar__link a:hover {
   color: var(--orange);
   transition: var(--smooth);  
}

.navbar__btn {
    font-size: 1.125rem;
    margin-left: 35px;
    border: 2px solid var(--pink);
}

/* icon */
.navbar__ham {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    cursor: pointer;
    transition: var(--smooth);
    z-index: 6;
  }
  
  .navbar__icon {
    width: 45px;
    height: 6px;
    background: var(--orange);
    border-radius: 5px;
    transition: var(--smooth);
    position: relative;
  }
  
  .navbar__icon:before,
  .navbar__icon:after {
    content: "";
    position: absolute;
    width: 45px;
    height: 6px;
    background: var(--orange);
    border-radius: 5px;
    transition: var(--smooth);
  }
  
  .navbar__icon:before {
    transform: translateY(-12px);
  }
  
  .navbar__icon:after {
    transform: translateY(12px);
  }
/* icon animation */
.open .navbar__icon {
    transform: translateX(-50px);
    background: transparent;
  }
  
  .open .navbar__icon:before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  
  .open .navbar__icon:after {
    transform: rotate(-45deg) translate(35px, 35px);
  }
 
  @media (min-width: 62em)  {
    .navbar__links {
        position: initial;
        transform: translateX(0);
        opacity: 1;
        background-color: var(--gray);
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .navbar__link {
        margin: 0 25px;
    }
    .navbar__btn {
        margin-left: 0; 
        border: none;
    }
    .navbar__ham {
        display: none;
    }
  }

  /* banner */
  #banner .container {
    background-image: linear-gradient(to bottom, var(--gray), var(--light-white));
  }

  .banner__desc {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 10px;
  }
 
  .banner__tag {
    font-size: 1.375rem;
    font-weight: bold;
    font-family: "Lato", serif;
    color: var(--dark-orange);
    text-transform: uppercase;
    padding: 5px 0;
  }

  .banner__title {
    font-size: 2.625rem;
    font-weight: bold;
    font-family: "Lato", serif;
    color: var(--dark-green);
    text-transform: uppercase;
    padding: 5px 0;
  }

  .banner__detail {
    font-size: 1.5rem;
    font-family: "Lato", serif;
    color: var(--black);
    text-transform: capitalize;
    margin-top: 25px;
  }

  .banner__btn {
    margin-top: 54px;
  }

  .banner__btn button {
    font-size: 1.5rem;
  }

  @media (min-width: 62em) {
    #banner .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .banner__img {
      order: 2;
    }
    .banner__desc {
      order: 1;
      text-align: initial;
      width: 60%;
      padding: 0 0 0 240px;
    }
    .banner__detail {
      max-width: 800px;
      width: 100%;
    }
  }

  /* what is */

  #whatis .container {
    position: relative;
  }
  
  .whatis__desc {
    text-align: center;
    padding: 0 15px;
  }
  
  .whatis__btn {
    margin-top: 56px;
  }
  
  .whatis__btn button {
    font-size: 1.25rem;
  }

  @media (min-width: 62em) {
    #whatis .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .whatis__desc {
      text-align: initial;
      padding: 0 240px 0 0;
      width: 45%;
    }
  }

  /* hibdigital */
  .hibdigital__cards {
    padding-top: 5%;
    position: relative;
  }

  .hibdigital__card {
    position: relative;
    max-width: 460px;
    width: 90%;
    height: 575px;
    margin: 0 auto 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: var(--shadow);
    border-radius: 10px;
    cursor: pointer;
    background: var(--light-white);
    padding: 0 15px;
    transition: var(--smooth);
  }

  .hibdigital__card:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: 10px;
    background: transparent;
    border-end-start-radius: 10px;
    border-end-end-radius: 10px;
    transition: var(--smooth);
  }

  .hibdigital__card:hover:before {
    background: var(--orange);
    transition: var(--smooth);
  }

  .hibdigital__card img {
    max-width: 270px;
  }

  .hibdigital__card h2 {
    padding-top: 55px;
    font-size: 2.25rem;
    font-family: "Lato", serif;
    color: var(--dark-green);
    text-transform: capitalize;
    text-align: center;
  }

  .hibdigital__card p {
    font-family: "Lato", serif;
    font-size: 1.125rem;
    color: var(--black);
    text-align: center;
    text-transform: capitalize;
    max-width: 380px;
    margin: 0 auto;
    padding-top: 13px;
  }

  @media (min-width: 62rem) {
    .hibdigital__cards {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
/* contact */
.contact__title h1 {
    font-family: "Lato", serif;
    font-size: 2.75rem;
    color: var(--dark-green);
    text-align: center;
    text-transform: capitalize;
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
  }

  .contact__form {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact__form input {
    font-family: "Lato", serif;
    font-size: 1.375rem;
    margin-top: 60px;
    max-width: 800px;
    width: 90%;
    height: 114px;
    padding: 15px 15px 15px 35px;
    border-radius: 200px;
    box-shadow: var(--shadow);
    border: none;
  }

  .contact__form input:focus {
    outline: none;
  }

  .contact__form button {
    font-size: 1.5rem;
    margin-top: 60px;
  }

  @media (min-width: 62rem) {
    .contact__title h1 {
      font-size: 3.375rem;
    }
    .contact__form {
      max-width: 800px;
      width: 100%;
      margin: 0 auto;
    }
    .contact__form input {
      width: 100%;
    }
    .contact__form button {
      position: absolute;
      top: 20%;
      right: 2%;
      transform: translate(-2%, -20%);
    }
  }

  /* Footer*/
.footer__top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
  }
  
  .footer__link {
    list-style: none;
    text-align: center;
    padding: 15px 0;
  }

  .footer__link:first-child {
    margin-top: 20%;
  }

  .footer__link a {
    font-family: "Lato", serif;
    font-size: 1.375rem;
    text-decoration: none;
    text-transform: capitalize;
    color: var(--black);
    transition: var(--smooth);
  }

  .footer__link a:hover {
    color: var(--orange);
    transition: var(--smooth);
  }

  .footer__socials {
    display: flex;
    align-items: center;
    margin-top: 10%;
  }

  .footer__socials svg {
    cursor: pointer;
    margin: 0 15px;
    color: var(--green);
    transition: var(--smooth);
  }

  .footer__socials svg:hover {
    color: var(--orange);
    transition: var(--smooth);
  }

  .footer__bottom p {
    font-family: "Lamo", serif;
    font-size: 1.125rem;
    width: 95%;
    margin: 5% auto;
    text-align: center;
    color: var(--gray);
  }

  @media (min-width: 62rem) {
    .footer__top {
      flex-direction: row;
      justify-content: space-between;
    }
    .footer__links {
      display: flex;
    }
    .footer__link {
      margin: 0 15px;
    }
    .footer__link:first-child {
      margin-top: 0;
    }
    .footer__socials {
      margin-top: 0;
    }
  }