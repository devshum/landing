new Pageable(".scroll-page", 
            { pips: false,  
              onFinish() {
                
      const allTabs = document.querySelectorAll(`.header__item`)
      const currentStr = window.location.href.split('#')[1]
      const currentTab = document.querySelector(`.${currentStr}-tab`)

      allTabs.forEach(tab => {
        tab.classList.remove('active')

        tab.addEventListener('click', () => {
          tab.classList.add('active')
        })
      })

      if(currentTab) currentTab.classList.add('active');
}, })
