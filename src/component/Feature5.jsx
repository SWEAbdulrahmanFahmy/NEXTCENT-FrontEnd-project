import React from 'react'
import image from "../assets/image.jpg"


const Feature5 = () => {
    const logo1=<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_211_2046)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.97901 3.15002C13.8233 3.15002 16.9397 6.26643 16.9397 10.1107V3.15002H23.9004C27.7446 3.15002 30.8611 6.26643 30.8611 10.1107C30.8611 13.955 27.7446 17.0714 23.9004 17.0714C27.7446 17.0714 30.8611 20.1879 30.8611 24.0321C30.8611 25.9409 30.0927 27.6703 28.8484 28.9278L28.8224 28.9541L28.7993 28.9771C27.5415 30.2232 25.8108 30.9928 23.9004 30.9928C22.003 30.9928 20.2829 30.2336 19.0272 29.0024C19.0109 28.9864 18.9946 28.9702 18.9784 28.9541C18.9632 28.9388 18.948 28.9235 18.9329 28.9081C17.7001 27.6523 16.9397 25.931 16.9397 24.0321C16.9397 27.8764 13.8233 30.9928 9.97901 30.9928C6.13472 30.9928 3.01831 27.8764 3.01831 24.0321V17.0714H9.97901C6.13472 17.0714 3.01831 13.955 3.01831 10.1107C3.01831 6.26643 6.13472 3.15002 9.97901 3.15002ZM15.5476 10.1107C15.5476 13.1862 13.0544 15.6793 9.97901 15.6793V4.54216C13.0544 4.54216 15.5476 7.03529 15.5476 10.1107ZM29.469 24.0321C29.469 20.9567 26.9758 18.4636 23.9004 18.4636C20.825 18.4636 18.3318 20.9567 18.3318 24.0321H29.469ZM4.41045 18.4636V24.0321C4.41045 27.1076 6.90358 29.6007 9.97901 29.6007C13.0544 29.6007 15.5476 27.1076 15.5476 24.0321V18.4636H4.41045ZM18.3318 15.6793V4.54216H23.9004C26.9758 4.54216 29.469 7.03529 29.469 10.1107C29.469 13.1862 26.9758 15.6793 23.9004 15.6793H18.3318Z" fill="#263238"/>
    </g>
    <defs>
    <clipPath id="clip0_211_2046">
    <rect width="27.8428" height="27.8428" fill="white" transform="translate(3.01831 3.15002)"/>
    </clipPath>
    </defs>
    </svg>
    const logo2=<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_211_2049)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0458 10.0838L3.09497 16.9647C4.48526 18.341 6.07345 19.501 7.80502 20.4084C8.28364 21.6653 9.03386 22.8439 10.0557 23.8554C13.9 27.6611 20.1328 27.6611 23.9771 23.8554C24.9989 22.8439 25.7491 21.6653 26.2277 20.4084C27.9593 19.501 29.5475 18.341 30.9377 16.9647L23.9926 10.0894C23.9874 10.0842 23.9823 10.0791 23.9771 10.074C20.1328 6.26832 13.9 6.26832 10.0557 10.074C10.0524 10.0772 10.0491 10.0805 10.0458 10.0838ZM23.312 21.6499C21.2864 22.3266 19.16 22.6732 17.0164 22.6732C14.8727 22.6732 12.7464 22.3266 10.7208 21.6499C10.9403 21.9381 11.1826 22.2147 11.4478 22.4773C14.5232 25.5218 19.5095 25.5218 22.5849 22.4773C22.8501 22.2147 23.0925 21.9381 23.312 21.6499ZM11.5906 11.3143C12.1128 11.6559 12.6682 11.9481 13.2492 12.1864C14.4435 12.6762 15.7236 12.9282 17.0164 12.9282C18.3091 12.9282 19.5892 12.6762 20.7835 12.1864C21.3646 11.9481 21.9199 11.6558 22.4422 11.3143C19.4051 8.45353 14.6276 8.45354 11.5906 11.3143Z" fill="#3B4158"/>
    </g>
    <defs>
    <clipPath id="clip0_211_2049">
    <rect width="27.8428" height="19.4899" fill="white" transform="translate(3.09497 7.21973)"/>
    </clipPath>
    </defs>
    </svg>
    const logo3=<svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_211_2052)">
    <path d="M38.5802 13.9505C38.5841 13.9215 38.5841 13.8921 38.5802 13.8631C38.5839 13.8395 38.5839 13.8153 38.5802 13.7916L38.2965 11.7503C38.2556 11.5061 38.1462 11.2778 37.9806 11.0911L37.9319 11.0354L37.8429 10.9481L32.9331 6.80188L33.0708 6.93692C32.9581 6.80475 32.8167 6.69903 32.6569 6.62755C32.497 6.55607 32.3228 6.52065 32.1472 6.52389H30.6564C30.414 6.51918 30.1771 6.59474 29.984 6.73835C29.7811 6.59561 29.5369 6.52043 29.2872 6.52389H27.7964C27.6009 6.52078 27.408 6.56835 27.2373 6.6618C27.0666 6.75525 26.9241 6.89126 26.8242 7.05606C26.6702 7.29144 26.6124 7.57503 26.6621 7.85035L26.8485 9.1371C26.725 9.06849 26.5853 9.03289 26.4434 9.03385H19.2246C18.9655 9.03544 18.7125 9.10987 18.4954 9.2483C18.2854 9.37715 18.1168 9.56165 18.0093 9.78047L17.4502 9.31184C17.2302 9.11226 16.9398 9.00408 16.64 9.01002H5.31348C5.05356 9.01466 4.79941 9.08585 4.57622 9.21653C4.27087 9.39174 4.0471 9.67663 3.95235 10.0108L0.355083 21.806C0.287869 22.0004 0.281257 22.21 0.336094 22.4081C0.390931 22.6061 0.504733 22.7837 0.662961 22.918C0.704191 22.9523 0.747482 22.9841 0.792595 23.0133C0.792595 23.0133 0.719666 22.9657 0.679156 22.926L5.58897 27.0801C5.79666 27.2676 6.06821 27.3724 6.3505 27.374H17.7662C18.0269 27.3673 18.2812 27.2934 18.5035 27.1595C18.6292 27.0922 18.7416 27.0034 18.8357 26.8974L18.8762 26.8418L18.941 26.7624L18.9896 26.675L19.5243 27.1278C19.729 27.3078 19.9947 27.4068 20.2697 27.4058H31.7097C31.9701 27.3973 32.2239 27.3234 32.4469 27.1913C32.5698 27.1198 32.6816 27.0316 32.7792 26.9292L32.8196 26.8736L32.8844 26.7942C32.9189 26.7439 32.9488 26.6908 32.9735 26.6353C33 26.5871 33.0217 26.5366 33.0384 26.4844L36.3197 15.7138V15.6185C36.3237 15.5815 36.3237 15.5443 36.3197 15.5073V15.4358C36.3236 15.4121 36.3236 15.388 36.3197 15.3643C36.3233 15.3141 36.3233 15.2637 36.3197 15.2134H37.3729C37.4646 15.2216 37.5568 15.2216 37.6484 15.2134H37.7213C37.7806 15.1961 37.8377 15.172 37.8915 15.1419H37.9725L38.1183 15.0307L38.1831 14.9831L38.2965 14.8401V14.7925L38.3776 14.6574C38.3731 14.6312 38.3731 14.6043 38.3776 14.578C38.3733 14.5651 38.3733 14.5512 38.3776 14.5383C38.3948 14.4917 38.4084 14.4439 38.4181 14.3953C38.4143 14.3796 38.4143 14.3633 38.4181 14.3476C38.4142 14.324 38.4142 14.2998 38.4181 14.2762C38.4181 14.2762 38.5802 13.9664 38.5802 13.9505Z" fill="black"/>
    <path d="M16.9722 9.91554C17.0152 9.95367 17.0453 10.0038 17.0583 10.0592C17.0714 10.1146 17.0668 10.1726 17.0452 10.2253L13.456 22.0126C13.4108 22.1413 13.3183 22.2488 13.1967 22.3144C13.0978 22.3793 12.9833 22.4176 12.8645 22.4256H1.45699C1.35957 22.421 1.26727 22.3814 1.19772 22.3144C1.15635 22.2769 1.12731 22.2281 1.11432 22.1744C1.10133 22.1206 1.10499 22.0643 1.12481 22.0126L4.72208 10.2253C4.76352 10.095 4.85308 9.98453 4.97323 9.91554C5.07382 9.85531 5.1878 9.81987 5.30542 9.81228H16.7129C16.8096 9.81319 16.9023 9.85011 16.9722 9.91554ZM11.0173 19.6376L13.1643 12.6002H7.15268L5.01374 19.6376H11.0173ZM27.8612 10.0347C27.9002 10.079 27.9488 10.1142 28.0035 10.1376C28.0583 10.1609 28.1176 10.1719 28.1772 10.1697H29.6599C29.7164 10.1702 29.772 10.1567 29.8216 10.1303C29.8713 10.1039 29.9132 10.0655 29.9435 10.0188C29.9698 9.98231 29.9884 9.94101 29.9981 9.89735C30.0079 9.85369 30.0085 9.80856 30.0001 9.76462L29.7085 7.6677C29.6807 7.57065 29.6309 7.48103 29.5627 7.40558C29.5237 7.36124 29.4751 7.32607 29.4204 7.30269C29.3657 7.27932 29.3063 7.26833 29.2467 7.27055H27.764C27.7076 7.27001 27.6519 7.28359 27.6023 7.30999C27.5527 7.3364 27.5107 7.37476 27.4805 7.42147C27.4237 7.53267 27.3995 7.60415 27.4237 7.6677L27.7235 9.76462C27.7389 9.86673 27.7872 9.96134 27.8612 10.0347ZM32.5685 7.65181C32.5407 7.55476 32.4908 7.46514 32.4227 7.38969C32.3854 7.34551 32.3382 7.31036 32.2848 7.28694C32.2314 7.26353 32.1732 7.25248 32.1148 7.25467H30.624C30.5685 7.25312 30.5136 7.26632 30.4651 7.29289C30.4166 7.31946 30.3763 7.3584 30.3486 7.40558C30.2947 7.47605 30.2713 7.56456 30.2838 7.65181L30.5835 9.74873C30.6023 9.84976 30.6501 9.94344 30.7213 10.0188C30.7609 10.0623 30.8096 10.0968 30.8642 10.1201C30.9187 10.1435 30.9777 10.1549 31.0372 10.1538H32.528C32.5834 10.1545 32.638 10.141 32.6863 10.1145C32.7347 10.088 32.7751 10.0495 32.8035 10.0029C32.8317 9.96737 32.8513 9.92609 32.8612 9.88211C32.871 9.83814 32.8706 9.79257 32.8602 9.74873L32.5685 7.65181ZM26.5568 10.829L26.411 9.79639H19.2246C19.1117 9.80249 19.0026 9.83815 18.9086 9.89965C18.8489 9.93155 18.797 9.97577 18.7564 10.0292C18.7159 10.0827 18.6876 10.1442 18.6737 10.2094L18.0741 12.1792C18.0502 12.2285 18.042 12.2837 18.0506 12.3376C18.0594 12.3915 18.0845 12.4415 18.1227 12.4811C18.191 12.5441 18.2802 12.5808 18.3739 12.5844H27.1078L24.9608 19.6218H16.2511C16.1388 19.6243 16.0295 19.6573 15.9352 19.7171C15.8206 19.7884 15.7369 19.8987 15.7002 20.0268L15.0926 21.9967C15.0728 22.0472 15.0675 22.1022 15.0775 22.1554C15.0876 22.2087 15.1124 22.2582 15.1493 22.2985C15.2155 22.3657 15.3053 22.4055 15.4004 22.4097H26.8404C26.9587 22.3997 27.0728 22.3616 27.1726 22.2985C27.2922 22.2326 27.382 22.1248 27.4237 21.9967L30.7131 11.2261H27.0106C26.9518 11.2272 26.8935 11.2166 26.8391 11.1947C26.7848 11.1728 26.7356 11.1403 26.6946 11.099C26.6276 11.027 26.5802 10.9396 26.5568 10.8449V10.829Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_211_2052">
    <rect width="38.2838" height="20.8821" fill="white" transform="translate(0.299316 6.52368)"/>
    </clipPath>
    </defs>
    </svg>
    const logo4=<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_211_2056)">
    <path d="M31.7852 9.70105C31.7852 9.72458 31.7852 9.754 31.779 9.77166C31.7484 10.0011 31.7484 10.2306 31.7667 10.466C31.779 10.5248 31.7913 10.5837 31.8403 10.6308C31.92 10.719 32.0426 10.7014 32.0917 10.5954C32.1162 10.5425 32.1162 10.4895 32.1039 10.4366C32.0426 10.213 32.0304 9.9776 32.0243 9.74812C32.0243 9.73635 32.0243 9.7187 32.0243 9.70105C32.0917 9.69516 32.153 9.68928 32.2082 9.68928C32.2511 9.68339 32.2879 9.67751 32.3186 9.65985C32.4105 9.61278 32.4105 9.51275 32.3124 9.46568C32.2756 9.44802 32.2266 9.44214 32.1837 9.44214C32.0304 9.44802 31.8771 9.44802 31.7238 9.44802C31.6687 9.44802 31.6135 9.45391 31.5583 9.45979C31.5276 9.46568 31.4909 9.46568 31.4664 9.48333C31.4234 9.50098 31.3989 9.5304 31.3989 9.57159C31.405 9.61278 31.4234 9.63632 31.4664 9.65397C31.4909 9.67163 31.5215 9.67751 31.5522 9.67751C31.6257 9.68339 31.7055 9.69516 31.7852 9.70105ZM33.4711 9.97172C33.4711 9.9776 33.4772 9.98349 33.4772 9.98349C33.5018 10.1424 33.5263 10.2954 33.5447 10.4483C33.5508 10.5013 33.557 10.5484 33.5937 10.5896C33.6734 10.6896 33.7961 10.6778 33.8512 10.5719C33.8758 10.5189 33.8819 10.466 33.8696 10.4071C33.8328 10.2306 33.8144 10.0541 33.7777 9.88346C33.7531 9.77754 33.7225 9.67751 33.6918 9.58336C33.6734 9.52452 33.6305 9.48333 33.557 9.47745C33.4834 9.46568 33.4282 9.50098 33.3975 9.55394C33.3608 9.60101 33.3301 9.64809 33.3056 9.70105C33.2627 9.79519 33.2259 9.88934 33.1769 9.9776C33.1707 10.0011 33.1646 10.0188 33.1523 10.0364C33.1462 10.0247 33.1401 10.0188 33.1401 10.0188C33.0603 9.87169 32.9868 9.72458 32.9071 9.58336C32.8948 9.57159 32.8887 9.55982 32.8826 9.54806C32.8458 9.4951 32.8029 9.46568 32.7354 9.46568C32.6741 9.47156 32.625 9.50687 32.5944 9.55982C32.5821 9.58336 32.5821 9.60101 32.576 9.62455C32.5515 9.81285 32.5208 10.0011 32.4963 10.1894C32.484 10.2954 32.4779 10.4013 32.4779 10.5072C32.4718 10.5307 32.4779 10.5601 32.4902 10.5837C32.5025 10.6307 32.5392 10.6602 32.5883 10.6661C32.6496 10.6719 32.6925 10.6543 32.7109 10.6072C32.7293 10.5719 32.7354 10.5425 32.7416 10.5131C32.7661 10.4071 32.7845 10.3071 32.8029 10.2071C32.8151 10.1482 32.8212 10.1012 32.8397 10.0364C32.8519 10.06 32.8641 10.0776 32.8764 10.0953C32.9316 10.1659 32.9868 10.2365 33.0542 10.2954C33.1217 10.3424 33.1769 10.3365 33.232 10.2836C33.2443 10.2718 33.2504 10.2659 33.2627 10.2542C33.3179 10.1718 33.3853 10.0894 33.4405 10.007C33.4527 9.99525 33.4589 9.98349 33.4711 9.97172Z" fill="back"/>
    <path d="M19.3447 9.81659C19.3021 9.92842 19.294 10.009 19.3136 10.0759C19.3354 10.167 19.3918 10.1968 19.4683 10.1737C20.1884 10.0027 21.7675 10.4879 22.3521 10.6231C22.49 10.6514 22.6022 10.4806 22.5081 10.3275C22.3708 10.1791 20.7924 9.54412 20.1902 9.5095C19.9541 9.4967 19.5321 9.4386 19.3447 9.81659Z" fill="black"/>
    <path d="M25.516 7.76096C25.5928 7.80347 25.6357 7.84403 25.6568 7.88934C25.6884 7.94878 25.6717 7.9899 25.6187 8.01089C25.1427 8.23386 24.5093 9.1938 24.2536 9.52488C24.1917 9.60104 24.0487 9.55678 24.0271 9.43153C24.0315 9.28992 24.593 8.24817 24.9064 7.96443C25.0295 7.85365 25.233 7.63629 25.516 7.76096Z" fill="black"/>
    <path d="M21.7255 7.28845C21.8177 7.22175 21.9135 7.19838 21.9624 7.24173C22.6806 7.83123 23.0615 8.76475 23.2973 9.61937C23.3062 9.63928 23.3067 9.66785 23.2996 9.69766C23.2967 9.72314 23.2773 9.75005 23.2465 9.77087C23.2136 9.79386 23.1853 9.80086 23.1719 9.78105C22.8572 9.37014 21.0594 7.77136 21.7255 7.28845Z" fill="black"/>
    <path d="M6.51682 17.5088C6.68895 17.3858 6.87608 17.2834 7.07411 17.204C7.28129 17.1471 7.50211 17.1565 7.70322 17.2309C7.90428 17.3052 8.07473 17.4403 8.18867 17.6158C8.2906 17.7909 8.33046 17.993 8.30233 18.1918C8.27419 18.3905 8.17955 18.575 8.03262 18.7176C7.91872 18.8333 7.7894 18.934 7.64812 19.0172C7.0184 19.4076 6.38307 19.7767 5.74777 20.1671C5.61777 20.2649 5.47987 20.3525 5.33537 20.4292C5.11559 20.5344 4.86441 20.5626 4.62526 20.5089C4.38613 20.4552 4.17407 20.3229 4.02575 20.1351C3.91488 20.002 3.82131 19.8566 3.74711 19.7018C3.14524 18.4877 2.52108 17.2788 1.94151 16.0433C1.67401 15.5084 1.45667 14.8933 1.2449 14.2996C1.15328 14.1271 1.13539 13.9271 1.19503 13.7422C1.25468 13.5572 1.38716 13.4018 1.56429 13.3092C1.74143 13.2165 1.94924 13.1938 2.14353 13.246C2.33782 13.2981 2.50326 13.4209 2.60467 13.5882C2.91638 13.9858 3.1923 14.4081 3.42946 14.8506C4.03132 15.9203 4.60533 16.99 5.18491 18.0277C5.21865 18.085 5.25587 18.1403 5.29636 18.1935C5.73259 18.0174 6.14289 17.7873 6.51682 17.5088Z" fill="black"/>
    <path d="M12.7398 17.1357C11.3634 18.6815 9.05619 18.291 7.89704 16.3013C7.07224 14.8893 6.92736 12.5572 8.72184 11.0864C9.10503 10.7784 9.56323 10.5686 10.0537 10.4766C10.6551 10.3938 11.2684 10.4957 11.8059 10.7675C12.3433 11.0394 12.7775 11.4674 13.0464 11.9903C14.0272 13.7019 13.8879 15.8841 12.7398 17.1357ZM12.1826 13.5307C12.0363 13.1101 11.743 12.751 11.3522 12.5144C11.1311 12.3632 10.8624 12.2896 10.5914 12.3062C10.3204 12.3228 10.0636 12.4284 9.86426 12.6054C9.06736 13.2847 8.90014 14.8946 9.47971 15.8521C9.5536 16.0082 9.66208 16.1469 9.79766 16.2586C9.93324 16.3702 10.0926 16.4521 10.2646 16.4985C10.4366 16.5448 10.617 16.5546 10.7934 16.527C10.9697 16.4994 11.1376 16.4352 11.2854 16.3388C11.7173 16.0173 12.0343 15.5747 12.192 15.0724C12.3499 14.5701 12.3407 14.0331 12.1659 13.5361L12.1826 13.5307Z" fill="black"/>
    <path d="M18.3572 14.2046C18.2163 14.2337 18.0707 14.2354 17.929 14.2097C17.7874 14.1839 17.6525 14.1313 17.5324 14.0548C17.4273 13.9971 17.3368 13.9178 17.2675 13.8225C17.1982 13.7272 17.1517 13.6184 17.1315 13.5038C17.1112 13.3892 17.1177 13.2718 17.1504 13.1599C17.1831 13.048 17.2413 12.9445 17.3207 12.8567C17.459 12.6803 17.6554 12.5541 17.8779 12.4984C18.459 12.3365 19.0572 12.2378 19.6613 12.2042C19.794 12.1894 19.9284 12.2001 20.0567 12.2359C20.1851 12.2717 20.3046 12.3316 20.4085 12.4124C20.5123 12.4931 20.5983 12.5929 20.6614 12.7059C20.7244 12.819 20.7633 12.943 20.7758 13.0707C20.95 13.6978 20.969 14.3554 20.8315 14.9909C20.33 17.0447 18.6024 17.7508 16.663 17.0929C16.1187 16.917 15.6413 16.5892 15.2921 16.1515C14.8264 15.6244 14.4961 14.9997 14.328 14.3276C14.1918 13.7291 14.2067 13.1082 14.3716 12.5164C14.5364 11.9246 14.8463 11.3792 15.2754 10.9258C15.6827 10.433 16.2112 10.0452 16.8135 9.79726C17.1941 9.59593 17.6395 9.53868 18.0619 9.6368C18.1577 9.66225 18.2446 9.71185 18.3138 9.78044C18.3829 9.84903 18.4316 9.93412 18.4549 10.0269C18.4783 10.1197 18.4753 10.2167 18.4463 10.308C18.4174 10.3993 18.3635 10.4815 18.2903 10.5461C18.1512 10.667 18 10.7745 17.8389 10.867C17.3435 11.1698 16.9123 11.56 16.5683 12.017C16.3428 12.3126 16.1875 12.6522 16.1134 13.0116C16.0392 13.3711 16.048 13.7418 16.1392 14.0976C16.2656 14.5828 16.5461 15.0183 16.9417 15.3438C18.1677 16.4136 19.7615 15.3813 19.4829 13.9211C19.0761 14.0174 18.7194 14.119 18.3572 14.2046Z" fill="black"/>
    <path d="M25.8472 17.2213C24.036 18.2911 21.974 17.2213 21.5226 14.9749C21.1938 13.3703 21.818 11.1238 24.0026 10.268C24.4674 10.0899 24.9715 10.0273 25.4682 10.0862C26.065 10.191 26.6125 10.473 27.0334 10.8924C27.4543 11.3117 27.7275 11.8473 27.8144 12.4236C28.1822 14.333 27.3463 16.3709 25.8472 17.2213ZM26.4769 13.6217C26.4764 13.1773 26.3126 12.7474 26.0144 12.4075C25.855 12.1973 25.6245 12.0467 25.3623 11.9813C25.1001 11.916 24.8224 11.9399 24.5765 12.0492C23.5957 12.4556 22.9047 13.9319 23.1555 15.0177C23.1747 15.1881 23.2323 15.3524 23.3245 15.4992C23.4167 15.6459 23.5412 15.7716 23.6894 15.8674C23.8374 15.9631 24.0055 16.0267 24.1819 16.0537C24.3582 16.0805 24.5386 16.0702 24.7103 16.0232C25.2287 15.8494 25.6776 15.5246 25.9943 15.094C26.3111 14.6634 26.4798 14.1487 26.4769 13.6217Z" fill="black"/>
    <path d="M29.646 17.6706C29.6187 17.8664 29.5115 18.0437 29.3479 18.1636C29.1843 18.2834 28.9779 18.336 28.7739 18.3098C28.5699 18.2835 28.3852 18.1806 28.2603 18.0236C28.1354 17.8666 28.0806 17.6685 28.108 17.4727C28.1353 17.2769 28.2426 17.0996 28.4061 16.9797C28.5697 16.8599 28.7761 16.8073 28.9801 16.8335C29.1841 16.8598 29.3688 16.9627 29.4937 17.1197C29.6186 17.2767 29.6734 17.4749 29.646 17.6706ZM29.1612 10.4552C29.2672 10.2998 29.4227 10.1815 29.6045 10.1179C29.7863 10.0543 29.9846 10.0488 30.1699 10.1022C30.3583 10.1474 30.5247 10.2534 30.6414 10.4024C30.7581 10.5514 30.8179 10.7343 30.8108 10.9205C30.7862 11.2193 30.7397 11.516 30.6715 11.8084C30.4876 12.7979 30.3092 13.7874 30.1142 14.7663C30.025 15.1567 29.908 15.5311 29.7798 15.9269C29.7352 16.0506 29.6607 16.1624 29.5625 16.2532C29.5014 16.3215 29.4234 16.3738 29.3356 16.4054C29.2479 16.4371 29.1532 16.4469 29.0604 16.4341C28.9677 16.4213 28.8797 16.3863 28.8048 16.3322C28.7299 16.2781 28.6704 16.2068 28.6318 16.1248C28.5656 15.9777 28.5296 15.8197 28.5259 15.6595C28.5259 14.9962 28.5259 14.3277 28.5705 13.6591C28.6463 12.7049 28.7953 11.7574 29.0163 10.8243C29.0424 10.6992 29.0914 10.5797 29.1612 10.4712V10.4552Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16219 21.9687C4.09639 22.1097 4.07834 22.2668 4.1105 22.4181C4.13189 22.6175 4.17887 22.8136 4.25038 23.002C4.33966 23.2326 4.43955 23.4607 4.56273 23.7419C4.59106 23.8066 4.62066 23.8741 4.65164 23.9452C4.81775 24.326 5.02617 24.8128 5.30418 25.5172C5.38287 25.7174 5.45275 25.9191 5.52311 26.1223C5.55154 26.2043 5.58006 26.2867 5.60926 26.3692C5.71393 26.6627 5.89404 26.9263 6.13276 27.1352C6.23414 27.25 6.3686 27.3337 6.51937 27.3755C6.67308 27.4182 6.83656 27.4155 6.98864 27.3678C7.14072 27.32 7.27429 27.2295 7.37202 27.1079C7.46783 26.9886 7.5248 26.8449 7.53588 26.6948C7.59803 26.4024 7.57682 26.0992 7.47437 25.8173C7.31178 25.3492 7.12656 24.8804 6.91298 24.4219L6.912 24.4199C6.56063 23.7026 6.20348 22.9902 5.82942 22.2775L5.82662 22.2725C5.71712 22.0869 5.57481 21.9209 5.40609 21.782C5.29656 21.6581 5.14548 21.5745 4.97863 21.5457C4.80823 21.5163 4.63248 21.546 4.48277 21.6294C4.34114 21.707 4.22887 21.8258 4.16219 21.9687Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.52871 20.2023C8.97778 20.0654 8.40242 20.0454 7.8427 20.1439C7.40918 20.1849 6.98281 20.2808 6.68673 20.471C6.53615 20.5677 6.4144 20.6919 6.34668 20.8499C6.27859 21.0086 6.26989 21.1902 6.3257 21.3925C6.42758 21.7631 6.55989 22.1235 6.69173 22.4826L6.71309 22.5408L6.71361 22.5421C7.11058 23.5855 7.51135 24.6254 7.91575 25.6617C7.96291 25.8251 8.0296 25.9826 8.11447 26.1312L8.11606 26.134C8.22818 26.3186 8.37199 26.4837 8.54141 26.6224C8.62614 26.6986 8.73092 26.7514 8.84454 26.775C8.95928 26.7987 9.07859 26.7918 9.1895 26.755C9.30045 26.7181 9.39869 26.6527 9.47356 26.5659C9.54722 26.4806 9.59545 26.3777 9.61316 26.2682C9.68626 25.9709 9.66284 25.6591 9.546 25.3749C9.50955 25.2792 9.48094 25.1815 9.4508 25.0785C9.44075 25.0442 9.43056 25.0093 9.41981 24.9738C10.3455 24.6265 11.3305 24.1595 11.6768 23.0731C11.8125 22.6977 11.8238 22.2912 11.7092 21.9093C11.5945 21.527 11.3592 21.1882 11.0357 20.9394C10.5954 20.5912 10.081 20.3396 9.52871 20.2023ZM8.00161 21.5348C8.01983 21.5298 8.0382 21.5251 8.05662 21.5208C8.65928 21.4298 9.27587 21.551 9.79286 21.8619C10.0207 22.0139 10.114 22.1829 10.1301 22.3455C10.1466 22.5129 10.0832 22.6943 9.95578 22.8687C9.71505 23.1981 9.27573 23.4617 8.87889 23.5109C8.58959 22.8714 8.29581 22.2061 8.00161 21.5348Z" fill="black"/>
    <path d="M13.2016 19.0319C13.8577 18.741 14.6704 18.6908 15.3064 18.8953C15.4665 18.9401 15.6055 19.0369 15.6995 19.1693C15.7928 19.3008 15.8359 19.4593 15.8215 19.6178C15.8206 19.7206 15.7943 19.8218 15.7448 19.9131C15.6944 20.0061 15.6215 20.086 15.5321 20.1462C15.4427 20.2063 15.3396 20.245 15.2314 20.2588C15.1232 20.2727 15.0131 20.2613 14.9104 20.2256L14.9026 20.2229L14.8953 20.2192C14.8427 20.1928 14.7869 20.173 14.7292 20.16L14.7256 20.1592C14.2782 20.0452 13.8562 20.2342 13.7021 20.4663C13.6286 20.5771 13.6195 20.6888 13.6807 20.7905C13.7463 20.8993 13.9071 21.0215 14.2325 21.1086C14.322 21.1322 14.4137 21.1549 14.5068 21.178C14.7641 21.242 15.0316 21.3084 15.2901 21.4005L15.2911 21.4009C16.4841 21.8365 16.9283 22.7388 16.7763 23.5874C16.6258 24.4267 15.8956 25.1904 14.7974 25.3706C14.3978 25.4556 13.982 25.439 13.591 25.3226C13.1991 25.2057 12.8458 24.9925 12.5663 24.704L12.559 24.6965C12.4707 24.5878 12.4114 24.4602 12.3851 24.3247C12.3609 24.2024 12.3736 24.0761 12.4218 23.9605C12.4696 23.8456 12.5506 23.7462 12.655 23.6738C12.7654 23.5916 12.8984 23.5424 13.0376 23.5321C13.1764 23.5219 13.3152 23.5508 13.4371 23.6153C13.5588 23.6717 13.672 23.7437 13.7736 23.8293L13.7755 23.8309C13.9552 23.9887 14.1727 24.0298 14.3812 23.9917C14.5928 23.9531 14.7917 23.8329 14.9197 23.6735C15.0468 23.5151 15.0979 23.3269 15.0373 23.1442C14.9764 22.9602 14.7931 22.754 14.3905 22.5817C14.2852 22.5388 14.1761 22.5042 14.0626 22.4705C14.032 22.4614 14.0008 22.4524 13.9693 22.4432C13.8854 22.4187 13.799 22.3936 13.7143 22.3658C13.656 22.3467 13.5982 22.3286 13.5409 22.3107C13.3842 22.2618 13.2316 22.214 13.0846 22.15C12.7648 22.0455 12.4885 21.8449 12.2968 21.5777C12.1044 21.3095 12.0075 20.9888 12.0207 20.6634C12.0217 19.8705 12.5421 19.3243 13.2016 19.0319Z" fill="black"/>
    <path d="M21.5196 18.9475C21.3923 18.8878 21.2517 18.8595 21.1102 18.8651C20.9688 18.8707 20.831 18.9099 20.7093 18.9794C20.5884 19.0484 20.4872 19.1451 20.4147 19.2607C20.3482 19.3581 20.3021 19.467 20.2792 19.5814C20.2562 19.6957 20.2568 19.8131 20.2808 19.9271C20.3045 20.0737 20.3307 20.2162 20.3567 20.3567C20.3996 20.5892 20.4414 20.8165 20.469 21.0483L20.47 21.0542C20.5328 21.4177 20.5656 21.7853 20.5686 22.1537L20.5689 22.1589C20.5903 22.5568 20.4491 22.9469 20.1754 23.2464L20.1711 23.2518C20.082 23.3613 19.963 23.4449 19.8272 23.4932C19.6915 23.5415 19.5445 23.5526 19.4026 23.5252C19.2606 23.4979 19.1294 23.4332 19.0236 23.3384C18.9178 23.2435 18.8415 23.122 18.8034 22.988C18.7221 22.7055 18.675 22.415 18.663 22.1222L18.8019 19.9997C18.804 19.972 18.8063 19.9436 18.8087 19.9149C18.814 19.8504 18.8194 19.7848 18.8217 19.7235C18.8249 19.6334 18.8221 19.5407 18.8003 19.453C18.7779 19.3634 18.7353 19.2781 18.6598 19.2055C18.585 19.1336 18.484 19.0805 18.357 19.0444C18.1273 18.9806 17.9331 18.9826 17.7712 19.0486C17.6093 19.1145 17.4983 19.2369 17.4198 19.3783C17.3419 19.5185 17.2919 19.6845 17.254 19.8507C17.2259 19.9741 17.2033 20.1036 17.1819 20.2269C17.1745 20.2694 17.1672 20.3111 17.1599 20.3516L17.1597 20.3528C17.0449 21.0288 17.0107 21.7152 17.0578 22.3987C17.0666 22.7681 17.1469 23.1327 17.2946 23.4739C17.4612 23.9141 17.763 24.2955 18.1601 24.5678C18.558 24.8406 19.0329 24.991 19.5219 24.9989C20.0108 25.0068 20.4908 24.872 20.8981 24.6123C21.3048 24.353 21.62 23.9813 21.802 23.5464C22.0566 22.9924 22.1761 22.39 22.1514 21.7849C22.1365 21.3432 22.1114 20.8981 22.0865 20.4553C22.0743 20.238 22.0621 20.0213 22.0511 19.8058C22.0456 19.5898 21.9714 19.3805 21.8384 19.2062C21.7561 19.0959 21.6465 19.007 21.5196 18.9475Z" fill="black"/>
    <path d="M26.0222 22.2754C26.0093 22.2912 25.9957 22.3074 25.9815 22.3244C25.878 21.7515 25.7821 21.1787 25.6861 20.6051C25.6516 20.3993 25.617 20.1926 25.5822 19.9866L25.5782 19.9636L25.5655 19.9437C25.5415 19.9063 25.5392 19.8697 25.5392 19.7915V19.7825L25.5377 19.7735C25.5117 19.6121 25.4356 19.4618 25.3194 19.3424C25.2035 19.2234 25.053 19.1405 24.8874 19.1046C24.7221 19.0654 24.5484 19.0741 24.3881 19.1294C24.2283 19.1846 24.0889 19.2838 23.9875 19.4145C23.9032 19.5148 23.8341 19.6261 23.7823 19.7451C23.6648 20.0012 23.5462 20.2581 23.4273 20.5156L23.4252 20.52C23.1284 21.1629 22.8296 21.8101 22.5395 22.4624L22.5386 22.4645C22.3605 22.8874 22.2134 23.3331 22.0669 23.7774C22.0376 23.866 22.0084 23.9547 21.9789 24.0431C21.926 24.1833 21.9029 24.3322 21.9108 24.4811C21.9012 24.6143 21.9344 24.7473 22.0061 24.8619C22.0792 24.9789 22.1887 25.071 22.3191 25.1251C22.4574 25.1833 22.6119 25.1957 22.7584 25.1602C22.9045 25.1249 23.0342 25.0439 23.1272 24.9302C23.2459 24.79 23.348 24.6371 23.4313 24.4752C23.6771 23.9927 23.912 23.5042 24.1458 23.0179C24.2363 22.8298 24.3242 22.6614 24.4242 22.4779C24.4311 22.5005 24.4381 22.5226 24.4453 22.5447C24.5501 22.9877 24.7271 23.4119 24.9696 23.802C25.0155 23.8846 25.0794 23.9568 25.157 24.0137C25.2355 24.0712 25.3261 24.1116 25.4226 24.1321C25.519 24.1526 25.6189 24.1527 25.7154 24.1324C25.8117 24.1121 25.9026 24.0717 25.9811 24.0144L26.1366 23.9027L27.3435 22.927L27.2721 23.3635C27.1742 23.9636 27.077 24.5586 26.9737 25.1538C26.9061 25.4176 26.9062 25.6931 26.974 25.9568C27.0033 26.1052 27.0781 26.2418 27.1888 26.3493C27.3004 26.4576 27.4433 26.5312 27.599 26.5605C27.7547 26.5899 27.9161 26.5736 28.062 26.5138C28.2059 26.455 28.3282 26.3565 28.4138 26.2311C28.6128 25.9941 28.7366 25.7072 28.7706 25.4046C28.8219 24.9772 28.8797 24.544 28.9376 24.1109C29.0043 23.6117 29.071 23.1126 29.1273 22.6232L29.1275 22.6217C29.1817 22.0859 29.2079 21.5479 29.2061 21.0095C29.218 20.8394 29.1739 20.6699 29.0798 20.5251C28.9855 20.3798 28.8457 20.2668 28.6806 20.2021C28.5088 20.1272 28.3165 20.1071 28.1319 20.145C27.9486 20.1826 27.7826 20.2754 27.6581 20.4098C27.4355 20.6074 27.2267 20.8188 27.0329 21.0427L27.0316 21.0443C26.8202 21.2972 26.6101 21.5551 26.4014 21.8113C26.2746 21.967 26.148 22.1224 26.0222 22.2754Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_211_2056">
    <rect width="32.7153" height="20.186" fill="white" transform="translate(1.1604 7.21973)"/>
    </clipPath>
    </defs>
    </svg>
    const logo5=<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_211_2072)">
    <path d="M30.0803 8.5032C30.0803 8.82756 30.3465 9.09051 30.6749 9.09051H31.2694C31.5978 9.09051 31.864 8.82756 31.864 8.5032C31.864 8.17884 31.5978 7.91589 31.2694 7.91589H30.6749C30.3465 7.91589 30.0803 8.17884 30.0803 8.5032Z" fill="#212326"/>
    <path d="M12.8381 26.7098H15.7264L14.8856 25.8792C14.6626 25.6589 14.3601 25.5352 14.0448 25.5352H12.8381C8.24101 25.5352 4.51431 21.8539 4.51431 17.3128C4.51431 12.7718 8.24101 9.09052 12.8381 9.09051H22.3511C26.9482 9.09051 30.6749 12.7718 30.6749 17.3128C30.6749 21.8539 26.9482 25.5352 22.3511 25.5352H18.7925C18.3194 25.5352 17.8657 25.3495 17.5312 25.0191L16.5462 24.046C15.9886 23.4953 15.2325 23.1859 14.444 23.1859H12.8381C9.55446 23.1859 6.89255 20.5565 6.89255 17.3128C6.89255 14.0692 9.55446 11.4397 12.8381 11.4397H22.3511C25.6348 11.4397 28.2967 14.0692 28.2967 17.3128C28.2967 20.5565 25.6348 23.1859 22.3511 23.1859H20.0661C19.5931 23.1859 19.1394 23.0003 18.8049 22.6699L17.8197 21.6968C17.2622 21.1461 16.5061 20.8367 15.7177 20.8367H12.8381C10.868 20.8367 9.27079 19.259 9.27079 17.3128C9.27079 15.3667 10.868 13.789 12.8381 13.789H22.3511C24.3213 13.789 25.9185 15.3667 25.9185 17.3128C25.9185 19.2353 24.36 20.7982 22.423 20.836L22.4226 20.8367H21.5525C21.0795 20.8367 20.6258 20.651 20.2913 20.3206L19.3061 19.3476C18.8487 18.8957 18.2575 18.6063 17.6245 18.517L17.5946 18.4874H12.8381C12.1814 18.4874 11.649 17.9615 11.649 17.3128C11.649 16.6641 12.1814 16.1382 12.8381 16.1382H22.3511C23.0078 16.1382 23.5402 16.6641 23.5402 17.3128C23.5402 17.9615 23.0078 18.4874 22.3511 18.4874H19.9729L20.8137 19.318C21.0367 19.5383 21.3392 19.6621 21.6545 19.6621H22.3511C23.6645 19.6621 24.7293 18.6103 24.7293 17.3128C24.7293 16.0154 23.6645 14.9636 22.3511 14.9636H12.8381C11.5247 14.9636 10.4599 16.0154 10.4599 17.3128C10.4599 18.6103 11.5247 19.6621 12.8381 19.6621H17.2041C17.6771 19.6621 18.1308 19.8477 18.4653 20.1781L19.4505 21.1512C20.008 21.7019 20.7641 22.0113 21.5525 22.0113H22.6484V22.0023C25.1368 21.8507 27.1076 19.8091 27.1076 17.3128C27.1076 14.718 24.978 12.6144 22.3511 12.6144H12.8381C10.2112 12.6144 8.08167 14.718 8.08167 17.3128C8.08167 19.9077 10.2112 22.0113 12.8381 22.0113H15.7177C16.1907 22.0113 16.6444 22.1969 16.9789 22.5273L17.9641 23.5004C18.5216 24.0511 19.2777 24.3605 20.0661 24.3605H22.3511C26.2915 24.3605 29.4858 21.2052 29.4858 17.3128C29.4858 13.4205 26.2915 10.2651 22.3511 10.2651H12.8381C8.89774 10.2651 5.70343 13.4205 5.70343 17.3128C5.70343 21.2052 8.89774 24.3605 12.8381 24.3605H14.444C14.9171 24.3605 15.3708 24.5462 15.7053 24.8766L16.6904 25.8497C17.2479 26.4004 18.0041 26.7098 18.7925 26.7098H22.3511C27.605 26.7098 31.864 22.5026 31.864 17.3128C31.864 12.123 27.605 7.91589 22.3511 7.91589L12.8381 7.9159C7.58429 7.9159 3.32519 12.123 3.3252 17.3128C3.3252 22.5026 7.58429 26.7098 12.8381 26.7098Z" fill="#212326"/>
    </g>
    <defs>
    <clipPath id="clip0_211_2072">
    <rect width="28.5388" height="18.7939" fill="white" transform="translate(3.3252 7.91589)"/>
    </clipPath>
    </defs>
    </svg>
    
    const logo6=<svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_211_2076)">
    <path d="M8.81726 10.004C7.40373 10.004 6.04811 10.5655 5.0486 11.5651L1.78662 14.827C0.787105 15.8266 0.225586 17.1822 0.225586 18.5957C0.225586 21.5392 2.61178 23.9254 5.5553 23.9254C6.96883 23.9254 8.32445 23.3639 9.32396 22.3644L11.5803 20.108C11.5803 20.108 11.5803 20.1081 11.5803 20.108L18.1545 13.5338C18.6318 13.0565 19.2793 12.7883 19.9544 12.7883C21.0846 12.7883 22.0428 13.5249 22.375 14.5443L24.4498 12.4695C23.5033 10.987 21.8436 10.004 19.9544 10.004C18.5408 10.004 17.1852 10.5655 16.1857 11.5651L7.35519 20.3956C6.87783 20.873 6.23039 21.1411 5.5553 21.1411C4.14949 21.1411 3.00986 20.0015 3.00986 18.5957C3.00986 17.9206 3.27804 17.2732 3.7554 16.7958L7.01737 13.5338C7.49473 13.0565 8.14217 12.7883 8.81726 12.7883C9.94754 12.7883 10.9057 13.525 11.2379 14.5444L13.3128 12.4695C12.3662 10.9871 10.7066 10.004 8.81726 10.004Z" fill="#394149"/>
    <path d="M18.4924 20.3956C18.0151 20.873 17.3676 21.1411 16.6925 21.1411C15.5624 21.1411 14.6043 20.4047 14.272 19.3855L12.1973 21.4603C13.1438 22.9425 14.8034 23.9254 16.6925 23.9254C18.1061 23.9254 19.4617 23.3639 20.4612 22.3644L29.2917 13.5338C29.7691 13.0565 30.4165 12.7883 31.0916 12.7883C32.4974 12.7883 33.637 13.9279 33.637 15.3337C33.637 16.0088 33.3689 16.6563 32.8915 17.1336L29.6295 20.3956C29.1522 20.873 28.5047 21.1411 27.8296 21.1411C26.6995 21.1411 25.7413 20.4046 25.409 19.3853L23.3343 21.4601C24.2808 22.9425 25.9404 23.9254 27.8296 23.9254C29.2432 23.9254 30.5988 23.3639 31.5983 22.3644L34.8603 19.1024C35.8598 18.1029 36.4213 16.7473 36.4213 15.3337C36.4213 12.3902 34.0351 10.004 31.0916 10.004C29.6781 10.004 28.3225 10.5655 27.3229 11.5651L18.4924 20.3956Z" fill="#394149"/>
    </g>
    <defs>
    <clipPath id="clip0_211_2076">
    <rect width="36.1956" height="13.9214" fill="white" transform="translate(0.225586 10.004)"/>
    </clipPath>
    </defs>
    </svg>
    
    const logo7=<svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_211_2076)">
    <path d="M8.81726 10.004C7.40373 10.004 6.04811 10.5655 5.0486 11.5651L1.78662 14.827C0.787105 15.8266 0.225586 17.1822 0.225586 18.5957C0.225586 21.5392 2.61178 23.9254 5.5553 23.9254C6.96883 23.9254 8.32445 23.3639 9.32396 22.3644L11.5803 20.108C11.5803 20.108 11.5803 20.1081 11.5803 20.108L18.1545 13.5338C18.6318 13.0565 19.2793 12.7883 19.9544 12.7883C21.0846 12.7883 22.0428 13.5249 22.375 14.5443L24.4498 12.4695C23.5033 10.987 21.8436 10.004 19.9544 10.004C18.5408 10.004 17.1852 10.5655 16.1857 11.5651L7.35519 20.3956C6.87783 20.873 6.23039 21.1411 5.5553 21.1411C4.14949 21.1411 3.00986 20.0015 3.00986 18.5957C3.00986 17.9206 3.27804 17.2732 3.7554 16.7958L7.01737 13.5338C7.49473 13.0565 8.14217 12.7883 8.81726 12.7883C9.94754 12.7883 10.9057 13.525 11.2379 14.5444L13.3128 12.4695C12.3662 10.9871 10.7066 10.004 8.81726 10.004Z" fill="#394149"/>
    <path d="M18.4924 20.3956C18.0151 20.873 17.3676 21.1411 16.6925 21.1411C15.5624 21.1411 14.6043 20.4047 14.272 19.3855L12.1973 21.4603C13.1438 22.9425 14.8034 23.9254 16.6925 23.9254C18.1061 23.9254 19.4617 23.3639 20.4612 22.3644L29.2917 13.5338C29.7691 13.0565 30.4165 12.7883 31.0916 12.7883C32.4974 12.7883 33.637 13.9279 33.637 15.3337C33.637 16.0088 33.3689 16.6563 32.8915 17.1336L29.6295 20.3956C29.1522 20.873 28.5047 21.1411 27.8296 21.1411C26.6995 21.1411 25.7413 20.4046 25.409 19.3853L23.3343 21.4601C24.2808 22.9425 25.9404 23.9254 27.8296 23.9254C29.2432 23.9254 30.5988 23.3639 31.5983 22.3644L34.8603 19.1024C35.8598 18.1029 36.4213 16.7473 36.4213 15.3337C36.4213 12.3902 34.0351 10.004 31.0916 10.004C29.6781 10.004 28.3225 10.5655 27.3229 11.5651L18.4924 20.3956Z" fill="#394149"/>
    </g>
    <defs>
    <clipPath id="clip0_211_2076">
    <rect width="36.1956" height="13.9214" fill="white" transform="translate(0.225586 10.004)"/>
    </clipPath>
    </defs>
    </svg>
    
    const logos=[logo1,logo2,logo3,logo4,logo5,logo6,logo7]
  return (
    <div className='animated-div flex flex-row  gap-16 text-[#4D4D4D] bg-[#F5F7FA] px-40 py-10  '>
      <div className='w-[400px] rounded-lg basis-1/3'>
        <img src={image} className='rounded-lg w-[400px]'  />
      </div>
      <div className='basis-2/3'>
        <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
        <h1 className='font-bold text-lg pt-4 text-[#4CAF4F]'>Tim Smith</h1>
        <p className='opacity-50 pt-4'>British Dragon Boat Racing Association</p>
        <div className='flex flex-row pt-5'>
        {logos.map((logo, index) => (
            <div
                key={index}
                className="h-32 object-contain mx-5 cursor-pointer  "
            >
            {logo}
            </div>
            ))}</div>
        </div>
    </div>
  )
}

export default Feature5
