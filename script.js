document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.replace('light', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.replace('dark', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});
