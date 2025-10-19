import React from 'react'
import Login from '../components/auth/Login'
import { Helmet } from "react-helmet";
import Layout from '../Layout/Layout'
const LoginPage = () => {
    return (
      <>
      <Helmet>
        <title>Virtual Tutor | Register</title>
        <meta name="register" content="register page content" />
      </Helmet>
      <Layout>
        <div className="pt-20 space-y-20">
          <Login />
        </div>
      </Layout>
    </>
    )
}

export default LoginPage
