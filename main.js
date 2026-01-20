document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle');
    const currentLangSpan = document.getElementById('current-lang');
    
    let currentLang = localStorage.getItem('lang') || 'en';
    let translations = {};

    async function loadTranslations(lang) {
        try {
            const response = await fetch(`locales/${lang}.json`);
            if (!response.ok) throw new Error("Translation file not found");
            
            translations = await response.json();
            updateContent();
            updateLangButton();
        } catch (error) {
            console.error('Error loading translations:', error);
            alert("System Warning: Localization module offline. (Run via Live Server)");
        }
    }
    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                            if (translations[key].includes('<')) {
                                element.innerHTML = translations[key];
                            } else {
                                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                                    element.placeholder = translations[key];
                                } else {
                                    element.textContent = translations[key];
                                }
                            }
                        }
                    });
                    
                    if (translations['page_title']) {
                        document.title = translations['page_title'];
                    }
                }
                
                function updateLangButton() {
                    currentLangSpan.textContent = currentLang === 'en' ? 'EN' : 'TH';
                }
                
                langToggleBtn.addEventListener('click', () => {
                    currentLang = currentLang === 'en' ? 'th' : 'en';
                    localStorage.setItem('lang', currentLang);
                    loadTranslations(currentLang);
                });
                
                loadTranslations(currentLang);
        }
);

