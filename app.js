const sidebar = document.querySelector('.sidebar')
const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')

toggleBtn.addEventListener('click', () => {
  toggle()
})

const toggle = () => {
  if(!sidebar.classList.contains('show-sidebar'))
  {
    sidebar.classList.add('show-sidebar')
  }
  else{
    sidebar.classList.remove('show-sidebar')
  }
}

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar')
})































