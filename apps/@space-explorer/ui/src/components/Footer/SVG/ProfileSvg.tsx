export const ProfileSvg = (props: ProfileSvgProps) => {
    return (
        <svg className = { props.className } viewBox = '0 0 60 60' xmlns = 'http://www.w3.org/2000/svg'>
            <path d = 'M34.3292,44.2049 L34.3292,38.0329 C34.3292,37.5014601 34.6693111,37.0296616 35.1735065,36.8616872 C35.4385218,36.7733965 35.9433251,36.465004 36.4784743,35.8407837 C37.4396927,34.7195785 38.0332,33.0381614 38.0332,30.6259 C38.0332,29.9441045 38.5859045,29.3914 39.2677,29.3914 C39.6607,29.3914 39.6607,26.9234 39.2677,26.9234 C38.5859045,26.9234 38.0332,26.3706955 38.0332,25.6889 C38.0332,25.3081694 38.8026158,22.8899479 38.8006484,22.8968333 C39.1633848,21.6273676 39.3905444,20.4933818 39.4550659,19.4415961 C39.503364,18.6542722 39.4551433,17.9518235 39.3040306,17.3471961 C38.3816294,13.6560966 26.5745181,13.6560966 25.6513124,17.3474244 C25.4914287,17.9867002 24.8576389,18.3876985 24.2114815,18.2584042 C23.0930264,18.0346045 22.613323,18.199082 22.3783146,18.6129395 C22.1083871,19.0882909 22.0435199,19.9822988 22.2058533,21.1740926 C22.2918561,21.8054947 22.4339146,22.4836164 22.6296204,23.2462212 C22.6891523,23.4781986 22.7517468,23.7109969 22.8257853,23.9781512 C22.8635321,24.1143533 22.9835144,24.5418514 23.0019814,24.6082962 C23.1715632,25.2184591 23.2192,25.4192307 23.2192,25.6889 C23.2192,26.3706955 22.6664955,26.9234 21.9847,26.9234 C21.5917,26.9234 21.5917,29.3914 21.9847,29.3914 C22.6664955,29.3914 23.2192,29.9441045 23.2192,30.6259 C23.2192,33.0381614 23.8127073,34.7195785 24.7739257,35.8407837 C25.3090749,36.465004 25.8138782,36.7733965 26.0788935,36.8616872 C26.5830889,37.0296616 26.9232,37.5014601 26.9232,38.0329 L26.9232,44.2049 C26.9232,44.7181974 26.6055759,45.177938 26.1254803,45.3595485 C25.4468882,45.6162463 24.7257174,45.8830382 23.8484024,46.2030684 C23.5852443,46.2990642 23.3096001,46.3992932 22.9822465,46.5180757 C22.5483693,46.6754303 22.5483693,46.6754303 22.1144972,46.8326908 C15.823599,49.1133798 13.1207725,50.2415422 11.1458591,51.6072634 C10.5850893,51.9950552 9.81612831,51.8548288 9.42833657,51.2940591 C9.04054482,50.7332893 9.1807712,49.9643283 9.74154094,49.5765366 C11.9675076,48.0372034 14.7397137,46.8800818 21.272986,44.5115231 C21.7070759,44.3541835 21.7070759,44.3541835 22.1400807,44.1971454 C22.4662196,44.0788036 22.7406088,43.979031 23.0022887,43.8835744 C23.5367202,43.6886225 24.0120036,43.5138561 24.4542,43.349381 L24.4542,38.8021362 C23.9640548,38.5027619 23.4259951,38.0619221 22.8994743,37.4477663 C21.6877334,36.0343412 20.9232744,34.0804993 20.7761976,31.5425474 C18.7880062,30.3779581 18.7060571,26.3394486 20.5303504,24.9379454 C20.4971335,24.8192971 20.4638142,24.7001431 20.4464673,24.63755 C20.3685335,24.3563403 20.3020129,24.1089401 20.2381147,23.8599488 C20.0206144,23.0124178 19.8600579,22.2459952 19.759443,21.5073163 C19.5304684,19.826266 19.6301492,18.4524514 20.231319,17.3937714 C20.9074054,16.2031608 22.0998633,15.6304687 23.6747154,15.7070499 C26.5861819,10.5857369 40.2460215,10.9328565 41.6993615,16.748572 C41.9170021,17.6193888 41.9822143,18.5693581 41.9194333,19.5927719 C41.8422598,20.8508026 41.5823361,22.1483475 41.1746353,23.5751749 C41.0901709,23.8707742 41.0017945,24.1636645 40.9013416,24.4843432 C40.8726962,24.5757886 40.8064686,24.7841061 40.7504116,24.9600676 C42.5454371,26.381457 42.4540341,30.3840264 40.4762024,31.5425474 C40.3291256,34.0804993 39.5646666,36.0343412 38.3529257,37.4477663 C37.8264049,38.0619221 37.2883452,38.5027619 36.7982,38.8021362 L36.7982,43.3393162 C38.9261537,44.1141325 44.6342985,46.2037688 46.2544868,46.8674449 C48.5716635,47.8166277 50.2805092,48.6688813 51.5422012,49.5512517 C52.1009191,49.9419938 52.2370904,50.7116832 51.8463483,51.2704012 C51.4556062,51.8291191 50.6859168,51.9652904 50.1271988,51.5745483 C49.0463501,50.8186516 47.4811329,50.0380298 45.3185892,49.1521893 C43.3372778,48.3405866 34.9094887,45.2779012 35.1298403,45.3606491 C34.6482376,45.1798652 34.3292,44.7193572 34.3292,44.2049 Z' />
            <path d = 'M30.62,60.245 C14.2585643,60.245 0.995,46.9814357 0.995,30.62 C0.995,14.2585643 14.2585643,0.995 30.62,0.995 C46.9814357,0.995 60.245,14.2585643 60.245,30.62 C60.245,46.9814357 46.9814357,60.245 30.62,60.245 Z M30.62,57.775 C45.6172924,57.775 57.775,45.6172924 57.775,30.62 C57.775,15.6227076 45.6172924,3.465 30.62,3.465 C15.6227076,3.465 3.465,15.6227076 3.465,30.62 C3.465,45.6172924 15.6227076,57.775 30.62,57.775 Z' />
        </svg>
    );
};

/* Types */
type ProfileSvgProps = React.HTMLAttributes<HTMLOrSVGElement>;