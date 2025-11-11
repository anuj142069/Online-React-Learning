import { Link } from "react-router-dom";

const SideBar = () => {

  return(
    <>
      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-900 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto">
            <Link to="" className="flex items-center ps-2.5 mb-5">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3 sm:h-7" alt="Flowbite Logo" /> */}
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white">Sidebar</span>
            </Link>
            <ul className="space-y-2 font-medium">
              <li onClick={() => console.log("Home clicked")}>
                <Link to="/">
                  <button className="flex items-center p-2 text-white rounded-lg w-full dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 group">
                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span className="ms-3">Home</span>
                  </button>
                </Link>
              </li>
              <li onClick={() => console.log("Create post clicked")} >
                <Link to="/create-post">
                  <button className="flex items-center p-2 text-white rounded-lg w-full dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 group">
                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                    </svg>
                    <span className="ms-3">Create Post</span>
                  </button>
                </Link>
              </li>
            </ul>
        </div>
      </aside>
    </>
  )
}

export default SideBar;

