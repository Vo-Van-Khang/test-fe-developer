// Slider
const image_slider = document.querySelector('.image_slider');
const title_slider = document.querySelector('.title_slider');
const content_slider = document.querySelector('.content_slider');
const find_out_more_button = document.querySelector('.find_out_more_button');
const dots = document.querySelectorAll('.dot');

function load_slider(position){
    let slide = slides[position];

    image_slider.classList.remove("fade-in");
    title_slider.classList.remove("fade-in");
    content_slider.classList.remove("fade-in");
    find_out_more_button.classList.remove("fade-in");

    image_slider.classList.add('fade-out');
    title_slider.classList.add('fade-out');
    content_slider.classList.add('fade-out');
    find_out_more_button.classList.add('fade-out');

    setTimeout(()=>{
        image_slider.src = slide.image;
        image_slider.setAttribute('index_slide', slide.id);
        title_slider.innerHTML = slide.title;
        content_slider.innerHTML = slide.content;

    }, 500)

    setTimeout(()=>{
        image_slider.classList.remove("fade-out");
        title_slider.classList.remove("fade-out");
        content_slider.classList.remove("fade-out");
        find_out_more_button.classList.remove("fade-out");

        image_slider.classList.add("fade-in");
        title_slider.classList.add("fade-in");
        content_slider.classList.add("fade-in");
        find_out_more_button.classList.add("fade-in");

        dots.forEach(d => d.classList.remove("active"));
        dots[position].classList.add("active");
    }, 500)
}

const slides = [
    {
        id: 1,
        title: "GO-KARTS",
        content: "Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts.",
        image: "./images/slide1.jpg"
    },
    {
        id: 2,
        title: "JUMPARENA",
        content: "Aréna se spoustou atrakcí pro děti i dospělé všech věkových kategorií. Trampolíny, lezecká stěna, ninja dráha a další atrakce.",
        image: "./images/slide2.jpg"
    },
    {
        id: 3,
        title: "Virtuální realita",
        content: "Díky naší virtuální realitě vstoupíte do jiného světa a poznáte nové technologie. Vyberte si z naší nabídky her a zažijte VR na vlastní kůži.",
        image: "./images/slide3.jpg"
    },
    {
        id: 4,
        title: "MULTIBALL",
        content: "Interaktivní sportovní a herní konzole, která z pohybu a vzdělávání dělá opravdovou zábavu. Velké množství her zaujme všechny věkové kategorie.",
        image: "./images/slide4.jpg"
    },
    {
        id: 5,
        title: "Laserová střelnice",
        content: "Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice se třemi režimy střelby na čas otestuje nejen vaši přesnost, ale také rychlost a postřeh.",
        image: "./images/slide5.jpg"
    },
]

let autoRunSlider;

function startAutoSlider() {
    clearInterval(autoRunSlider);
    autoRunSlider = setInterval(() => {
        let index_slide = Number(image_slider.getAttribute('index_slide')) - 1;
        if (index_slide == slides.length - 1) {
            index_slide = 0;
        } else {
            index_slide++;
        }
        load_slider(index_slide);
    }, 3000);
}

startAutoSlider();

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        if (dot.classList.contains("active")) return;
        load_slider(index);
        startAutoSlider(); 
    });
});


const scrollToTopButton = document.querySelector('.scrollToTopButton');
scrollToTopButton.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      
})

const activities_items = document.querySelectorAll('.activities_item');
activities_items.forEach((item, index) => {
    item.addEventListener('mouseover',()=>{
        item.classList.remove('item');
        item.classList.add('item--active');
    })
    item.addEventListener('mouseout',()=>{
        if(index != 1) {
            item.classList.remove('item--active');
            item.classList.add('item');
        }
    })
})