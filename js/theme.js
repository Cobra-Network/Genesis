const applySavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add('cobra-classic');
    }
};

const changeTheme = (selectedTheme) => {
    document.body.classList.remove('cobra-classic', 'dracula');
    if (selectedTheme === 'dracula') {
        document.body.classList.add('dracula');
    } else {
        document.body.classList.add('cobra-classic');
    }
    localStorage.setItem('theme', selectedTheme);
};

const initializeThemeSelector = () => {
    const themeSelector = document.getElementById('theme-selector');
    if (themeSelector) {
        themeSelector.addEventListener('change', (e) => {
            changeTheme(e.target.value);
        });
    }
};

const checkAndApplyTheme = () => {
    applySavedTheme();
};

const startThemeCheck = () => {
    setInterval(checkAndApplyTheme, 3000);
};

const initializeTheme = () => {
    applySavedTheme();
    initializeThemeSelector();
    startThemeCheck();
};

initializeTheme();
