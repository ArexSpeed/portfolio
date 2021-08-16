import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {Link} from 'react-scroll'
import profile from '../images/heropic.png'
import cv from '../assets/CV-Cichocki.pdf'

const Hero = () => {
  return (
    <div className="hero">
      <section className="section-title">
        <h1 className="section-title-text">
         My Portfolio
        </h1> 
      </section>
      <section className="hero-banner">
        <article className="hero-banner-title">
          <h2 className="hero-banner-hello">Hello, <span>I am</span> Arek</h2>
            <div className="hero-banner-name">
              {/* Frontend */}
              <svg className="hero-frontend" width="778" height="112" viewBox="0 0 778 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.51999 106V6.20781H70.336V25.0718H25.984V45.9518H65.44V64.8158H25.984V106H3.51999Z" stroke="black" stroke-width="4"/>
                <path d="M115.439 5.05581C130.415 5.05581 141.887 7.74381 149.855 13.1198C157.823 18.3998 161.807 26.6558 161.807 37.8878C161.807 44.8958 160.175 50.6078 156.911 55.0238C153.743 59.3438 149.135 62.7518 143.087 65.2478C145.103 67.7438 147.215 70.6238 149.423 73.8878C151.631 77.0558 153.791 80.4158 155.903 83.9678C158.111 87.4238 160.223 91.0718 162.239 94.9118C164.255 98.6558 166.127 102.352 167.855 106H142.655C140.831 102.736 138.959 99.4238 137.039 96.0638C135.215 92.7038 133.295 89.4398 131.279 86.2718C129.359 83.1038 127.439 80.1278 125.519 77.3438C123.599 74.4638 121.679 71.8718 119.759 69.5678H108.671V106H86.2075V7.64781C91.1035 6.68781 96.1435 6.01581 101.327 5.63181C106.607 5.24781 111.311 5.05581 115.439 5.05581ZM116.735 24.2078C115.103 24.2078 113.615 24.2558 112.271 24.3518C111.023 24.4478 109.823 24.5438 108.671 24.6398V51.7118H115.007C123.455 51.7118 129.503 50.6558 133.151 48.5438C136.799 46.4318 138.623 42.8318 138.623 37.7438C138.623 32.8478 136.751 29.3918 133.007 27.3758C129.359 25.2638 123.935 24.2078 116.735 24.2078Z" stroke="black" stroke-width="4" />
                <path d="M198.587 56.0318C198.587 60.9278 199.163 65.3438 200.315 69.2798C201.563 73.2158 203.291 76.6238 205.499 79.5038C207.803 82.2878 210.587 84.4478 213.851 85.9838C217.115 87.5198 220.859 88.2878 225.083 88.2878C229.211 88.2878 232.907 87.5198 236.171 85.9838C239.531 84.4478 242.315 82.2878 244.523 79.5038C246.827 76.6238 248.555 73.2158 249.707 69.2798C250.955 65.3438 251.579 60.9278 251.579 56.0318C251.579 51.1358 250.955 46.7198 249.707 42.7838C248.555 38.7518 246.827 35.3438 244.523 32.5598C242.315 29.6798 239.531 27.4718 236.171 25.9358C232.907 24.3998 229.211 23.6318 225.083 23.6318C220.859 23.6318 217.115 24.4478 213.851 26.0798C210.587 27.6158 207.803 29.8238 205.499 32.7038C203.291 35.4878 201.563 38.8958 200.315 42.9278C199.163 46.8638 198.587 51.2318 198.587 56.0318ZM274.763 56.0318C274.763 64.5758 273.467 72.1118 270.875 78.6398C268.379 85.0718 264.923 90.4958 260.507 94.9118C256.091 99.2318 250.811 102.496 244.667 104.704C238.619 106.912 232.091 108.016 225.083 108.016C218.267 108.016 211.835 106.912 205.787 104.704C199.739 102.496 194.459 99.2318 189.947 94.9118C185.435 90.4958 181.883 85.0718 179.291 78.6398C176.699 72.1118 175.403 64.5758 175.403 56.0318C175.403 47.4878 176.747 39.9998 179.435 33.5678C182.123 27.0398 185.723 21.5678 190.235 17.1518C194.843 12.7358 200.123 9.42381 206.075 7.21581C212.123 5.00781 218.459 3.90381 225.083 3.90381C231.899 3.90381 238.331 5.00781 244.379 7.21581C250.427 9.42381 255.707 12.7358 260.219 17.1518C264.731 21.5678 268.283 27.0398 270.875 33.5678C273.467 39.9998 274.763 47.4878 274.763 56.0318Z" stroke="black" stroke-width="4"/>
                <path d="M360.449 106C354.017 94.5758 347.057 83.2958 339.569 72.1598C332.081 61.0238 324.113 50.5118 315.665 40.6238V106H293.489V6.20781H311.777C314.945 9.37581 318.449 13.2638 322.289 17.8718C326.129 22.4798 330.017 27.4238 333.953 32.7038C337.985 37.8878 341.969 43.3118 345.905 48.9758C349.841 54.5438 353.537 59.9198 356.993 65.1038V6.20781H379.313V106H360.449Z" stroke="black" stroke-width="4" />
                <path d="M476.349 6.20781V25.3598H446.253V106H423.789V25.3598H393.693V6.20781H476.349Z" stroke="black" stroke-width="4" />
                <path d="M490.786 106V6.20781H558.178V25.0718H513.25V44.6558H553.138V63.0878H513.25V87.1358H561.49V106H490.786Z" stroke="black" stroke-width="4" />
                <path d="M645.074 106C638.642 94.5758 631.682 83.2958 624.194 72.1598C616.706 61.0238 608.738 50.5118 600.29 40.6238V106H578.114V6.20781H596.402C599.57 9.37581 603.074 13.2638 606.914 17.8718C610.754 22.4798 614.642 27.4238 618.578 32.7038C622.61 37.8878 626.594 43.3118 630.53 48.9758C634.466 54.5438 638.162 59.9198 641.618 65.1038V6.20781H663.938V106H645.074Z" stroke="black" stroke-width="4" />
                <path d="M709.421 87.7118C710.477 87.8078 711.677 87.9038 713.021 87.9998C714.461 87.9998 716.141 87.9998 718.061 87.9998C729.293 87.9998 737.597 85.1678 742.973 79.5038C748.445 73.8398 751.181 66.0158 751.181 56.0318C751.181 45.5678 748.589 37.6478 743.405 32.2718C738.221 26.8958 730.013 24.2078 718.781 24.2078C717.245 24.2078 715.661 24.2558 714.029 24.3518C712.397 24.3518 710.861 24.4478 709.421 24.6398V87.7118ZM774.365 56.0318C774.365 64.6718 773.021 72.2078 770.333 78.6398C767.645 85.0718 763.806 90.3998 758.814 94.6238C753.918 98.8478 747.917 102.016 740.813 104.128C733.709 106.24 725.741 107.296 716.909 107.296C712.877 107.296 708.173 107.104 702.797 106.72C697.421 106.432 692.141 105.76 686.957 104.704V7.50381C692.141 6.54382 697.517 5.91982 703.085 5.63181C708.749 5.24781 713.597 5.05581 717.629 5.05581C726.173 5.05581 733.901 6.01581 740.813 7.93581C747.821 9.85581 753.822 12.8798 758.814 17.0078C763.806 21.1358 767.645 26.4158 770.333 32.8478C773.021 39.2798 774.365 47.0078 774.365 56.0318Z" stroke="black" stroke-width="4" />
              </svg>
              {/* Developer */}
              <svg className="hero-dev" width="849" height="112" viewBox="0 0 849 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.984 87.7123C27.04 87.8083 28.24 87.9043 29.584 88.0003C31.024 88.0003 32.704 88.0003 34.624 88.0003C45.856 88.0003 54.16 85.1683 59.536 79.5043C65.008 73.8403 67.744 66.0163 67.744 56.0323C67.744 45.5683 65.152 37.6483 59.968 32.2723C54.784 26.8963 46.576 24.2083 35.344 24.2083C33.808 24.2083 32.224 24.2563 30.592 24.3523C28.96 24.3523 27.424 24.4483 25.984 24.6403V87.7123ZM90.928 56.0323C90.928 64.6723 89.584 72.2083 86.896 78.6403C84.208 85.0723 80.368 90.4003 75.376 94.6243C70.48 98.8483 64.48 102.016 57.376 104.128C50.272 106.24 42.304 107.296 33.472 107.296C29.44 107.296 24.736 107.104 19.36 106.72C13.984 106.432 8.70399 105.76 3.51999 104.704V7.5043C8.70399 6.5443 14.08 5.9203 19.648 5.6323C25.312 5.2483 30.16 5.0563 34.192 5.0563C42.736 5.0563 50.464 6.0163 57.376 7.9363C64.384 9.8563 70.384 12.8803 75.376 17.0083C80.368 21.1363 84.208 26.4163 86.896 32.8483C89.584 39.2803 90.928 47.0083 90.928 56.0323Z" stroke="black" stroke-width="6"/>
                <path d="M109.692 106V6.2083H177.084V25.0723H132.156V44.6563H172.044V63.0883H132.156V87.1363H180.396V106H109.692Z" stroke="black" stroke-width="6"/>
                <path d="M228.231 106C224.295 97.6483 220.407 88.9603 216.567 79.9363C212.727 70.9123 209.079 61.9843 205.623 53.1523C202.167 44.3203 198.951 35.8723 195.975 27.8083C193.095 19.7443 190.599 12.5443 188.487 6.2083H213.255C215.175 11.9683 217.239 18.2083 219.447 24.9283C221.751 31.5523 224.055 38.1763 226.359 44.8003C228.759 51.4243 231.063 57.7603 233.271 63.8083C235.479 69.8563 237.543 75.0883 239.463 79.5043C241.287 75.0883 243.303 69.8563 245.511 63.8083C247.815 57.7603 250.119 51.4243 252.423 44.8003C254.823 38.1763 257.127 31.5523 259.335 24.9283C261.639 18.2083 263.751 11.9683 265.671 6.2083H289.575C287.367 12.5443 284.823 19.7443 281.943 27.8083C279.063 35.8723 275.895 44.3203 272.439 53.1523C268.983 61.9843 265.335 70.9123 261.495 79.9363C257.655 88.9603 253.767 97.6483 249.831 106H228.231Z" stroke="black" stroke-width="6" />
                <path d="M302.489 106V6.2083H369.881V25.0723H324.953V44.6563H364.841V63.0883H324.953V87.1363H373.193V106H302.489Z" stroke="black" stroke-width="6"/>
                <path d="M456.489 86.7043V106H389.817V6.2083H412.281V86.7043H456.489Z" stroke="black" stroke-width="6"/>
                <path d="M487.009 56.0323C487.009 60.9283 487.585 65.3443 488.737 69.2803C489.985 73.2163 491.713 76.6243 493.921 79.5043C496.225 82.2883 499.009 84.4483 502.273 85.9843C505.537 87.5203 509.281 88.2883 513.505 88.2883C517.633 88.2883 521.329 87.5203 524.593 85.9843C527.953 84.4483 530.737 82.2883 532.945 79.5043C535.249 76.6243 536.977 73.2163 538.129 69.2803C539.377 65.3443 540.001 60.9283 540.001 56.0323C540.001 51.1363 539.377 46.7203 538.129 42.7843C536.977 38.7523 535.249 35.3443 532.945 32.5603C530.737 29.6803 527.953 27.4723 524.593 25.9363C521.329 24.4003 517.633 23.6323 513.505 23.6323C509.281 23.6323 505.537 24.4483 502.273 26.0803C499.009 27.6163 496.225 29.8243 493.921 32.7043C491.713 35.4883 489.985 38.8963 488.737 42.9283C487.585 46.8643 487.009 51.2323 487.009 56.0323ZM563.185 56.0323C563.185 64.5763 561.889 72.1123 559.297 78.6403C556.801 85.0723 553.345 90.4963 548.929 94.9123C544.513 99.2323 539.233 102.496 533.089 104.704C527.041 106.912 520.513 108.016 513.505 108.016C506.689 108.016 500.257 106.912 494.209 104.704C488.161 102.496 482.881 99.2323 478.369 94.9123C473.857 90.4963 470.305 85.0723 467.713 78.6403C465.121 72.1123 463.825 64.5763 463.825 56.0323C463.825 47.4883 465.169 40.0003 467.857 33.5683C470.545 27.0403 474.145 21.5683 478.657 17.1523C483.265 12.7363 488.545 9.4243 494.497 7.2163C500.545 5.0083 506.881 3.9043 513.505 3.9043C520.321 3.9043 526.753 5.0083 532.801 7.2163C538.849 9.4243 544.129 12.7363 548.641 17.1523C553.153 21.5683 556.705 27.0403 559.297 33.5683C561.889 40.0003 563.185 47.4883 563.185 56.0323Z" stroke="black" stroke-width="6"/>
                <path d="M611.863 5.0563C626.743 5.0563 638.167 7.6963 646.135 12.9763C654.103 18.1603 658.087 26.7043 658.087 38.6083C658.087 50.6083 654.055 59.2963 645.991 64.6723C637.927 69.9523 626.407 72.5923 611.431 72.5923H604.375V106H581.911V7.6483C586.807 6.6883 591.991 6.0163 597.463 5.6323C602.935 5.2483 607.735 5.0563 611.863 5.0563ZM613.303 24.2083C611.671 24.2083 610.039 24.2563 608.407 24.3523C606.871 24.4483 605.527 24.5443 604.375 24.6403V53.4403H611.431C619.207 53.4403 625.063 52.3843 628.999 50.2723C632.935 48.1603 634.903 44.2243 634.903 38.4643C634.903 35.6803 634.375 33.3763 633.319 31.5523C632.359 29.7283 630.919 28.2883 628.999 27.2323C627.175 26.0803 624.919 25.3123 622.231 24.9283C619.543 24.4483 616.567 24.2083 613.303 24.2083Z" stroke="black" stroke-width="6"/>
                <path d="M674.582 106V6.2083H741.974V25.0723H697.046V44.6563H736.934V63.0883H697.046V87.1363H745.286V106H674.582Z" stroke="black" stroke-width="6"/>
                <path d="M791.143 5.0563C806.119 5.0563 817.591 7.7443 825.559 13.1203C833.527 18.4003 837.511 26.6563 837.511 37.8883C837.511 44.8963 835.879 50.6083 832.615 55.0243C829.447 59.3443 824.839 62.7523 818.791 65.2483C820.807 67.7443 822.919 70.6243 825.127 73.8883C827.335 77.0563 829.495 80.4163 831.607 83.9683C833.815 87.4243 835.927 91.0723 837.943 94.9123C839.959 98.6563 841.831 102.352 843.559 106H818.359C816.535 102.736 814.663 99.4243 812.743 96.0643C810.919 92.7043 808.999 89.4403 806.983 86.2723C805.063 83.1043 803.143 80.1283 801.223 77.3443C799.303 74.4643 797.383 71.8723 795.463 69.5683H784.375V106H761.911V7.6483C766.807 6.6883 771.847 6.0163 777.031 5.6323C782.311 5.2483 787.015 5.0563 791.143 5.0563ZM792.439 24.2083C790.807 24.2083 789.319 24.2563 787.975 24.3523C786.727 24.4483 785.527 24.5443 784.375 24.6403V51.7123H790.711C799.159 51.7123 805.207 50.6563 808.855 48.5443C812.503 46.4323 814.327 42.8323 814.327 37.7443C814.327 32.8483 812.455 29.3923 808.711 27.3763C805.063 25.2643 799.639 24.2083 792.439 24.2083Z" stroke="black" stroke-width="6" />
              </svg>
            </div>

            <div className="hero-banner-buttons">
              <a href={cv} download="CV-Cichocki" className="button-cv">
                <span>CV</span>
              </a>
              <a href="https://github.com/ArexSpeed" target="_blank" rel="noreferrer"  className="button-git">
                  <span><AiFillGithub/></span>
              </a>
            </div>

            <div className="hero-banner-desc">
             Welcome ! I am glad that you are here on my porfolio website. Here you can find out about me, my story and see all my projects. So let’s go, I hope you enjoy it ! 
            </div>

              
          </article>
          <article className="hero-image">
            <div className="square">
              <img src={profile} alt="AC" />
            </div>
          </article>
      </section>
      <section className="hero-next">
        <Link 
          to="about" 
          smooth={true}
          duration={500} 
          spy={true}
        >
          <svg className="hero-next-icon" style={{ width: '50px', height: '50px', color: 'white'}} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </section>
    </div>
  )
}

export default Hero
