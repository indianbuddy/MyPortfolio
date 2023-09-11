import React from 'react'
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Kota, Rajasthan, India',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'sanskar27pareta@gmail.com',
		icon: <FiMail />,
	},
    // {
	// 	id: 3,
	// 	name: 'sanskar.pareta@iitdalumni.com',
	// 	icon: <FiMail />,
	// },
	{
		id: 3,
		name: '+91-7728840988',
		icon: <FiPhone />,
	},
];

function Contact() {
  return  (
    <section id="contact">
    <div className="w-full ">
        <div className="text-centre  px-10">
            <h1 className="font-bold text-center text-4xl text-primary-dark dark:text-primary-light mt-12 mb-8">
                Contact details
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded "></hr>    
            </h1>
            <ul>
                {contacts.map((contact) => (
                    <li className="flex " key={contact.id}>
                        <i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
                            {contact.icon}
                        </i>
                        <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                            {contact.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </section>
);
}

export default Contact