import React from 'react'
import { Link } from 'react-router'


function Home() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent" id="gtco-main-nav">
                <div className="container"><a className="navbar-brand">Solution</a>
                    <button className="navbar-toggler" data-target="#my-nav" onclick="myFunction(this)" data-toggle="collapse"><span className="bar1" /> <span className="bar2" /> <span className="bar3" /></button>
                    <div id="my-nav" className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#news">News</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <Link to="/login" className="btn btn-info my-2 my-sm-0 text-uppercase">Login</Link>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="container-fluid gtco-banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1> We promise to bring
                                the best <span>solution</span> for
                                your business. </h1>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus turpis nisl. </p>
                            <a href="#">Contact Us <i className="fa fa-angle-right" aria-hidden="true" /></a></div>
                        <div className="col-md-6">
                            <div className="card"><img className="card-img-top img-fluid" src="images/banner-img.png" alt /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid gtco-feature" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="cover">
                                <div className="card">
                                    <svg className="back-bg" width="100%" viewBox="0 0 900 700" style={{ position: 'absolute', zIndex: -1 }}>
                                        <defs>
                                            <linearGradient id="PSgrad_01" x1="64.279%" x2="0%" y1="76.604%" y2="0%">
                                                <stop offset="0%" stopColor="rgb(1,230,248)" stopOpacity={1} />
                                                <stop offset="100%" stopColor="rgb(29,62,222)" stopOpacity={1} />
                                            </linearGradient>
                                        </defs>
                                        <path fillRule="evenodd" opacity="0.102" fill="url(#PSgrad_01)" d="M616.656,2.494 L89.351,98.948 C19.867,111.658 -16.508,176.639 7.408,240.130 L122.755,546.348 C141.761,596.806 203.597,623.407 259.843,609.597 L697.535,502.126 C748.221,489.680 783.967,441.432 777.751,392.742 L739.837,95.775 C732.096,35.145 677.715,-8.675 616.656,2.494 Z" />
                                    </svg>
                                    {/* **************/}
                                    <svg width="100%" viewBox="0 0 700 500">
                                        <clipPath id="clip-path">
                                            <path d="M89.479,0.180 L512.635,25.932 C568.395,29.326 603.115,76.927 590.357,129.078 L528.827,380.603 C518.688,422.048 472.661,448.814 427.190,443.300 L73.350,400.391 C32.374,395.422 -0.267,360.907 -0.002,322.064 L1.609,85.154 C1.938,36.786 40.481,-2.801 89.479,0.180 Z" />
                                        </clipPath>
                                        {/* xlink:href for modern browsers, src for IE8- */}
                                        <image clipPath="url(#clip-path)" xlinkHref="images/learn-img.jpg" width="100%" height={465} className="svg__image" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h2> We are a Creative Digital
                                Agency &amp; Marketing Experts </h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus turpis nisl, vitae dictum mi
                                semper convallis. Ut sapien leo, varius ac dapibus a, cursus quis ante. </p>
                            <p>
                                <small>Nunc sodales lobortis arcu, sit amet venenatis erat placerat a. Donec lacinia magna nulla,
                                    cursus impediet augue egestas id. Suspendisse dolor lectus, pellentesque quis tincidunt ac,
                                    dictum id neque.
                                </small>
                            </p>
                            <a href="#">Learn More <i className="fa fa-angle-right" aria-hidden="true" /></a></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid gtco-features" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h2> Explore The Services<br />
                                We Offer For You </h2>
                            <p> Nunc sodales lobortis arcu, sit amet venenatis erat placerat a. Donec lacinia magna nulla, cursus
                                impediet augue egestas id. Suspendisse dolor lectus, pellentesque quis tincidunt ac, dictum id
                                neque. </p>
                            <a href="#">All Services <i className="fa fa-angle-right" aria-hidden="true" /></a></div>
                        <div className="col-lg-8">
                            <svg id="bg-services" width="100%" viewBox="0 0 1000 800">
                                <defs>
                                    <linearGradient id="PSgrad_02" x1="64.279%" x2="0%" y1="76.604%" y2="0%">
                                        <stop offset="0%" stopColor="rgb(1,230,248)" stopOpacity={1} />
                                        <stop offset="100%" stopColor="rgb(29,62,222)" stopOpacity={1} />
                                    </linearGradient>
                                </defs>
                                <path fillRule="evenodd" opacity="0.102" fill="url(#PSgrad_02)" d="M801.878,3.146 L116.381,128.537 C26.052,145.060 -21.235,229.535 9.856,312.073 L159.806,710.157 C184.515,775.753 264.901,810.334 338.020,792.380 L907.021,652.668 C972.912,636.489 1019.383,573.766 1011.301,510.470 L962.013,124.412 C951.950,45.594 881.254,-11.373 801.878,3.146 Z" />
                            </svg>
                            <div className="row">
                                <div className="col">
                                    <div className="card text-center">
                                        <div className="oval"><img className="card-img-top" src="images/web-design.png" alt /></div>
                                        <div className="card-body">
                                            <h3 className="card-title">Web Design</h3>
                                            <p className="card-text">Nullam quis libero in lorem accumsan sodales. Nam vel nisi
                                                eget.</p>
                                        </div>
                                    </div>
                                    <div className="card text-center">
                                        <div className="oval"><img className="card-img-top" src="images/marketing.png" alt /></div>
                                        <div className="card-body">
                                            <h3 className="card-title">Marketing</h3>
                                            <p className="card-text">Nullam quis libero in lorem accumsan sodales. Nam vel nisi
                                                eget.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card text-center">
                                        <div className="oval"><img className="card-img-top" src="images/seo.png" alt /></div>
                                        <div className="card-body">
                                            <h3 className="card-title">SEO</h3>
                                            <p className="card-text">Nullam quis libero in lorem accumsan sodales. Nam vel nisi
                                                eget.</p>
                                        </div>
                                    </div>
                                    <div className="card text-center">
                                        <div className="oval"><img className="card-img-top" src="images/graphics-design.png" alt /></div>
                                        <div className="card-body">
                                            <h3 className="card-title">Graphics Design</h3>
                                            <p className="card-text">Nullam quis libero in lorem accumsan sodales. Nam vel nisi
                                                eget.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid gtco-numbers-block">
                <div className="container">
                    <svg width="100%" viewBox="0 0 1600 400">
                        <defs>
                            <linearGradient id="PSgrad_03" x1="80.279%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="rgb(1,230,248)" stopOpacity={1} />
                                <stop offset="100%" stopColor="rgb(29,62,222)" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        {/* <clipPath id="clip-path3">

                                </clipPath> */}
                        <path fillRule="evenodd" fill="url(#PSgrad_03)" d="M98.891,386.002 L1527.942,380.805 C1581.806,380.610 1599.093,335.367 1570.005,284.353 L1480.254,126.948 C1458.704,89.153 1408.314,59.820 1366.025,57.550 L298.504,0.261 C238.784,-2.944 166.619,25.419 138.312,70.265 L16.944,262.546 C-24.214,327.750 12.103,386.317 98.891,386.002 Z" />
                        <clipPath id="ctm" fill="none">
                            <path d="M98.891,386.002 L1527.942,380.805 C1581.806,380.610 1599.093,335.367 1570.005,284.353 L1480.254,126.948 C1458.704,89.153 1408.314,59.820 1366.025,57.550 L298.504,0.261 C238.784,-2.944 166.619,25.419 138.312,70.265 L16.944,262.546 C-24.214,327.750 12.103,386.317 98.891,386.002 Z" />
                        </clipPath>
                        {/* xlink:href for modern browsers, src for IE8- */}
                        <image clipPath="url(#ctm)" xlinkHref="images/word-map.png" height="800px" width="100%" className="svg__image">
                        </image>
                    </svg>
                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">125</h5>
                                    <p className="card-text">Active Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">200</h5>
                                    <p className="card-text">Business Growth</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">530</h5>
                                    <p className="card-text">Completed Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">941</h5>
                                    <p className="card-text">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid gtco-testimonials">
                <div className="container">
                    <h2>What our customers say about us.</h2>
                    <div className="owl-carousel owl-carousel1 owl-theme">
                        <div>
                            <div className="card text-center"><img className="card-img-top" src="images/customer1.jpg" alt />
                                <div className="card-body">
                                    <h5>Lisa Gally <br />
                                        <span> Project Manager </span></h5>
                                    <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card text-center"><img className="card-img-top" src="images/customer2.jpg" alt />
                                <div className="card-body">
                                    <h5>Missy Limana<br />
                                        <span> Project Manager </span></h5>
                                    <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card text-center"><img className="card-img-top" src="images/customer3.jpg" alt />
                                <div className="card-body">
                                    <h5>Aana Brown<br />
                                        <span> Project Manager </span></h5>
                                    <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card text-center"><img className="card-img-top" src="images/customer3.jpg" alt />
                                <div className="card-body">
                                    <h5>Aana Brown<br />
                                        <span> Project Manager </span></h5>
                                    <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid gtco-features-list">
                <div className="container">
                    <div className="row">
                        <div className="media col-md-6 col-lg-4">
                            <div className="oval mr-4"><img className="align-self-start" src="images/quality-results.png" alt /></div>
                            <div className="media-body">
                                <h5 className="mb-0">Quality Results</h5>
                                Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit. Duis ac quam id sapien vestibulum
                                fermentum ac eu eros. Aliquam erat volutpat.
                            </div>
                        </div>
                        <div className="media col-md-6 col-lg-4">
                            <div className="oval mr-4"><img className="align-self-start" src="images/analytics.png" alt /></div>
                            <div className="media-body">
                                <h5 className="mb-0">Analytics</h5>
                                Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit. Duis ac quam id sapien vestibulum
                                fermentum ac eu eros. Aliquam erat volutpat.
                            </div>
                        </div>
                        <div className="media col-md-6 col-lg-4">
                            <div className="oval mr-4"><img className="align-self-start" src="images/affordable-pricing.png" alt /></div>
                            <div className="media-body">
                                <h5 className="mb-0">Affordable Pricing</h5>
                                Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit. Duis ac quam id sapien vestibulum
                                fermentum ac eu eros. Aliquam erat volutpat.
                            </div>
                        </div>
                        <div className="media col-md-6 col-lg-4">
                            <div className="oval mr-4"><img className="align-self-start" src="images/easy-to-use.png" alt /></div>
                            <div className="media-body">
                                <h5 className="mb-0">Easy To Use</h5>
                                Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit. Duis ac quam id sapien vestibulum
                                fermentum ac eu eros. Aliquam erat volutpat.
                            </div>
                        </div>
                        <div className="media col-md-6 col-lg-4">
                            <div className="oval mr-4"><img className="align-self-start" src="images/free-support.png" alt /></div>
                            <div className="media-body">
                                <h5 className="mb-0">Free Support</h5>
                                Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit. Duis ac quam id sapien vestibulum
                                fermentum ac eu eros. Aliquam erat volutpat.
                            </div>
                        </div>
                        <div className="media col-md-6 col-lg-4">
                            <div className="oval mr-4"><img className="align-self-start" src="images/effectively-increase.png" alt /></div>
                            <div className="media-body">
                                <h5 className="mb-0">Effectively Increase</h5>
                                Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit. Duis ac quam id sapien vestibulum
                                fermentum ac eu eros. Aliquam erat volutpat.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid gtco-logo-area">
                <div className="container">
                    <div className="row">
                        <div className="col"><img src="images/logo1.png" className="img-fluid" alt /></div>
                        <div className="col"><img src="images/logo2.png" className="img-fluid" alt /></div>
                        <div className="col"><img src="images/logo3.png" className="img-fluid" alt /></div>
                        <div className="col"><img src="images/logo4.png" className="img-fluid" alt /></div>
                        <div className="col"><img src="images/logo5.png" className="img-fluid" alt /></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid gtco-news" id="news">
                <div className="container">
                    <h2>Latest News &amp; Articles</h2>
                    <div className="owl-carousel owl-carousel2 owl-theme">
                        <div>
                            <div className="card text-center"><img className="card-img-top" src="images/news1.jpg" alt />
                                <div className="card-body text-left pr-0 pl-0">
                                    <h5>Aenean ultrices lorem quis blandit
                                        tempor urabitur accumsan. </h5>
                                    <p className="card-text">Donec non sem mi. In hac habitasse platea dictumst. Nullam a feugiat augue,
                                        et porta metus. Nulla mollis lobortis leet. Maecenas tincidunt, arcu sed ornare purus risus
                                        . . . </p>
                                    <a href="#">READ MORE <i className="fa fa-angle-right" aria-hidden="true" /></a></div>
                            </div>
                        </div>
                        <div>
                            <div className="card text-center"><img className="card-img-top" src="images/news2.jpg" alt />
                                <div className="card-body text-left pr-0 pl-0">
                                    <h5> Nam vel nisi eget odio pulvinar
                                        iaculis. Fusce aliquet. </h5>
                                    <p className="card-text">Donec non sem mi. In hac habitasse platea dictumst. Nullam a feugiat augue,
                                        et porta metus. Nulla mollis lobortis leet. Maecenas tincidunt, arcu sed ornare purus risus
                                        . . . </p>
                                    <a href="#">READ MORE <i className="fa fa-angle-right" aria-hidden="true" /></a></div>
                            </div>
                        </div>
                        <div>
                            <div className="card text-center"><img className="card-img-top" src="images/news3.jpg" alt />
                                <div className="card-body text-left pr-0 pl-0">
                                    <h5>Morbi faucibus odio sollicitudin
                                        risus scelerisque dignissim. </h5>
                                    <p className="card-text">Donec non sem mi. In hac habitasse platea dictumst. Nullam a feugiat augue,
                                        et porta metus. Nulla mollis lobortis leet. Maecenas tincidunt, arcu sed ornare purus risus
                                        . . . </p>
                                    <a href="#">READ MORE <i className="fa fa-angle-right" aria-hidden="true" /></a></div>
                            </div>
                        </div>
                        <div>
                            <div className="card text-center"><img className="card-img-top" src="images/news1.jpg" alt />
                                <div className="card-body text-left pr-0 pl-0">
                                    <h5>Aenean ultrices lorem quis blandit
                                        tempor urabitur accumsan. </h5>
                                    <p className="card-text">Donec non sem mi. In hac habitasse platea dictumst. Nullam a feugiat augue,
                                        et porta metus. Nulla mollis lobortis leet. Maecenas tincidunt, arcu sed ornare purus risus
                                        . . . </p>
                                    <a href="#">READ MORE <i className="fa fa-angle-right" aria-hidden="true" /></a></div>
                            </div>
                        </div>
                        <div>
                            <div className="card text-center"><img className="card-img-top" src="images/news2.jpg" alt />
                                <div className="card-body text-left pr-0 pl-0">
                                    <h5> Nam vel nisi eget odio pulvinar
                                        iaculis. Fusce aliquet. </h5>
                                    <p className="card-text">Donec non sem mi. In hac habitasse platea dictumst. Nullam a feugiat augue,
                                        et porta metus. Nulla mollis lobortis leet. Maecenas tincidunt, arcu sed ornare purus risus
                                        . . . </p>
                                    <a href="#">READ MORE <i className="fa fa-angle-right" aria-hidden="true" /></a></div>
                            </div>
                        </div>
                        <div>
                            <div className="card text-center"><img className="card-img-top" src="images/news3.jpg" alt />
                                <div className="card-body text-left pr-0 pl-0">
                                    <h5>Morbi faucibus odio sollicitudin
                                        risus scelerisque dignissim. </h5>
                                    <p className="card-text">Donec non sem mi. In hac habitasse platea dictumst. Nullam a feugiat augue,
                                        et porta metus. Nulla mollis lobortis leet. Maecenas tincidunt, arcu sed ornare purus risus
                                        . . . </p>
                                    <a href="#">READ MORE <i className="fa fa-angle-right" aria-hidden="true" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="container-fluid" id="gtco-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" id="contact">
                            <h4> Contact Us </h4>
                            <input type="text" className="form-control" placeholder="Full Name" />
                            <input type="email" className="form-control" placeholder="Email Address" />
                            <textarea className="form-control" placeholder="Message" defaultValue={""} />
                            <a href="#" className="submit-button">READ MORE <i className="fa fa-angle-right" aria-hidden="true" /></a>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-6">
                                    <h4>Company</h4>
                                    <ul className="nav flex-column company-nav">
                                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">News</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">FAQ's</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                                    </ul>
                                    <h4 className="mt-5">Fllow Us</h4>
                                    <ul className="nav follow-us-nav">
                                        <li className="nav-item"><a className="nav-link pl-0" href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                        <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                        <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-google" aria-hidden="true" /></a></li>
                                        <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <h4>Services</h4>
                                    <ul className="nav flex-column services-nav">
                                        <li className="nav-item"><a className="nav-link" href="#">Web Design</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Graphics Design</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">App Design</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">SEO</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Marketing</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Analytic</a></li>
                                    </ul>
                                </div>
                                <div className="col-12">
                                    <p>© 2019. All Rights Reserved. Design by <a href="https://gettemplates.co" target="_blank">GetTemplates</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Home
