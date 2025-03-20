import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
    const inputStyles ="border border-gray-300 sm:text-sm text-black rounded: lg block p-2.5 focus:outline-non";
    return(
        <section className="container mx-auto">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70] mx-auto">
                <div className="flex mb-8 flex-col md:flex-row items-center justify between">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                        Cria uma conta
                    </h1>
                    <p>OR</p>
                    <span className="inline-flex items-center">
                        <AiFillGithub className="mr-3 text-4l cursor-pointer text-black dark:text-white"/>
                        <FcGoogle className="ml-3 text-4xl cursor-pointer"/>
                    </span>
                </div>
                <form className="space-y-4 md:space-y-6">
                    <input type="text" name="name" id="your name" placeholder="nome" required className={inputStyles} />
                    <input type="email" name="email" id="email" placeholder="email@empresa.com" required className={inputStyles} />                   
                    <input type="password" name="password" id="password" placeholder="password" required  minLength={6} className={inputStyles} />
                </form>
            </div>
        </section>
    );};
export default Auth;