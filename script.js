$(document).ready(function() {
  var navbarCollapse = function() {
    console.log("Scroll position:", $(window).scrollTop()); // Check scroll position in console
    if ($(window).scrollTop() > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };


  /* Navbar */

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  });
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  });

// Close the dropdown when an option is clicked
$('.dropdown-item').click(function () {
  // This will collapse the navbar
  $('.navbar-collapse').collapse('hide');
  
});
$('.dropdown-item').click(function () {
  // This will collapse the navbar
  $('.navbar-collapse').collapse('hide');

  // Close the dropdown menu
  var dropdownMenu = $(this).closest('.dropdown-menu');
  dropdownMenu.removeClass('show');
});
});


document.querySelectorAll('.dropdown-content a').forEach(item => {
  item.addEventListener('click', function() {
      let dropdown = this.closest('.dropdown-content');
      dropdown.style.display = 'none';
      
      // Reexibir ao passar o mouse novamente
      setTimeout(() => {
          dropdown.style.display = '';
      }, 200);
  });
});


$(document).ready(function() {
  // Close the dropdown when an option is clicked
  $('.dropdown-item').click(function () {
      $('.navbar-collapse').collapse('hide');  // Hide the navbar
      $('.dropdown-menu').removeClass('show');  // Hide the dropdown menu
  });
});

  // Filtro de categorias
  const buttons = document.querySelectorAll("#portfolio-button-container button");
  const items = document.querySelectorAll(".portfolio-item");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-portfolio-section");

      // Remover 'active' de todos os botões e adicionar no botão clicado
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Mostrar ou ocultar itens com base na categoria
      items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
          item.classList.add("show");
        } else {
          item.classList.remove("show");
        }
      });
    });
  });


  $(document).ready(function(){
    // Filtra os itens de portfólio
    $("button[data-portfolio-section]").click(function(){
      var filter = $(this).data("portfolio-section");
      
      // Exibe todos os itens quando "Show all" é clicado
      if (filter === "all") {
        $(".portfolio-item").show();
      } else {
        $(".portfolio-item").hide();
        $("." + filter).show();
      }
  
      // Marca o botão como ativo
      $("button").removeClass("active");
      $(this).addClass("active");
    });
  });

  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = '';
    let lastSection = sections[sections.length - 1]; // Última seção
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
      
      // Detecta a seção visível com um pequeno buffer extra para a última seção
      if (window.scrollY + window.innerHeight >= sectionTop + sectionHeight / 3 && window.scrollY < sectionBottom) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });
