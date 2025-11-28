import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogList from '../../components/Blog/Bloglist';


const BlogPage = (props) => {

    return (
        <Fragment>
            <main className="page_content blog-page">
                <PageTitle pageTitle={'Our Latest Blog'} pagesub={'Blogs😍'} pageTop={'Our'}/>
                <BlogList />
            </main>
            <CtaSection />
        </Fragment>
    )
};
export default BlogPage;
