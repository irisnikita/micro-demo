import { ToastEnums } from './enum'
import { toast, ToastOptions } from 'react-toastify'

export interface ToastProps {
	type: ToastEnums
	message: string
}

export const ShowNotificationToast = ({ type, message }: ToastProps) => {
	const options: ToastOptions = {
		position: 'top-right',
		autoClose: 2500,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	}

	switch (type) {
		case ToastEnums.success:
			return toast.success(message, options)
		case ToastEnums.error:
			return toast.error(message, options)
		case ToastEnums.info:
			return toast.info(message, options)
		case ToastEnums.warning:
			return toast.warning(message, options)

		default:
			return
	}
}
