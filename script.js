document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    document.body.classList.add(currentTheme);
    themeToggle.checked = currentTheme === 'dark';

    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'dark' : 'light';
        if (newTheme === "dark") {
            document.body.classList.replace('light', 'dark');
        } else if (newTheme === "light") {
            document.body.classList.replace('dark', 'light');
        }
        localStorage.setItem('theme', newTheme);
    });
});
