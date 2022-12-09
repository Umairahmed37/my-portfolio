import React, { useEffect } from 'react'

const Navbar = () => {


  const removeMenu = (e) => {
    const navmenu = document.getElementById("nav-menu")
    navmenu.classList.remove('show-menu')
  }

  const showmenu = (e) => {
    const navmenu = document.getElementById("nav-menu")
    navmenu.classList.add('show-menu')
  }

  useEffect(() => {
    const navlink = document.querySelectorAll('.nav_link')

    const LinkRemoveMenu = () => {
      document.getElementById("nav-menu").classList.remove('show-menu')
    }

    navlink.forEach(n => {
      n.addEventListener('click', LinkRemoveMenu)
    })


  }, [])

   

  return (
    <>
      <header   className='header w-full fixed -bottom-1 left-0 z-z-fixed bg-white' id='mobile-nav'>

        <nav className='nav container max-w-[968] h-header-height flex justify-between items-center'>

          <a href="#" className='nav_logo text-title-color font-font-medium hover:text-first-color'> Alexa</a>

          <div className="nav_menu fixed -bottom-[100%] left-0 w-full bg-body-color" id="nav-menu">

            <ul className="nav_list grid ">

              <li className="nav_item">
                <a href="#Home" className="nav_link">
                  <i className="uil uil-estate nav_icon"></i> Home
                </a>
              </li>
              <li className="nav_item">
                <a href="#About" className="nav_link">
                  <i className="uil uil-user nav_icon"></i> About
                </a>
              </li>
              <li className="nav_item">
                <a href="#Skills" className="nav_link">
                  <i className="uil uil-file-alt nav_icon"></i> Skills
                </a>
              </li>
              <li className="nav_item">
                <a href="#Services" className="nav_link">
                  <i className="uil uil-briefcase-alt nav_icon"></i> Services
                </a>
              </li>
              <li className="nav_item">
                <a href="#Portfolio" className="nav_link">
                  <i className="uil uil-scenery nav_icon"></i> Portfolio
                </a>
              </li>
              <li className="nav_item">
                <a href="#Contact" className="nav_link">
                  <i className="uil uil-message nav_icon"></i> Contact me
                </a>
              </li>

            </ul>

            <i onClick={removeMenu} className="uil uil-times nav_close absolute right-[1.2rem] bottom-[.5rem] text-[1.5rem] cursor-pointer text-first-color hover:text-first-color-alt"></i>
          </div>

          <div className='nav_btns'>
            <div onClick={showmenu} className="nav_toggle text-[1.1rem] text-title-color font-font-medium cursor-pointer hover:text-first-color" id="nav-toggle">
              <i className='uil uil-apps'></i>
            </div>
          </div>

        </nav>
      </header>
    </>
  )
}

export default Navbar