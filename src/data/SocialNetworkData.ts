import facebookImg from '@/assets/img/footerImg/facebook.png';
import instagramImg from '@/assets/img/footerImg/instagram.png';
import linkedInImg from '@/assets/img/footerImg/linkedIn.png';
import type { SocialNetwork } from '@/interface/interfaceSocialNetwork.ts';

export const socialNetworkData: SocialNetwork[] = [
    {
        img: `${facebookImg}`,
        url: 'https://www.facebook.com/profile.php?id=100015349961940',
        altName: 'Facebook',
    },
    {
        img: `${instagramImg}`,
        url: 'https://www.instagram.com/nosatskyi.k/',
        altName: 'Instagram',
    },
    {
        img: `${linkedInImg}`,
        url: 'https://www.linkedin.com/in/костянтин-носацький-4617722a5/',
        altName: 'LinkedIn',
    },
];
