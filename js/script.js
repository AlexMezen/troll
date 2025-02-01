document.addEventListener('DOMContentLoaded', () => {
  const languageBtn = document.querySelector('.language-btn');
  const languageSwitcher = document.querySelector('.language-switcher');

  if (languageBtn && languageSwitcher) {
      languageBtn.addEventListener('click', () => {
          languageSwitcher.classList.toggle('active');
      });
  }

  const shareButton = document.getElementById('share');
  const notification = document.getElementById('notification');
  
  if (shareButton && notification) {
      shareButton.addEventListener('click', function() {
          navigator.clipboard.writeText(window.location.href)
              .then(function() {
                  notification.classList.add('show');
                  
                  setTimeout(function() {
                      notification.classList.remove('show');
                  }, 3000);
              })
              .catch(function(error) {
                  console.error('Ошибка при копировании:', error);
              });
      });
  }
});
