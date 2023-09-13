import React from "react";
import "../App.css";
import Footer from "./Footer";
import Prefooter from "./Prefooter";

export default function SectionAmime() {
  return (
    <div className="bg-white text-black">
      <iframe
        id="iframe-trailer"
        className="w-full"
        height="500"
        src="https://www.dailymotion.com/embed/video/x33a1ra"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
        allowfullscreen="true"
      ></iframe>

      {/*partie 2 */}
      <div className="w-full mt-6  flex flex-wrap bg-white relative">
        <div className="w-[60%]">
          {/* Animation du text */}
          <div className="flex flex-col py-4 px-6 sm:px-12">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              <div className="z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="605"
                  height="54"
                  viewBox="0 0 605 54"
                  fill="none"
                  className="sm:h-[54px] h-[12px] w-[150px] sm:w-[305px] md:w-[405px] lg:w-[505px] xl:w-[605px] z-20"
                >
                  <path
                    d="M21.3028 40.9999C18.1868 40.9239 15.3748 40.3729 12.8668 39.3469C10.3968 38.2829 8.24984 36.8579 6.42584 35.0719C4.63984 33.2479 3.25284 31.1389 2.26484 28.7449C1.31484 26.3509 0.839844 23.7859 0.839844 21.0499C0.839844 18.3139 1.31484 15.7489 2.26484 13.3549C3.25284 10.9609 4.63984 8.87089 6.42584 7.08489C8.24984 5.26089 10.3968 3.81689 12.8668 2.75289C15.3748 1.68889 18.1868 1.13789 21.3028 1.09989H26.9458V7.08489H21.4738C19.4598 7.12289 17.6168 7.50289 15.9448 8.22489C14.2728 8.90889 12.8098 9.87789 11.5558 11.1319C10.3398 12.3859 9.38984 13.8679 8.70584 15.5779C8.02184 17.2499 7.67984 19.0739 7.67984 21.0499C7.67984 23.0259 8.02184 24.8689 8.70584 26.5789C9.38984 28.2509 10.3398 29.7139 11.5558 30.9679C12.8098 32.2219 14.2728 33.2099 15.9448 33.9319C17.6168 34.6159 19.4598 34.9579 21.4738 34.9579H26.9458V40.9999H21.3028Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M29.1898 40.9999L42.4708 5.20389C43.1168 3.56989 44.0478 2.37289 45.2638 1.61289C46.4798 0.814889 47.8668 0.41589 49.4248 0.41589C51.0208 0.41589 52.4268 0.795889 53.6428 1.55589C54.8968 2.31589 55.8278 3.51289 56.4358 5.14689L69.7738 40.9999H62.3068L59.2288 32.1649H39.5068L36.3148 40.9999H29.1898ZM41.5588 26.1229H57.1768L50.7928 7.48389C50.6408 7.10389 50.4508 6.81889 50.2228 6.62889C50.0328 6.43889 49.7858 6.34389 49.4818 6.34389C49.1778 6.34389 48.9308 6.45789 48.7408 6.68589C48.5508 6.87589 48.3988 7.14189 48.2848 7.48389L41.5588 26.1229Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M69.8802 40.9999L83.1612 5.20389C83.8072 3.56989 84.7382 2.37289 85.9542 1.61289C87.1702 0.814889 88.5572 0.41589 90.1152 0.41589C91.7112 0.41589 93.1172 0.795889 94.3332 1.55589C95.5872 2.31589 96.5182 3.51289 97.1262 5.14689L110.464 40.9999H102.997L99.9192 32.1649H80.1972L77.0052 40.9999H69.8802ZM82.2492 26.1229H97.8672L91.4832 7.48389C91.3312 7.10389 91.1412 6.81889 90.9132 6.62889C90.7232 6.43889 90.4762 6.34389 90.1722 6.34389C89.8682 6.34389 89.6212 6.45789 89.4312 6.68589C89.2412 6.87589 89.0892 7.14189 88.9752 7.48389L82.2492 26.1229Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M129.8 41.6839C126.646 41.6839 123.853 41.0379 121.421 39.7459C118.989 38.4159 117.07 36.5349 115.664 34.1029C114.296 31.6709 113.612 28.7639 113.612 25.3819V1.09989H120.395V25.9519C120.395 27.6999 120.775 29.3149 121.535 30.7969C122.333 32.2789 123.435 33.4759 124.841 34.3879C126.247 35.2619 127.919 35.6989 129.857 35.6989C131.795 35.6989 133.448 35.2619 134.816 34.3879C136.222 33.4759 137.305 32.2789 138.065 30.7969C138.825 29.3149 139.205 27.6999 139.205 25.9519V1.09989H146.045V25.3819C146.045 28.7639 145.342 31.6709 143.936 34.1029C142.53 36.5349 140.611 38.4159 138.179 39.7459C135.747 41.0379 132.954 41.6839 129.8 41.6839Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M154.14 40.9999V1.09989H171.81C174.356 1.09989 176.674 1.66989 178.764 2.80989C180.892 3.91189 182.583 5.46989 183.837 7.48389C185.091 9.49789 185.718 11.8349 185.718 14.4949C185.718 17.1549 185.053 19.5109 183.723 21.5629C182.431 23.5769 180.702 25.1349 178.536 26.2369L182.469 33.7039C182.697 34.1219 182.963 34.4449 183.267 34.6729C183.571 34.8629 183.97 34.9579 184.464 34.9579H187.827V40.9999H183.438C181.88 40.9999 180.493 40.6199 179.277 39.8599C178.061 39.0619 177.092 38.0169 176.37 36.7249L171.696 27.7759C171.316 27.8139 170.917 27.8329 170.499 27.8329C170.119 27.8329 169.739 27.8329 169.359 27.8329H160.923V40.9999H154.14ZM160.923 21.8479H170.955C172.399 21.8479 173.729 21.5629 174.945 20.9929C176.161 20.4229 177.111 19.5869 177.795 18.4849C178.517 17.3449 178.878 16.0149 178.878 14.4949C178.878 12.9369 178.517 11.6069 177.795 10.5049C177.073 9.40289 176.123 8.56689 174.945 7.99689C173.767 7.38889 172.456 7.08489 171.012 7.08489H160.923V21.8479Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M191.686 40.9999V35.0149H199.096V7.08489H191.686V1.09989H213.346V7.08489H205.936V35.0149H213.346V40.9999H191.686Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M253.589 40.9999C250.473 40.9239 247.661 40.3729 245.153 39.3469C242.683 38.2829 240.536 36.8579 238.712 35.0719C236.926 33.2479 235.539 31.1389 234.551 28.7449C233.601 26.3509 233.126 23.7859 233.126 21.0499C233.126 18.3139 233.601 15.7489 234.551 13.3549C235.539 10.9609 236.926 8.87089 238.712 7.08489C240.536 5.26089 242.683 3.81689 245.153 2.75289C247.661 1.68889 250.473 1.13789 253.589 1.09989H259.232V7.08489H253.76C251.746 7.12289 249.903 7.50289 248.231 8.22489C246.559 8.90889 245.096 9.87789 243.842 11.1319C242.626 12.3859 241.676 13.8679 240.992 15.5779C240.308 17.2499 239.966 19.0739 239.966 21.0499C239.966 23.0259 240.308 24.8689 240.992 26.5789C241.676 28.2509 242.626 29.7139 243.842 30.9679C245.096 32.2219 246.559 33.2099 248.231 33.9319C249.903 34.6159 251.746 34.9579 253.76 34.9579H259.232V40.9999H253.589Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M284.276 41.7409C281.122 41.7409 278.253 41.2089 275.669 40.1449C273.123 39.0429 270.938 37.5419 269.114 35.6419C267.328 33.7419 265.941 31.5379 264.953 29.0299C263.965 26.5219 263.471 23.8429 263.471 20.9929C263.471 18.1429 263.965 15.4829 264.953 13.0129C265.941 10.5049 267.328 8.30089 269.114 6.40089C270.938 4.50089 273.123 3.01889 275.669 1.95489C278.253 0.890887 281.122 0.358887 284.276 0.358887C287.468 0.358887 290.337 0.890887 292.883 1.95489C295.429 3.01889 297.614 4.50089 299.438 6.40089C301.262 8.30089 302.668 10.5049 303.656 13.0129C304.644 15.4829 305.138 18.1429 305.138 20.9929C305.138 23.8429 304.644 26.5219 303.656 29.0299C302.668 31.5379 301.262 33.7419 299.438 35.6419C297.614 37.5419 295.429 39.0429 292.883 40.1449C290.337 41.2089 287.468 41.7409 284.276 41.7409ZM284.276 35.6989C286.29 35.6989 288.152 35.3379 289.862 34.6159C291.572 33.8939 293.054 32.8679 294.308 31.5379C295.6 30.1699 296.588 28.5929 297.272 26.8069C297.956 25.0209 298.298 23.0829 298.298 20.9929C298.298 18.9029 297.956 16.9649 297.272 15.1789C296.588 13.3929 295.6 11.8539 294.308 10.5619C293.054 9.23189 291.572 8.20589 289.862 7.48389C288.152 6.72389 286.29 6.34389 284.276 6.34389C282.262 6.34389 280.4 6.72389 278.69 7.48389C277.018 8.20589 275.536 9.23189 274.244 10.5619C272.99 11.8539 272.002 13.3929 271.28 15.1789C270.596 16.9649 270.254 18.9029 270.254 20.9929C270.254 23.1209 270.596 25.0779 271.28 26.8639C272.002 28.6119 272.99 30.1699 274.244 31.5379C275.536 32.8679 277.018 33.8939 278.69 34.6159C280.4 35.3379 282.262 35.6989 284.276 35.6989Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M338.126 41.6839C335.922 41.6839 333.965 41.1709 332.255 40.1449C330.545 39.1189 329.215 37.7319 328.265 35.9839C327.315 34.2359 326.84 32.2979 326.84 30.1699V11.0749C326.84 10.2009 326.631 9.42189 326.213 8.73789C325.795 8.01589 325.225 7.44589 324.503 7.02789C323.819 6.60989 323.059 6.40089 322.223 6.40089C321.387 6.40089 320.627 6.60989 319.943 7.02789C319.259 7.44589 318.708 8.01589 318.29 8.73789C317.872 9.42189 317.663 10.2009 317.663 11.0749V40.9999H310.88V11.9299C310.88 9.76389 311.355 7.82589 312.305 6.11589C313.255 4.36789 314.585 2.98089 316.295 1.95489C318.005 0.928888 319.981 0.41589 322.223 0.41589C324.503 0.41589 326.498 0.928888 328.208 1.95489C329.918 2.98089 331.248 4.36789 332.198 6.11589C333.148 7.82589 333.623 9.76389 333.623 11.9299V31.0249C333.623 31.8989 333.832 32.6969 334.25 33.4189C334.668 34.1029 335.219 34.6539 335.903 35.0719C336.587 35.4899 337.328 35.6989 338.126 35.6989C338.962 35.6989 339.722 35.4899 340.406 35.0719C341.09 34.6539 341.622 34.1029 342.002 33.4189C342.42 32.6969 342.629 31.8989 342.629 31.0249V1.09989H349.469V30.1699C349.469 32.2979 348.994 34.2359 348.044 35.9839C347.094 37.7319 345.764 39.1189 344.054 40.1449C342.382 41.1709 340.406 41.6839 338.126 41.6839Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M357.2 40.9999V35.0149H374.357C375.459 35.0149 376.409 34.7489 377.207 34.2169C378.043 33.6849 378.689 33.0009 379.145 32.1649C379.639 31.2909 379.886 30.3789 379.886 29.4289C379.886 28.4029 379.658 27.4719 379.202 26.6359C378.746 25.7999 378.1 25.1349 377.264 24.6409C376.466 24.1469 375.535 23.8999 374.471 23.8999H367.346C365.104 23.8999 363.09 23.4439 361.304 22.5319C359.556 21.5819 358.169 20.2709 357.143 18.5989C356.117 16.9269 355.604 14.9509 355.604 12.6709C355.604 10.3909 356.098 8.39589 357.086 6.68589C358.074 4.93789 359.423 3.56989 361.133 2.58189C362.843 1.59389 364.781 1.09989 366.947 1.09989H384.104V7.08489H367.574C366.586 7.08489 365.693 7.33189 364.895 7.82589C364.097 8.31989 363.47 8.96589 363.014 9.76389C362.596 10.5619 362.387 11.4169 362.387 12.3289C362.387 13.2789 362.596 14.1529 363.014 14.9509C363.47 15.7109 364.078 16.3379 364.838 16.8319C365.636 17.2879 366.529 17.5159 367.517 17.5159H374.813C377.245 17.5159 379.335 17.9909 381.083 18.9409C382.869 19.8909 384.237 21.2019 385.187 22.8739C386.175 24.5459 386.669 26.4649 386.669 28.6309C386.669 31.1769 386.156 33.3809 385.13 35.2429C384.142 37.0669 382.774 38.4919 381.026 39.5179C379.316 40.5059 377.378 40.9999 375.212 40.9999H357.2Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M409.011 41.6839C405.857 41.6839 403.064 41.0379 400.632 39.7459C398.2 38.4159 396.281 36.5349 394.875 34.1029C393.507 31.6709 392.823 28.7639 392.823 25.3819V1.09989H399.606V25.9519C399.606 27.6999 399.986 29.3149 400.746 30.7969C401.544 32.2789 402.646 33.4759 404.052 34.3879C405.458 35.2619 407.13 35.6989 409.068 35.6989C411.006 35.6989 412.659 35.2619 414.027 34.3879C415.433 33.4759 416.516 32.2789 417.276 30.7969C418.036 29.3149 418.416 27.6999 418.416 25.9519V1.09989H425.256V25.3819C425.256 28.7639 424.553 31.6709 423.147 34.1029C421.741 36.5349 419.822 38.4159 417.39 39.7459C414.958 41.0379 412.165 41.6839 409.011 41.6839Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M444.01 40.9999C441.768 40.9999 439.792 40.5059 438.082 39.5179C436.41 38.4919 435.099 37.1239 434.149 35.4139C433.237 33.7039 432.781 31.8039 432.781 29.7139V1.09989H439.621V30.5689C439.621 31.7849 440.02 32.8299 440.818 33.7039C441.654 34.5779 442.718 35.0149 444.01 35.0149H454.612V40.9999H444.01Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M479.903 40.9999C477.661 40.9999 475.704 40.5059 474.032 39.5179C472.36 38.4919 471.049 37.1239 470.099 35.4139C469.188 33.7039 468.731 31.8039 468.731 29.7139V7.08489H457.103V1.09989H487.142V7.08489H475.514V30.5689C475.514 31.7849 475.932 32.8299 476.768 33.7039C477.604 34.5779 478.668 35.0149 479.96 35.0149H482.696V40.9999H479.903Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M491.214 40.9999V35.0149H498.624V7.08489H491.214V1.09989H512.874V7.08489H505.464V35.0149H512.874V40.9999H491.214Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M546.81 41.6839C544.606 41.6839 542.649 41.1709 540.939 40.1449C539.229 39.1189 537.899 37.7319 536.949 35.9839C535.999 34.2359 535.524 32.2979 535.524 30.1699V11.0749C535.524 10.2009 535.315 9.42189 534.897 8.73789C534.479 8.01589 533.909 7.44589 533.187 7.02789C532.503 6.60989 531.743 6.40089 530.907 6.40089C530.071 6.40089 529.311 6.60989 528.627 7.02789C527.943 7.44589 527.392 8.01589 526.974 8.73789C526.556 9.42189 526.347 10.2009 526.347 11.0749V40.9999H519.564V11.9299C519.564 9.76389 520.039 7.82589 520.989 6.11589C521.939 4.36789 523.269 2.98089 524.979 1.95489C526.689 0.928888 528.665 0.41589 530.907 0.41589C533.187 0.41589 535.182 0.928888 536.892 1.95489C538.602 2.98089 539.932 4.36789 540.882 6.11589C541.832 7.82589 542.307 9.76389 542.307 11.9299V31.0249C542.307 31.8989 542.516 32.6969 542.934 33.4189C543.352 34.1029 543.903 34.6539 544.587 35.0719C545.271 35.4899 546.012 35.6989 546.81 35.6989C547.646 35.6989 548.406 35.4899 549.09 35.0719C549.774 34.6539 550.306 34.1029 550.686 33.4189C551.104 32.6969 551.313 31.8989 551.313 31.0249V1.09989H558.153V30.1699C558.153 32.2979 557.678 34.2359 556.728 35.9839C555.778 37.7319 554.448 39.1189 552.738 40.1449C551.066 41.1709 549.09 41.6839 546.81 41.6839Z"
                    fill="#FF9A62"
                  />
                  <path
                    d="M594.955 53.4829C592.903 53.4829 591.098 53.1029 589.54 52.3429C588.02 51.5829 586.842 50.4619 586.006 48.9799C585.208 47.5359 584.809 45.8069 584.809 43.7929C584.809 43.2989 584.828 42.7859 584.866 42.2539C584.904 41.7599 584.961 41.2469 585.037 40.7149C581.921 40.8289 579.071 40.3919 576.487 39.4039C573.903 38.4159 571.661 37.0099 569.761 35.1859C567.899 33.3619 566.455 31.2149 565.429 28.7449C564.403 26.2369 563.89 23.5199 563.89 20.5939C563.89 17.8199 564.365 15.2169 565.315 12.7849C566.265 10.3529 567.633 8.20589 569.419 6.34389C571.205 4.48189 573.352 3.03789 575.86 2.01189C578.368 0.94789 581.161 0.41589 584.239 0.41589C587.355 0.41589 590.167 0.928888 592.675 1.95489C595.183 2.94289 597.33 4.34889 599.116 6.17289C600.902 7.99689 602.27 10.1059 603.22 12.4999C604.17 14.8559 604.645 17.4019 604.645 20.1379V42.9379C604.645 44.9519 604.265 46.7569 603.505 48.3529C602.783 49.9489 601.7 51.2029 600.256 52.1149C598.812 53.0269 597.045 53.4829 594.955 53.4829ZM594.499 47.3839C595.525 47.3839 596.323 47.0039 596.893 46.2439C597.501 45.4839 597.805 44.4389 597.805 43.1089V31.2529C596.209 32.4689 594.955 33.6659 594.043 34.8439C593.131 36.0219 592.466 37.1429 592.048 38.2069C591.668 39.2709 591.421 40.2209 591.307 41.0569C591.231 41.8929 591.193 42.5579 591.193 43.0519C591.193 43.9639 591.345 44.7429 591.649 45.3889C591.953 46.0349 592.352 46.5289 592.846 46.8709C593.378 47.2129 593.929 47.3839 594.499 47.3839ZM584.239 34.7869C584.847 34.7869 585.398 34.7679 585.892 34.7299C586.386 34.6539 586.918 34.5589 587.488 34.4449C588.096 33.3049 588.856 32.1459 589.768 30.9679C590.68 29.7899 591.801 28.6499 593.131 27.5479C594.461 26.4079 596.019 25.3249 597.805 24.2989V20.1379C597.805 18.1999 597.463 16.3949 596.779 14.7229C596.133 13.0509 595.183 11.6069 593.929 10.3909C592.713 9.13689 591.288 8.16789 589.654 7.48389C588.02 6.76189 586.215 6.40089 584.239 6.40089C582.301 6.40089 580.496 6.76189 578.824 7.48389C577.19 8.20589 575.765 9.21289 574.549 10.5049C573.333 11.7589 572.383 13.2599 571.699 15.0079C571.015 16.7179 570.673 18.5799 570.673 20.5939C570.673 22.6079 571.015 24.4889 571.699 26.2369C572.383 27.9469 573.333 29.4479 574.549 30.7399C575.765 31.9939 577.19 32.9819 578.824 33.7039C580.496 34.4259 582.301 34.7869 584.239 34.7869Z"
                    fill="#FF9A62"
                  />
                </svg>
              </div>
              <strong className="font-extralight text-black mt-2 mb-4">
                AGENCE DE PUBLICITE DIGITALE
              </strong>
              <p className="font-thin sm:text-base text-black text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                nobis rerum vero recusandae, facilis unde? Excepturi vitae eos,
                officia.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                explicabo exercitationem, officiis vero voluptate delectus, ab
                quibusdam iusto natus veritatis repellendus aut iste minima
                dolores sit earum beatae laborum soluta!
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis blanditiis dicta reiciendis? In necessitatibus
                explicabo ea natus totam esse perspiciatis minima laboriosam,
                dolore dolorem eius exercitationem excepturi veniam aperiam?
                Laudantium!
              </p>
              <strong className="w-full text-[#FF9A62] flex items-center justify-center font-thin my-4">
                VOUS FOURNIR 100% DE SATISFACTION
              </strong>
              <p className="font-light text-black text-xs sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti cumque esse asperiores voluptatum quasi tenetur
                molestias eos saepe reiciendis, culpa atque labore magnam
                accusantium neque iusto vero aliquid nam aspernatur.
              </p>
              <ul className="mt-4 list-inside text-black font-thin list-disc text-xs sm:text-base">
                <li>Lorem ipsum dolor, sit amet </li>
                <li>Lorem ipsum dolor, sit amet </li>
                <li>Lorem ipsum dolor, sit amet </li>
                <li>Lorem ipsum dolor, sit amet </li>
              </ul>
            </div>
            {/* nos services */}
            <strong
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              className="w-full  mt-28 text-[#FF9A62] font-thin text-2xl sm:text-2xl md:text-3xl xl:text-5xl flex items-center justify-center"
            >
              NOS SERVICES
            </strong>
            <div className="h-[550px] sm:h-[580px] md:h-[720px] bg-white">
              <img
                src="https://s3-alpha-sig.figma.com/img/5a2c/9267/ee5339817f564f6b8fc4c7a711a7d1b3?Expires=1694390400&Signature=XCoRX0UdrUXpmOJm5TBgcL-wqMPL4xmf8B~THQ1SjOBHwPw3wbSq1jn2fkg2kcZNyI36htoMHiEry8my05ldNlOUoelMEGroymxvhX7cPsvz0oFeoevehjImHzea56ExqttubrXzw0NoozngOzof6XZlmnRwwyo8TGXdPxk2Kz~IEosw-Siqoaj9JSyjf72hmLIZZsww5YBz5qTVKvgz8zNc6m24rHlCBzNbHf7~n3O6ZvEhh6auTmklhNsubAx0fsrFuRlRpFhYCJBLTEktoFgWbzVh5pcVwzD0BQW5mUMFOW-QHehSYXLBQN9ut6s2357K69j9xWXuMSZFDOs-Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                className=" max-w-full h-full ml-auto mr-auto block"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1300"
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="text-[#C52127]  font-bold flex-col flex w-full justify-end text-end items-end leading-none sm:pr-40 px-16">
            <span
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              2019
            </span>
            <span
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              className="text-black text-xs font-bold sm:text-base sm:font-normal"
            >
              creation de caauri consulting
            </span>
          </div>
          {/*roll up */}
          <div className="h-[850px] sm:h-[950px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/7882/e71e/3e0c30d2d351c5c0bc4f1a023899c09f?Expires=1694390400&Signature=jvdEFzNiFI6gYpkaggq70RQb9L04tnGDvarnM~WQTUM8eQT4yM7MiOuHRf1e5bLPtLaKjD4sWt5AjmDC-7JBNoYe7PZ8fWLay-7GX54rONQO1pObTrEJH8xI1wLb8gDsVk4fEbcq-1MCBOTa~CJrA3Ulz1L0YXKXCW67aUyaWYVxiIM2zflB4nETrrIFuiiNtNgrpcVmTS5TLp-4Z3tdWjljsWW7ISEXLcMk51MhomwyW9CXJcKoHPCU9rUItG7OWO-NrE8VOzaMHbUb6Umy9vO6hCe8gqq4gIaRYv8KDDQ30gNRQhPcgwUdIbsop4SVxiPv0K5sRUL8CFro94RAyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="max-w-full h-full ml-auto mr-auto block"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1300"
            />
          </div>
          <div className="text-[#C52127]  font-bold flex-col flex w-full justify-end text-end items-end leading-none pr-60 px-16">
            <span
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              2019
            </span>
            <span
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              className="text-black text-xs font-bold sm:text-base sm:font-normal"
            >
              creation de caauri consulting
            </span>
          </div>
          {/* div absolute */}
          <div className="absolute bg-black top-[67%] z-40 w-full items-center justify-center text-white  flex flex-col h-[300px]">
            <div>
              <span className="z-[60] font-semibold text-2xl">Google</span>{" "}
              <span className="z-[60] font-thin text-2xl">
                business profile
              </span>
            </div>
            <div className="mt-4 font-thin text-2xl flex gap-x-2">
              <span>4.O</span>{" "}
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star.svg" alt="" className="h-6 mt-1" />
              </span>
              <span>
                <img src="/icon/star_empty.svg" alt="" className="h-6 mt-1" />
              </span>
            </div>
            <div className="mt-5 font-thin text-xs text-white">
              note globale sur avis clients sur note fiche
            </div>
            <div className="border text-xs border-[#FFD700] w-[180px] mt-6 py-2 rounded-[60px] text-black flex items-center justify-center">
              <div className="bg-[#FFD700] text-center hover:scale-75 transition-all cursor-pointer w-[160px] h-[50px] flex rounded-[60px] items-center justify-center">
                {" "}
                partagez-nous <br /> votre experience
              </div>
            </div>
          </div>
          {/* image ipad */}
          <div className="bg-white mt-[1150px] h-[580px] ">
            <img
              src="https://s3-alpha-sig.figma.com/img/1955/f003/b0957b1e0de857ca1b822944cfe9c637?Expires=1694390400&Signature=F2ZQGTf72tRdCB4pPT~M9N36Y-DpKMZpH2j8yx1aMgdsqYxwk4hjVoE05FND65eQrrgputE3p78OKqjjKmyMBK-aZudsNGK0wWJgFxLMd8aCKUn4bSsWBy76HxWHrL318RsIcGba-cU8sCOwCe~4i4XBdS1gr-hmbKKLq8zuXmWxFM7B-pblLKW2U444dszqfEDkfGag5QhkMowjrn7~I~SSlRqX9nGRjlxP9t4uiM8rf0ADcJ8~Kd4K38yzskaDB4A8t~j~CC1SWxcYCbbgXcBpTBHC7KfuWOi7hwITgHsCXyI7mpHTd~1hqNKTHaFtyG7Exia9d8bdir0r6aI1pg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="max-w-full h-full ml-auto mr-auto block"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1300"
            />
          </div>
          {/* image ipad */}
        </div>
        {/* border-div */}
        <div className="w-[2%] flex flex-col items-center z-30  pt-20">
          {/*1 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1"
            height="336"
            viewBox="0 0 1 336"
            fill="none"
          >
            <path
              d="M1 0.618164L1 335.804H0L0 0.618164L1 0.618164Z"
              fill="#7B7B7B"
            />
          </svg>
          {/* 2 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            height="705"
            viewBox="0 0 110 804"
            fill="none"
            className="ml-24"
          >
            <path
              d="M0.990234 0.553223L109.753 803.333L108.763 803.468L-0.000663666 0.688202L0.990234 0.553223Z"
              fill="#7B7B7B"
            />
          </svg>
          {/* 3 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="ml-48 z-30"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="483"
            height="535"
            viewBox="0 0 483 1078"
            fill="none"
            className="mr-12"
          >
            <path
              d="M0.816406 1076.92L481.432 0.996947L482.345 1.40481L1.72945 1077.33L0.816406 1076.92Z"
              fill="#7B7B7B"
            />
          </svg>
          {/* 4 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="mr-72  z-30"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="165"
            height="735"
            viewBox="0 0 165 972"
            fill="none"
            className="mr-40"
          >
            <path
              d="M0.990234 0.711914L164.987 971.475L163.997 971.643L-0.000146766 0.880134L0.990234 0.711914Z"
              fill="#7B7B7B"
            />
          </svg>
          {/* 5 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="mr-8"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="370"
            height="235"
            viewBox="0 0 370 398"
            fill="none"
            className="mr-64"
          >
            <path
              d="M0.769531 397.095L368.95 0.593206L369.682 1.27649L1.50141 397.778L0.769531 397.095Z"
              fill="#7B7B7B"
            />
          </svg>
          {/* 6 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="mr-[475px]  z-30"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="231"
            height="1035"
            viewBox="0 0 231 1210"
            fill="none"
            className="mr-[675px]"
          >
            <path
              d="M0.900391 1209.76L229.647 0.909147L230.63 1.09507L1.88295 1209.94L0.900391 1209.76Z"
              fill="#7B7B7B"
            />
          </svg>
          {/* 7 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="mr-[875px]  z-30"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="535"
            height="834"
            viewBox="0 0 535 834"
            fill="none"
            className="h-[735px] mr-[405px]"
          >
            <path
              d="M1.83984 0.988281L534.442 832.969L533.6 833.508L0.997632 1.52742L1.83984 0.988281Z"
              fill="#7B7B7B"
            />
          </svg>
          {/*8 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="z-30 ml-16"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
              fill="#F2B749"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="246"
            viewBox="0 0 12 246"
            fill="none"
            className="ml-16"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.5 0.81868L6.5 233.183H5.5L5.5 0.81868H6.5Z"
              fill="#7B7B7B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 244.032C8.75888 244.032 11 241.789 11 239.016C11 236.243 8.75888 234 6 234C3.24112 234 1 236.243 1 239.016C1 241.789 3.24112 244.032 6 244.032ZM6 245.032C9.31371 245.032 12 242.339 12 239.016C12 235.694 9.31371 233 6 233C2.68629 233 -2.15538e-08 235.694 -4.81417e-08 239.016C-7.47297e-08 242.339 2.68629 245.032 6 245.032Z"
              fill="#F2B749"
            />
          </svg>
          {/*
            <img src="/icon/circle.svg" alt="" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B;] h-[335px]"></div>
          <img src="/icon/circle.svg" alt="" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B] h-[705px] rotate-[-4.5deg]  ml-14"></div>
          <img src="/icon/circle.svg" alt="" className="ml-28 z-30" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B;] h-[535px] rotate-[11.5deg]"></div>
          <img src="/icon/circle.svg" alt="" className="mr-28  z-30" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B;] h-[735px] rotate-[-8.5deg]"></div>
          <img src="/icon/circle.svg" alt="" className="ml-28 z-30" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B;] h-[235px] rotate-[25.5deg]"></div>
          <img src="/icon/circle.svg" alt="" className="mr-28  z-30" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B;] h-[1035px] mr-[310px] rotate-[10.5deg]"></div>
          <img src="/icon/circle.svg" alt="" className="z-30 mr-[505px]" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B;] h-[735px] mr-[310px] rotate-[-15.2deg]"></div>
          <img src="/icon/circle.svg" alt="" className="z-30 mr-[108px]" />
          <div className="bg-[#7B7B7B;] border border-[#7B7B7B;] h-[335px] mr-[108px] mt-2"></div>
          <img src="/icon/circle.svg" alt="" className="z-30 mr-[108px]" /> */}
        </div>
        {/* second-div */}
        <div className="w-[38%] flex flex-col">
          <div className="text-[#C52127] font-bold flex-col  h-[97px] relative flex justify-end items-start leading-none px-4">
            <span
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              1990
            </span>
            <span
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              className="text-black text-xs font-bold sm:text-base sm:font-normal"
            >
              création d'internet
            </span>
          </div>
          <div className=" text-[#C52127] font-bold flex-col justify-end flex h-[365px] items-start leading-none px-4">
            <span
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              1990
            </span>
            <span
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              className="text-black text-xs font-bold sm:text-base sm:font-normal"
            >
              création d'internet
            </span>
          </div>
          {/* logo_caauri */}
          <div className="flex-col flex h-[700px]  items-center justify-end">
            <div className="flex h-[1/2] w-full  justify-end">
              <img
                src="/icon/logo_none.png"
                alt=""
                className="max-w-full h-full ml-auto mr-auto block"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1300"
              />
            </div>
            <div className="h-1/2 text-end z-30 flex flex-col text-[#C52127] font-bold flex-end w-full items-start justify-end mr-52 sm:mr-96">
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
                className="w-full flex items-end justify-end md:w-[65%] lg:w-[53%] xl:w-[35%]"
              >
                2019
              </div>
              <span
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
                className="text-black text-xs font-bold sm:text-base sm:font-normal"
              >
                création de caauri consulting
              </span>
            </div>
          </div>
          <div className="flex-col flex h-[550px]  items-center justify-end">
            <img
              src="https://s3-alpha-sig.figma.com/img/aaa1/2607/44165d4c645f7e773b308c1d1823f599?Expires=1694390400&Signature=QZ-3JH9XNPfz8A8j9T3Dkj83TyviCE3MHHcqsmLNZi3DLLZTkgVhg5ZSFc8filtMuwXGU6x4MU63icl6yvVlQ31hrVwWiR2IDLUxtKI4zS0kqUSoNRhLHUlw2tRi0GeQmEYT~mC11uQ6sRB9VklN1MS9dRmKRYWChkFV1UXK-TuvaPADZite~j5fr9pQoisLnyojUrSVxupkwVHLuBPkBRGM0n4gAQ8oU7vgkLW2F3PI~13W5jdJU9ahK8whpRgu34QOmtL8IwsJLccsXQWfp3X1UqgcyugMTTnK5z~DK8lLK21JCUonnvQgZvJG2n3aUz2Jbl-HawnZ7mrhAudTJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="max-w-full h-full ml-auto mr-auto block"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1300"
            />
          </div>
          <div className="text-[#C52127] font-bold flex-col h-[750px] flex items-start justify-end leading-none px-16 sm:px-12">
            <span
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              1990
            </span>
            <span
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              className="text-black text-xs font-bold sm:text-base sm:font-normal"
            >
              création d'internet
            </span>
          </div>
          {/* iPad text */}
          <div className=" text-black mt-[1500px]">
            <div
              data-aos="fade-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1200"
            >
              <span className="  text-[#FF9A62]  text-5xl mr-32 font-thin">
                lorem lorem
              </span>
              <br />
              <br />
              <span className="text-3xl sm:text-4xl font-thin text-[#FF9A62]">
                Lorem ipsum{" "}
              </span>
              <br />
              <span className="text-2xl sm:text-3xl font-thin text-[#FF9A62]">
                Lorem ipsum{" "}
              </span>
              <br />
              <p className="mt-6 pr-4 text-xs sm:text-base text-black ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
                voluptate, corrupti maiores corporis asperiores dicta expedita,
                doloremque, esse architecto alias aut. Expedita recusandae nihil
                culpa asperiores aut sed fugit minima.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Prefooter />
      <Footer />
    </div>
  );
}
