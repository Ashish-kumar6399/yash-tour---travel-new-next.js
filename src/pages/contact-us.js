
import Breadcrumbs from '@/components/Breadcrumb'
import ContactUs from '@/components/Contact/Contact'
import ContactForm from '@/components/Contact/Contactform'
import Layout from '@/layout/Layout'
import React from 'react'

function page() {
  return (
    <div>
        <Layout>
        <ContactUs/>
        <Breadcrumbs/>
        <ContactForm/>
        </Layout>
    </div>
  )
}

export default page