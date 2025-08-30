 const toggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    toggleBtn.addEventListener('click', () => {
      html.classList.toggle('dark');
    });