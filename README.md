# JAMcommerce
A basic Jamstack template to set up a e-commerce website [WIP].

## Objectives

The following template aims to achieve the following requirements

1. A low budget
2. Vendor independence (i.e. Your website and data does not critically depend on others)
3. Multilingüal backend (i.e. Not just English)
4. Custom payment gateway

It is possible to reduce even more the budget if you make some sacrifices on objectives 2 and 3 (You could even setup a site free), but for long-term convenience and better UX for non-english-speaking customers, this projects aims to achieve the above objectives. Nevertheless, You can easily implement other options just editing a few lines of code.

## Stack

One of the main advantages of JAMstack is the ability to use whatever technology seems more appropiate for a context. Consequently, the technology stack used for this project is the following:

### Front end framework - Gatsby

Gatsby is one of the most popular options in terms of Static Site Generators. Its main advantage is it doesn't require a server to compile the code in every request. Instead, it just requires a server that hosts static files and builds the code when a webhook is triggered. Consequently, its model heavily reduces the server costs.

### CMS - Directus CMS  (+ Postgres + DigitalOcean / Vultr / AWS Lightsail small instance + Dokku for multitenancy)

Sanity and Contentful are amazing. Both offer a generous free quota and they're amazing if you have a low budget. Nevertheless, your data will be stored on their servers, so it makes migration a bit difficult. In addition, both lacks on multilingual support in the content editor, so it does not meet our requirements. Good self-hosted multilingual options are Strapi and Directus. However, we choose the latter because it is very lightweight (you can easily run multiple instances on a $5 Digital Ocean Droplet with Dokku) and it offers endpoints, which are useful for stock management and payment processing.

### Payment gateway - Flow.cl or Stripe

This choice is context-dependant. Flow.cl is a easy and inexpensive way to access WebPay, a very used checkout platform used in Chile. For countries where it is available, there is also an option for Stripe. If your country use another payment gateway, feel free to use it.

## Front End documentation

For the Backend documentation, check the following [link](https://github.com/starxmaker/JAMCommerce_BE).

TODO

