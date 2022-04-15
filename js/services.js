// reusable
const init = (labels, panels) => {
  labels[0].classList.add('active')
  panels[0].classList.add('active')
}

const removeActiveClasses = DOMelements => 
DOMelements.forEach(DOMel => DOMel.classList.remove('active'))

const addActiveClass = DOMel => 
DOMel.classList.add('active')

const activateTab = (activeTab, labels, panels) => {
  addActiveClass(labels[activeTab])
  addActiveClass(panels[activeTab])
}
//

const tabLabels = [...document.querySelectorAll('.services__tab')]
const tabPanels = [...document.querySelectorAll('.services__panel')]

tabLabels.forEach((label, index) => label.addEventListener('click', () => {
  removeActiveClasses(tabLabels)
  removeActiveClasses(tabPanels)
  activateTab(index, tabLabels, tabPanels)
}))

init(tabLabels, tabPanels)

//

const tabContentLabels = [...document.querySelectorAll('.services__content-tab')]
const tabContentPanels = [...document.querySelectorAll('.services__content-panel')]

tabContentLabels.forEach((label, index) => label.addEventListener('click', () => {
  removeActiveClasses(tabContentLabels)
  removeActiveClasses(tabContentPanels)
  activateTab(index, tabContentLabels, tabContentPanels)
}))

init(tabContentLabels, tabContentPanels)



const cursor = document.querySelector('.cursor');
	document.addEventListener('mousemove', e => {
		cursor.setAttribute("style", " top: "+(e.pageY -10)+"px; left: "+(e.pageX -10)+"px; ")
	});

	const cursor2 = document.querySelector('.cursor2');
	document.addEventListener('mousemove', e => {
		cursor2.setAttribute("style", " top: "+(e.pageY -10)+"px; left: "+(e.pageX -10)+"px; ")
	});

  
// var swiper = new Swiper(".services__swiper-tabs", {
//   spaceBetween: 10,
//   watchSlidesProgress: true
// })

// var swiper2 = new Swiper(".services__swiper-panels", {
//   onlyExternal: true,
//   effect: "fade",
//   fadeEffect: {
//     crossFade: true
//   },
//   thumbs: {
//     swiper: swiper
//   }
// })