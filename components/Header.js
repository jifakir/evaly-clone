import Cart from './Cart/Cart';
import Message from './Popover/Message';
import Notification from './Popover/Notification';
import PopLogin from './Popover/PopLogin';


const Header = ({clicked}) => {

    return(
        <header className="w-full z-10 bg-white">
            <div className="container mx-auto py-3 px-2 flex flex-row justify-between items-center relative" >
                <div className="logo w-1/12">
                    <button onClick={clicked} className="menu-icon md:hidden mr-6 text-xl focus:outline-none">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                    </button>
                    <img className="w-full hidden md:block h-full" src="https://evaly.com.bd/static/images/logo_b&w.svg" alt="Logo"/>
                </div>
                <div className="h-full px-5 flex-1 flex items-center">
                    <div className="w-full bg-red-500 border-2 border-red-500 rounded flex">
                        <input type="text" placeholder="Search for..." className="p-2 w-full focus:outline-none focus:bg-gray-50"/>
                        <div className="flex justify-center items-center px-6">
                            <svg className="text-2xl text-gray-200"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="w-3/12 h-full hidden md:flex justify-between items-center icons">
                    <div className="p-2 rounded-full bg-gray-50 border border-gray-100 cursor-pointer">
                        {/* <Cart /> */}
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <div className="p-2 rounded-full bg-gray-50 border border-gray-100 cursor-pointer ">
                        <Notification />
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    </div>
                    <div className="p-2 rounded-full bg-gray-50 border border-gray-100 cursor-pointer ">
                        <Message open={false} />
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    </div>
                    <div className="p-2 rounded-full bg-gray-50 border border-gray-100 cursor-pointer">
                        <PopLogin open={false} />
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;