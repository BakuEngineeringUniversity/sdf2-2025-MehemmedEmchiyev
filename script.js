  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('.main');
    
    sidebar.classList.toggle('collapsed');
    main.classList.toggle('expanded');
  }
