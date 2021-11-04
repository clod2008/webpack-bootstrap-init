import '../css/navBar.css'
import { navBarLinks } from './navBarLinks';

const {home, about, service, contact} = navBarLinks


export const navBar = (siteBrand) =>{
    const navBarContainer = document.createElement('nav');
    navBarContainer.classList.add('navbar','navbar-expand-lg','navbar-dark','ftco_navbar', 'bg-dark', 'ftco-navbar-light')
    navBarContainer.innerHTML = `
        <div class="container">
        <a class="navbar-brand" href="index.html"><img src="${siteBrand}" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
        </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active"><a href="${home.url}" class="nav-link">${home.linkText}</a></li>
            <li class="nav-item"><a href="${about.url}" class="nav-link">${about.linkText}</a></li>
            <li class="nav-item"><a href="${service.url}" class="nav-link">${service.linkText}</a></li>
            <li class="nav-item"><a href="${contact.url}" class="nav-link">${contact.linkText}</a></li>
            <li class="nav-item cta"><a href="contact.html" class="nav-link" data-toggle="modal" data-target="#modalRequest"><span>Make an Appointment</span></a></li>
        </ul>
        </div>
    </div>
    `;
    document.body.append( navBarContainer )
}