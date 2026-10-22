import type { BehaviorModule } from 'wunphile'

export default {
	behaviorModuleUrl: import.meta.url,
	behavior: (element) => {
		const button = element as HTMLButtonElement
		let count = parseInt(button.dataset.initial ?? '0')!

		button.addEventListener('click', () => {
			button.innerText = `Clicked ${count++} times`
		})
	},
} satisfies BehaviorModule
