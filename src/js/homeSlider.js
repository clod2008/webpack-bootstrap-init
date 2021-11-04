import '../css/homeSlider.css'

const data = {
    slide01: {
        img: '../assets/img/bg_1.jpg',
        title: 'Título del slide 01',
    },
    slide02: {
        img: '../assets/img/bg_2.jpg',
        title: 'Título del slide 02',
    },
    slide03: {
        img: '../assets/img/bg_3.jpg',
        title: 'Título del slide 03',
    }
}

export const homeCarousel = () =>{
    const carousel = document.createElement('section');
    // carousel.classList.add('home-slider', 'owl-carousel')
    carousel.innerHTML=`
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">

    <div class="carousel-inner">
      <div class="carousel-item active"
      style="background-image: url(${data.slide01.img});"
        >
        
        <div class="carousel-caption d-none d-md-block ">
          <h5>${data.slide01.title}</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item"
        style="background-image: url(${data.slide02.img});"
        >
        <div class="carousel-caption d-none d-md-block">
          <h5>${data.slide02.title}</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>

    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
    
    `;
    document.body.append( carousel )
}