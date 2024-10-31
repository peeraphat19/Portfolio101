$(document).ready(function() {
    $('.add-to-cart').on('click', function() {
        alert('Product added to cart!');
    });
});

const products = [
    {
      id: 1,
      name: "MOON NO.1",
      price: "$99",
      image: "/Programming/OnlineShop_bootstrap/pic/Moon.jpg",
      description: "The moon of EARTH-616 (The Prime Universe)"
    },
    {
      id: 2,
      name: "MOON NO.2",
      price: "$120",
      image: "/Programming/OnlineShop_bootstrap/pic/Moon.jpg",
      description: "The moon of EARTH-717 (What If ?)"
    },
    {
        id: 3,
        name: "MOON NO.3",
        price: "$120",
        image: "/Programming/OnlineShop_bootstrap/pic/Moon.jpg",
        description: "The moon of EARTH-78411 (Dinosaur World)"
      },
    
      {
        id: 4,
        name: "MOON NO.4",
        price: "$75",
        image: "/Programming/OnlineShop_bootstrap/pic/Moon.jpg",
        description: "The moon of EARTH-2149 (Zombiverse)"
      },
    
      {
        id: 5,
        name: "MOON NO.5",
        price: "$120",
        image: "/Programming/OnlineShop_bootstrap/pic/Half.jpg",
        description: "The moon of EARTH-928 (2099 A.D.)"
      },
      {
        id: 6,
        name: "HALF MOON NO.0",
        price: "$130",
        image: "/Programming/OnlineShop_bootstrap/pic/Half.jpg",
        description: "???"
      },
      
  ];
  
  // Function to display product details in modal
  function showQuickView(productId) {
    const product = products.find((p) => p.id === productId);
  
    if (product) {
      // Set the modal content
      document.getElementById("quickViewImage").src = product.image;
      document.getElementById("quickViewTitle").innerText = product.name;
      document.getElementById("quickViewPrice").innerText = product.price;
      document.getElementById("quickViewDescription").innerText =
        product.description;
  
      // Show the modal
      new bootstrap.Modal(document.getElementById("quickViewModal")).show();
    }
  }
  
  // Add event listeners to Quick View buttons
  document.querySelectorAll(".quick-view").forEach((button, index) => {
    button.addEventListener("click", () => showQuickView(index + 1));
  });
  