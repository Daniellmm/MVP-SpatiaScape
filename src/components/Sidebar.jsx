import React from 'react'
import { Link, NavLink, useNavigate  } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize, logout } = useStateContext();
  const navigate = useNavigate();

  const handleCloseSideBar = () =>{
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  const handleLogout = () => {
    logout();
    navigate('/');  
};

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
  return (
    <div className=' h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className=' absolute bg-light-gray w-full pb-3 flex justify-between shadow-sm items-center'>
          <Link to='/' onClick={handleCloseSideBar}
            className='items-center gap-3 ml-3 mt-4 flex  text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
            <SiShopware /> <span>SpatiaScape</span>
          </Link>
          <TooltipComponent content='Close' position='BottomCenter'>
            <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className='text-xl rounded-full p-2 hover:bg-light-gray mt-4 block md:'
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='ml-3 mt-24 pb-10'>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink 
                to={`/${link.name}`} 
                key={link.name}
                onClick={handleCloseSideBar}
                className={({isActive}) => 
                isActive ? activeLink : normalLink
                }>
                  {link.icon}
                  <span className=' capitalize'>{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}

        </div>

        <div className=' absolute bottom-1 h-20 w-full bg-light-gray flex items-center'>
          <button 
          onClick={handleLogout}
          className='p-3 mx-5 text-white rounded bg-red-500 justify-center w-full'
          >
            Logout
          </button>
        </div>
      </>)}
    </div>
  )
}

export default Sidebar