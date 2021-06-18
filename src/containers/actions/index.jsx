import React, { useState, useEffect, useCallback }  from 'react';
import Flickerbox from "../";
import company_1 from './../../assets/images/company_1.png'
import company_2 from './../../assets/images/company_2.png'
import company_3 from './../../assets/images/company_3.png'
import company_4 from './../../assets/images/company_4.png'
import company_5 from './../../assets/images/company_5.png'


const Actions = () => {
	const [offsetY, setOffsetY] = useState(window.scrollY);
	const [scrollDown, setScrollDown] = useState(false);
	const [display, setDisplay] = useState(false);
	
	const companyImages = [
		company_1,
		company_2,
		company_3,
		company_4,
		company_5,
	]

	const technologyPartners = [
		{	
			attributes: {
				className: 'first-row',
			},
			columns: [	
				{
					attributes: {
						className: 'first-column',
					},
					hrefTag: [
						{
							href: "https://www.flickerbox.com/our-work/airship/",
							className: "airship",
							title: 'Airship',
							subTitle: 'Brand Redesign',
						},
						{
							href: "https://www.flickerbox.com/our-work/betterup/",
							className: "better-up",
							title: 'BetterUp',
							subTitle: 'Website Redesign',
						}
					]
				},
				{
					attributes: {
						className: 'second-column',
						width: 4
					},
					hrefTag: [
						{
							href: "https://www.flickerbox.com/our-work/rsa/",
							className: "rsa",
							title: 'RSA',
							subTitle: 'RSA Link UI & UX',
						}
					]
				},
				{
					attributes: {
						className: 'third-column',
					},
					hrefTag: [
						{
							href: "https://www.flickerbox.com/our-work/okta/",
							className: "okta",
							title: 'Okta',
							subTitle: 'Partnership & D8 Replatform',
						}
					]
				}
			],
		},
		{	
			attributes: {
				className: 'second-row',
			},
			columns: [	
				{
					attributes: {
						className: 'first-column',
						width: 9
					},
					hrefTag: [
						{
							href: "https://www.flickerbox.com/our-work/carta/",
							className: "carta",
							title: 'Carta',
							subTitle: 'Website Development & Maintenance',
						}
					]
				},
				{
					attributes: {
						className: 'second-column',
					},
					hrefTag: [
						{
							href: "https://www.flickerbox.com/our-work/rezilion/",
							className: "rezilion",
							title: 'Rezilion',
							subTitle: 'Website Launch',
						}
					]
				}
			],
		},
		{	
			attributes: {
				className: 'third-row',
			},
			columns: [	
				{
					attributes: {
						className: 'first-column',
						width: 10
					},
					hrefTag: [
						{
							href: "https://www.flickerbox.com/our-work/stitch-fix-women/",
							className: "stitchFix",
							title: 'Stich Fix',
							subTitle: "Women's Blog Redesign",
						}
					]
				},
				{
					attributes: {
						className: 'second-column',
					},
					hrefTag: [
						{
							href: "https://www.flickerbox.com/our-work/agari/",
							className: "agari",
							title: 'Agari',
							subTitle: 'Website Redesign',
						}
					]
				}
			],
		},
		{	
			attributes: {
				className: 'fourth-row',
			},
			columns: [	
				{
					attributes: {
						className: 'first-column',
						width: 11
					},
					hrefTag: [
						{
							href: "https://www.flickerbox.com/our-work/nylas/",
							className: "nylas",
							title: 'Nylas',
							subTitle: "Website Redesign",
						}
					]
				},
				{
					attributes: {
						className: 'second-column',
					},
					hrefTag: [
						{
							href: "https://www.flickerbox.com/our-work/lakeside-software/",
							className: "lakeside",
							title: 'Lakeside Software',
							subTitle: 'Website Redesign',
						}
					]
				}
			],
		},
		{	
			attributes: {
				className: 'fifth-row',
			},
			columns: [	
				{
					attributes: {
						className: 'first-column',
						width: 10
					},
					hrefTag: [
						{
							href: "https://www.flickerbox.com/our-work/okta-businesses-at-work/",
							className: "oktaBusiness",
							title: 'Okta',
							subTitle: "Business at Work",
						}
					]
				},
				{
					attributes: {
						className: 'second-column',
					},
					hrefTag: [
						{
							href: "https://www.flickerbox.com/our-work/stitch-fix-men/",
							className: "stitchFixMen",
							title: 'Stitch Fix',
							subTitle: "Men's Blog Redesign",
						}
					]
				}
			],
		},
		{	
			attributes: {
				className: 'sixth-row',
			},
			columns: [	
				{
					attributes: {
						width: 8
					},
					hrefTag: []
				},
				{
					attributes: {
						className: 'second-column',
					},
					hrefTag: [
						{
							href: "https://www.flickerbox.com/our-work/astro/",
							className: "astro",
							title: 'Astro',
							subTitle: "Website Launch",
						}
					]
				}
			],
		}
	]


	const menuLink = [
		{href: 'https://www.flickerbox.com/our-work/', title: 'Our work'},
		{href: 'https://www.flickerbox.com/what-we-do/', title: 'What we do'},
		{href: 'https://www.flickerbox.com/who-we-are/', title: 'Who we are'},
		{href: 'https://www.flickerbox.com/blog/', title: 'Our blog'},
		{href: 'https://www.flickerbox.com/careers/', title: 'Careers'},
		{href: 'https://www.flickerbox.com/contact-us/', title: 'Contact us'},
	]


	const handleNavigation = useCallback(
		e => {
			setDisplay(false);

			const window = e.currentTarget;
			if (offsetY > window.scrollY) {
				setScrollDown(false);
			} else if (offsetY < window.scrollY) {
				setScrollDown(true);
			}
			setOffsetY(window.scrollY);
		}, [offsetY]
	);

	useEffect(() => {
		setOffsetY(window.scrollY);
		window.addEventListener("scroll", handleNavigation);

		return () => {
			window.removeEventListener("scroll", handleNavigation);
		};
	}, [handleNavigation]);


	const data = {
		header: {
			offsetY,
			scrollDown,
			display, 
			setDisplay,
			menuLink
		},
		content: {
			technologyPartners, 
			companyImages
		}
	}

	return <Flickerbox {...data} />;
}

export default Actions;