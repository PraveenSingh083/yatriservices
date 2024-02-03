
import Script from 'next/script';
export const metadata = {
  title: 'become vendor',
  description: 'vendor registration',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/animate.min.css" />
   <link rel="stylesheet" href="assets/css/fontawesome.all.min.css" />
    <link rel="stylesheet" href="cdn.jsdelivr.net/npm/bootstrap-icons%401.8.2/font/bootstrap-icons.css" />
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
    <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
    <link rel="stylesheet" href="assets/css/navber.css" />
    <link rel="stylesheet" href="assets/css/meanmenu.css" />
   <link rel="stylesheet" href="assets/css/style.css" />
   <link rel="stylesheet" href="assets/css/responsive.css" />
    <link rel="icon" type="image/png" href="assets/img/favicon.png" />
      </head>
      <body>{children}</body>
      <Script type="text/javascript" src="js/metisMenu.min.js" strategy="lazyOnload"></Script>
               <Script src="assets/js/jquery-3.6.0.min.js"></Script>
               <Script src="assets/js/bootstrap.bundle.js"></Script>
               <Script src="assets/js/jquery.meanmenu.js"></Script>
               {/* <Script src="assets/js/owl.carousel.min.js"></Script> */}
               <Script src="assets/js/wow.min.js"></Script>
               {/* <Script src="assets/js/custom.js"></Script> */}
               <Script src="assets/js/add-form.js"></Script>
               <Script src="assets/js/form-dropdown.js"></Script>
    </html>
  )
}
