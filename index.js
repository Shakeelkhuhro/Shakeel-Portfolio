// // Function to toggle the sidebar and update the header icons
// function toggleSidebar() {
//     const body = document.body;
//     const sidebarToggleButton = document.querySelector('#header .container .fa-bars');
//     const closeSidebarButton = document.querySelector('#header .container .fa-times');

//     if (body.classList.contains('sidebar-open')) {
//         body.classList.remove('sidebar-open');
//         sidebarToggleButton.style.display = 'block';
//         closeSidebarButton.style.display = 'none';
//     } else {
//         body.classList.add('sidebar-open');
//         sidebarToggleButton.style.display = 'none';
//         closeSidebarButton.style.display = 'block';
//     }
// }

// if (window.matchMedia('(max-width: 600px)').matches) {
//     // Get the sidebar toggle button element
//     const sidebarToggleButton = document.querySelector('#header .container .fa-bars');

//     // Add a click event listener to the sidebar toggle button
//     sidebarToggleButton.addEventListener('click', toggleSidebar);
// }
