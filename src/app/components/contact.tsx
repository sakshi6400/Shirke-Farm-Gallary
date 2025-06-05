import React from "react"
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";



const Contact=() => {
    return (
        <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-0
        lg:space-x-8 " id="contact">

             <div className="flex justify-center items-center">
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <Image src={phone} alt="phone" className="h-[110px] w-auto mr-6" />
                        <p className="text-xl ">00000 00000</p>
                    </li>

                   

                    <li className="flex items-center">
                        <Image src={mail} alt="phone" className="h-[110px] w-auto mr-6" />
                        <p className="text-xl ">shirkesakshi64@gmail.com</p>
                    </li>
                </ul>

            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-[#17604F]/20 p-6 rounded-xl max-w-[550px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E48A57] via-[#17604F]
                to-[#E48A57] opacity-30 animate-gradient-xy"></div>
                <div className="relative">
                    <h2 className="text-5xl font-bold text-[#E48A57] mb-4">Let&apos;s connect</h2>
                    <p className="text-white/70 mb-6">send me mail</p>

                    <form action="https://getform.io/f/broovova" method="POST" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input type="text" name="name" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E48A57]"
                            placeholder="First Name"/>
                            <input type="text" name="name" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E48A57]"
                            placeholder="Last Name"/>
                            <input type="email" name="email" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E48A57]"
                            placeholder="Email"/>
                            <input type="phone" name="phone" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E48A57]"
                            placeholder="phone"/>
                        </div>
                        <textarea className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#E48A57]"
                        placeholder="Your Message"/>
                        <button className="bg-[#E48A57] hover:bg-[#17604F] text-white px-6 py-2 w-full font-semibold
                        text-xl rounded-xl transition-colors duration-300">Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact