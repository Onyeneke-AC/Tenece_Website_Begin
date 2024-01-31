import React from 'react';

import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',   
    },
    {
        title: 'About Us',
        path: '/about',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Who We Are',
                path: '/who',
            },
            {
                title: 'Our Team',
                path: '/team',
            },
            {
                title: 'Awards',
                path: '/awards',
            },
            {
                title: 'Careers',
                path: '/careers',
            },
        ]
    },
    {
        title: 'Products & Services',
        path: '/products',   
    },
    {
        title: 'Partners',
        path: '/partners',   
    },
    {
        title: 'Clients',
        path: '/clients',   
    },
    {
        title: 'Media',
        path: '/media',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'News',
                path: '/news',
            },
            {
                title: 'Blogs',
                path: '/blogs',
            }
        ]   
    },
    {
        title: 'Contact Us',
        path: '/contact-us',   
    }
]