import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">

        {/*start*/}
        <div className="w-full max-w-xs overflow-hidden bg-white cursor-pointer rounded-lg shadow-lg dark:bg-gray-800">
          <img className="object-cover w-full h-56"
               src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
               alt="avatar"/>

            <div className="py-5 text-center">
              <span  className="block text-xl font-bold text-gray-800 dark:text-white" tabIndex="0" role="link">Front-end Development
                </span>
              <span className="text-sm text-gray-700 dark:text-gray-200">Front-end Development</span>
            </div>
        </div>
        {/*end*/}

        {/*start*/}
        <div className="w-full max-w-xs overflow-hidden bg-white cursor-pointer rounded-lg shadow-lg dark:bg-gray-800">
          <img className="object-cover w-full h-56"
               src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
               alt="avatar"/>

          <div className="py-5 text-center">
            <span  className="block text-xl font-bold text-gray-800 dark:text-white" tabIndex="0" role="link">Maintenance & Support</span>
            <span className="text-sm text-gray-700 dark:text-gray-200">Maintenance & Support</span>
          </div>
        </div>
        {/*end*/}

        {/*start*/}
        <div className="w-full max-w-xs overflow-hidden cursor-pointer bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img className="object-cover w-full h-56"
               src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
               alt="avatar"/>

          <div className="py-5 text-center">
            <span className="block text-xl font-bold text-gray-800 cursor-pointer " tabIndex="0" role="link"><span>Ui/Ux Design</span>
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-200">Ui/Ux Design</span>
          </div>
        </div>
        {/*end*/}

        {/*<article className="service">*/}
        {/*  <div className="service__head">*/}
        {/*    <h3>UI/UX Design</h3>*/}
        {/*  </div>*/}
        {/*  <ul className="service__list">*/}
        {/*    <li>*/}
        {/*      <BiCheck className="service__list-icon" />*/}
        {/*      <p>Lorem ipsum dolor sit amet.</p>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <BiCheck className="service__list-icon" />*/}
        {/*      <p>Lorem ipsum dolor sit amet.</p>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <BiCheck className="service__list-icon" />*/}
        {/*      <p>Lorem ipsum dolor sit amet.</p>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <BiCheck className="service__list-icon" />*/}
        {/*      <p>Lorem ipsum dolor sit amet.</p>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</article>*/}
        {/* end of Ui/ux */}

        {/*<article className="service">*/}
        {/*  <div className="service__head">*/}
        {/*    <h3>Web development</h3>*/}
        {/*  </div>*/}
        {/*  <ul className="service__list">*/}
        {/*    <li>*/}
        {/*      <BiCheck className="service__list-icon" />*/}
        {/*      <p>Lorem ipsum dolor sit amet.</p>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <BiCheck className="service__list-icon" />*/}
        {/*      <p>Lorem ipsum dolor sit amet.</p>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <BiCheck className="service__list-icon" />*/}
        {/*      <p>Lorem ipsum dolor sit amet.</p>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <BiCheck className="service__list-icon" />*/}
        {/*      <p>Lorem ipsum dolor sit amet.</p>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</article>*/}
    {/* end of web dev */}
    {/*    <article className="service">*/}
    {/*      <div className="service__head">*/}
    {/*        <h3>Content Creation</h3>*/}
    {/*      </div>*/}
    {/*      <ul className="service__list">*/}
    {/*        <li>*/}
    {/*          <BiCheck className="service__list-icon" />*/}
    {/*          <p>Lorem ipsum dolor sit amet.</p>*/}
    {/*        </li>*/}
    {/*        <li>*/}
    {/*          <BiCheck className="service__list-icon" />*/}
    {/*          <p>Lorem ipsum dolor sit amet.</p>*/}
    {/*        </li>*/}
    {/*        <li>*/}
    {/*          <BiCheck className="service__list-icon" />*/}
    {/*          <p>Lorem ipsum dolor sit amet.</p>*/}
    {/*        </li>*/}
    {/*        <li>*/}
    {/*          <BiCheck className="service__list-icon" />*/}
    {/*          <p>Lorem ipsum dolor sit amet.</p>*/}
    {/*        </li>*/}
    {/*      </ul>*/}
    {/*    </article>*/}

      </div>
    </section>
  )
}

export default Services