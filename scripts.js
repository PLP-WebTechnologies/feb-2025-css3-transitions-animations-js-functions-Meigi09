
        // User Preferences Management with Local Storage
        class PreferenceManager {
            constructor() {
                this.colorPreview = document.getElementById('colorPreview');
                this.themeOptions = document.querySelectorAll('.theme-option');
                this.animatedMessage = document.getElementById('animatedMessage');
                
                this.initializeEventListeners();
                this.loadSavedPreferences();
            }

            initializeEventListeners() {
                this.themeOptions.forEach(option => {
                    option.addEventListener('click', () => this.setTheme(option.dataset.theme));
                });
            }

            setTheme(theme) {
                // Update color preview
                const selectedThemeOption = document.querySelector(`.theme-option[data-theme="${theme}"]`);
                if (selectedThemeOption) {
                    const themeColor = window.getComputedStyle(selectedThemeOption).backgroundColor;
                    this.colorPreview.style.backgroundColor = themeColor;

                    // Save to local storage
                    localStorage.setItem('userTheme', theme);

                    // Trigger animated message
                    this.showAnimatedMessage();
                }
            }

            loadSavedPreferences() {
                const savedTheme = localStorage.getItem('userTheme');
                if (savedTheme) {
                    this.setTheme(savedTheme);
                }
            }

            showAnimatedMessage() {
                this.animatedMessage.classList.add('show');
                
                // Remove the message after animation
                setTimeout(() => {
                    this.animatedMessage.classList.remove('show');
                }, 2000);
            }
        }

        // Initialize the Preference Manager when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            new PreferenceManager();
        });