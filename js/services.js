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

const tabDigitalLabels = [...document.querySelectorAll('.digital-tab')]
const tabDigitalPanels = [...document.querySelectorAll('.digital-panel')]

tabDigitalLabels.forEach((label, index) => label.addEventListener('click', () => {
  removeActiveClasses(tabDigitalLabels)
  removeActiveClasses(tabDigitalPanels)
  activateTab(index, tabDigitalLabels, tabDigitalPanels)
}))

init(tabDigitalLabels, tabDigitalPanels)

//

const tabInfraLabels = [...document.querySelectorAll('.infra-tab')]
const tabInfraPanels = [...document.querySelectorAll('.infra-panel')]

tabInfraLabels.forEach((label, index) => label.addEventListener('click', () => {
  removeActiveClasses(tabInfraLabels)
  removeActiveClasses(tabInfraPanels)
  activateTab(index, tabInfraLabels, tabInfraPanels)
}))

init(tabInfraLabels, tabInfraPanels)

