// For CSS
declare module '*.module.css' {
	const classes: { [key: string]: string }
	export default classes
}

declare module '*.scss' {
	const classes: { [key: string]: string }
	export default classes
}

// For SCSS
declare module '*.module.scss' {
	const classes: { [key: string]: string }
	export default classes
}

declare module '*.png'

declare module '*.svg'

declare module 'profile/routes' {
	const routes: any[]

	export default routes
}

declare module 'header/header' {
	const Page: React.ComponentProps

	export default Page
}

declare module 'Header/header' {
	const Page: React.ComponentProps

	export default Page
}

declare module 'Products/App' {
	const Page: React.ComponentProps

	export default Page
}

declare module 'header/header' {
	const Page: React.ComponentProps

	export default Page
}

declare module 'sidebar/sidebar' {
	const Page: React.ComponentProps

	export default Page
}

declare module 'login/login' {
	const Page: React.ComponentProps

	export default Page
}
