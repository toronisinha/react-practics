import React, { useState } from 'react'

import FaqsData from './Data'
import Faq from './Faq';
import style from './Faqs.module.css'


const Faqs = () => {
    const [faqs, setFaqs] = useState(FaqsData);
    // console.log(faqs);
    return (
        <main>
            <section className={style.faqs}>
                <h3>FAQs Question</h3>
                <div>
                    {/* maping er => pore jodi amora component na di tahne {} mordhe return use korte hoy */}
                    {faqs.map(faq => <Faq key={faq.id} {...faq} />)}
                </div>
            </section>
        </main>
    )
}

export default Faqs