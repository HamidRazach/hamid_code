import React, { Fragment } from 'react';
import Head from 'next/head';
import PageTitle from '../../components/pagetitle/PageTitle';
import CtaSection from '../../components/CtaSection/CtaSection';
import ContactSection from '../../components/ContactSection';

const ContactPage = (props) => {

    return (
        <Fragment>
              <Head>
        <title>Contact Us | Digital Minds On</title>
        <meta 
          name="description" 
          content=" Get in touch with Digital Minds On today. Our team is ready to discuss your project and provide expert guidance for app, web, and game development services." 
        />
        <link 
          rel="canonical" 
          href="https://digitalmindson.com/contact" 
        />
      </Head>
            <main className="page_content about-page">
                <PageTitle pageTitle={'Contact Us'} pagesub={'Us 😍'} pageTop={'Contact'} />
                <ContactSection />
                <CtaSection />
            </main>
        </Fragment>
    )
};

export default ContactPage;