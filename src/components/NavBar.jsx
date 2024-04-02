import Logo from "./Logo";

const Nav = ()=> {
    return (
        <nav className="flex flex-col sm:items-center sm:flex-row gap-[10px] justify-between w-full bg-[#333] text-[#fff] ">
            <Logo/>
            <ul className="text-[14px] sm:text-[17px] cursor-[pointer] gap-[10px] pr-[20px] flex flex-col sm:w-fit sm:flex-row w-full bg-[#333] text-[#fff] ">
                <li className=" pl-[30px] sm:p-0 cursor-[pointer] py-[5px] hover:border-y-[1px] hover:text-[orange] sm:w-fit sm:border-none">Home</li>
                <li className=" pl-[30px] sm:p-0 cursor-[pointer] py-[5px] hover:border-y-[1px] hover:text-[orange] sm:w-fit sm:border-none">Program</li>
                <li className=" pl-[30px] sm:p-0 cursor-[pointer] py-[5px] hover:border-y-[1px] hover:text-[orange] sm:w-fit sm:border-none">About us</li>
                <li className=" pl-[30px] sm:p-0 cursor-[pointer] py-[5px] hover:border-y-[1px] hover:text-[orange] sm:w-fit sm:border-none">Campus</li>
                <li className=" pl-[30px] sm:p-0 cursor-[pointer] py-[5px] hover:border-y-[1px] hover:text-[orange] sm:w-fit sm:border-none">Testimonials</li>
                <li className=" pl-[30px] sm:p-0 cursor-[pointer] py-[5px] hover:border-y-[1px] hover:text-[orange] sm:w-fit sm:border-none">Contacts us</li>
            </ul>
        </nav>
    )
}
export default Nav;